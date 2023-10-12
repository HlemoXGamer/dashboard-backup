import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/orders");

export const assignDelivery = (data) => {
  return service.put("assign/delivery", data);
};

export function reFund(data) {
  return service.post("reFund", data);
}

export function checkPhone(data) {
  return service.post("/phone/check", data);
}

export function checkCode(data) {
  return service.post("/voucher/check", data);
}

export function updateBranch(data) {
  return service.post("/update-branch", data);
}
