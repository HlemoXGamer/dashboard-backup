import router from "@/router";
import axios from "axios";
const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: "https://beta-be.sablesweets.com/api",
  // timeout: 2000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// ℹ️ Add request interceptor to send the authorization header on each subsequent request after login
axiosIns.interceptors.request.use((config) => {
  // Retrieve token from localStorage
  const token = localStorage.getItem("accessToken");

  // If token is found
  if (token) {
    // Get request headers and if headers is undefined assign blank object
    config.headers = config.headers || {};

    // Set authorization header
    // ℹ️ JSON.parse will convert token to string
    config.headers.Authorization = token ? `Bearer ${JSON.parse(token)}` : "";
  }

  // Return modified config
  return config;
});

axiosIns.interceptors.response.use(
  (response) => {
    // If the response is successful (status code 2xx), return it as-is
    return response;
  },
  (error) => {
    // If the response has a 401 status code, handle the unauthorized request
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userData");
      router.go("/");
    }

    // For other errors, reject the promise and pass the error along
    return Promise.reject(error);
  },
);
export default axiosIns;
