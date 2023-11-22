import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/restaurant-apis/products");

export const removeImage = (data) => service.post("/restaurant-apis/products/images", data);

export function updateProducts(data) {
    return service.post("/restaurant-apis/update/products", data);
}

export function getStatsProduct() {
    return service.get("/stats/product");
}