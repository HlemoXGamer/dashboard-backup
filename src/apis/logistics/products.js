import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/logistic/products");

export function getStatsProduct() {
    return service.get("/stats/product");
}