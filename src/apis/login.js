import service from "./_client";

export async function login(data) {
  return service.post("/auth/login", data);
}
