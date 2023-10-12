import service, { resource } from '../_client';

export let { get } = resource('/operation/stats');

export function getYesterdayStats(){
    return service.get(`/operation/stats?yesterday`);
}

export function getTodayStats(){
    return service.get(`/operation/stats?today`);
}

export function getWeekStats(){
    return service.get(`/operation/stats?week`);
}

export function mostSoldProduct(data) {
    return service.get(`/operation/stats/product?${data}`);
}

export function exportExcel(data) {
    return service.get(`/operation/stats/export?${data}`);
}

export function getBranchArea(data) {
    return service.get(`/operation/stats/branchArea?type=${data}`);
}

export function getCustomReports(data) {
    return service.get(`/operation/stats/custom?${data}`)
}