import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/branches");

export function getServiceCost() {
  return service.get("/branch/service-cost");
}

export function setServiceCost(data) {
  return service.post("/branch_service", data);
}

export function getBranchesLog(data) {
  return service.get(`/product-history?${data}`)
}