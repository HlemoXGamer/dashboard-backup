import service, { resource } from "../_client";

export const { get, show, update, create, remove } = resource("/agent/orders");
export const { get: getMyOrders } = resource("/agent/my-orders");

export const assignDelivery = (data) => {
  return service.put("assign/delivery", data);
};

export const getCustomerDetails = (data) => {
  return service.put("", data);
};

export function checkPhone(data) {
  return service.post("/agent/phone/check", data);
}

export function checkCode(data) {
  return service.post("/agent/voucher/check", data);
}

export function updateBranch(data) {
  return service.post("/agent/update-branch", data);
}