import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/agent/products");

export const removeImage = (data) => service.post("products/images", data);
export function getOrderProducts(data) {
  return service.get(`/agent/products/order_product?${data}`);
}

export function getStatsProduct() {
  return service.get("/stats/product");
}

export function getProductsCustomizeReport() {
  return service.get(`/agent/products?hasExtra`);
}