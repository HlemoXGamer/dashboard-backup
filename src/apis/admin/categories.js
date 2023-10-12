import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/categories");

export function updateSorted(data) {
    return service.post("/categories/sorted_category", data);
}