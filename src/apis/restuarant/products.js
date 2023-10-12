import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/restaurant-apis/products");

export const removeImage = (data) => service.post("/restaurant-apis/products/images", data);
