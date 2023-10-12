import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/products");

export const removeImage = (data) => service.post("/products/images", data);

export function getOrderProducts() {
  return service.get("/products/order_product");
}
