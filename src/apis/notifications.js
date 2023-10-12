import service, { resource } from "./_client";
// const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
// export let { get } = resource(`${userRole == 'restaurant' ? '/restaurant-apis' : ''}/notifications`);

export function update(data) {
  return service.post(`${data == 'restaurant' ? '/restaurant-apis' : ''}/notifications`);
}

export function getUserNotifications(data) {
  return service.get(`${data == 'restaurant' ? '/restaurant-apis' : ''}/notifications`)
}