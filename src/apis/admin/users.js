import service, { resource } from "../_client";

export let { get, show, update } = resource("/users");

export function updateUser(data) {
  if (data instanceof FormData) {
    data.append("_method", "put");
  } else {
    data["_method"] = "put";
  }
  return service.post("/profile/password", data);
}
