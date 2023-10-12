import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/restaurant-apis/branches");

export function getServiceCost() {
    return service.get("/restaurant-apis/branch/service-cost");
}