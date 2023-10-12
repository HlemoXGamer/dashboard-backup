import service, { resource } from "../_client";

export function check(data) {
  return service.post("/restaurant-apis/employee/check", data);
}
