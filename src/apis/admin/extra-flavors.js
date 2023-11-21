import service, { resource } from "../_client";

export let { get, show, update, create, remove } = resource("/extra-flavor");

export function getFlavor()
{
    return service.get("/extra-flavor?isExtra=0");
}


export function getExtra()
{
    return service.get("/extra-flavor?isExtra=1");
}
