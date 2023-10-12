import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/employee");

export function check(data) {
  return service.post("agent/employee/check", data);
}
