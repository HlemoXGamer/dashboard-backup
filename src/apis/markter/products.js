import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("markter/products");

export const removeImage = (data) =>
  service.post("/markter/products/images", data);


export function getStatsProduct() {
  return service.get("/stats/product");
}
