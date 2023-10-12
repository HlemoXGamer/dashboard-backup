import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/areas");

export function getUnique(params) {
  return service.get("/branch/areas", { params });
}
