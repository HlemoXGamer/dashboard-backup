import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/logistic/orders");

export function updateBranch(data) {
  return service.post("/logistic/update-branch", data);
}

export const assignDelivery = (data) => {
  return service.put("/logistic/assign/delivery", data);
};