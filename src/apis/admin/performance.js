import service, { resource } from "../_client";

export let { get, show } = resource("/performance");

export function showPerformance(id, params) {
  return service.get(`/performance/${id}`, { params });
}
