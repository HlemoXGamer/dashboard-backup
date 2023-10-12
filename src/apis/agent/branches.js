import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/agent/branches");

export function getServiceCost() {
    return service.get("/agent/branch/service-cost");
  }