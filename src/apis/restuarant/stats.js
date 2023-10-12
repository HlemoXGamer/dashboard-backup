import service, { resource } from '../_client';

export let { get } = resource('/restaurant-apis/stats');

export function getYesterdayStats(data){
    return service.get(`/restaurant-apis/stats?yesterday`, data);
}

export function getTodayStats(data){
    return service.get(`/restaurant-apis/stats?today`, data);
}

export function getWeekStats(data){
    return service.get(`/restaurant-apis/stats?week`, data);
}

export function mostSoldProduct(data) {
    return service.get(`/restaurant-apis/stats/product?${data}`);
}

export function exportExcel(data) {
    return service.get(`/restaurant-apis/stats/export?${data}`);
}

export function getBranchArea(data) {
    return service.get(`/restaurant-apis/stats/branchArea?type=${data}`);
}