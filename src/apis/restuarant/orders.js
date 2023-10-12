import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource(
  "restaurant-apis/orders",
);

export function checkPhone(data) {
  return service.post("/restaurant-apis/phone/check", data);
}

export function checkCode(data) {
  return service.post("/restaurant-apis/voucher/check", data);
}