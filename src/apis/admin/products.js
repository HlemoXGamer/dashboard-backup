import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/products");

export const removeImage = (data) => service.post("/products/images", data);

export function getProducts() {
  return service.get("/stats/product");
}

export function getOrderProducts(data) {
  return service.get(`/products/order_product?${data}`);
}

export function getStatsProduct() {
  return service.get("/stats/product");
}
