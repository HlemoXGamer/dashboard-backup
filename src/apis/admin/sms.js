import service, { resource } from "../_client";

export let { get } = resource("/smsBalance");

export async function sendSMS(data) {
  return service.post("/sendSmS", data);
}
