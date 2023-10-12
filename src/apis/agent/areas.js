import service, { resource } from "../_client";

export let { get } = resource("/areas");

export function getUnique(params) {
  return service.get("/branch/areas", { params });
}
