import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/operation/orders");

export function updateBranch(data) {
  return service.post("/operation/update-branch", data);
}
