import { resource } from "../_client";

export let { get, show, update, create, remove } = resource(
  "restaurant-apis/categories",
);