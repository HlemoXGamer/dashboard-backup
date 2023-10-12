import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/restaurant-apis/areas");

export function getAllAreas() {
    return service.get("/areas");
}