import service, { resource } from '../_client';

export let { get } = resource('/stats');

export function getYesterdayStats(){
    return service.get(`/stats?yesterday`);
}

export function getTodayStats(){
    return service.get(`/stats?today`);
}

export function getWeekStats(){
    return service.get(`/stats?week`);
}

export function mostSoldProduct(data) {
    return service.get(`/stats/product?${data}`);
}

export function exportExcel(data) {
    return service.get(`/stats/export?${data}`);
}


export function getBranchArea(data) {
    return service.get(`/stats/branchArea?type=${data}`);
}

export function getCustomReports(data) {
    return service.get(`/stats/custom?${data}`)
}

export function getWebStats(data) {
    return service.get(`/stats/google-analytics?${data}`)
}