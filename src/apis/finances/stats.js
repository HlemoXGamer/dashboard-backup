import service, { resource } from '../_client';

export let { get } = resource('/finance/stats');

export function getYesterdayStats(){
    return service.get(`/finance/stats?yesterday`);
}

export function getTodayStats(){
    return service.get(`/finance/stats?today`);
}

export function getWeekStats(){
    return service.get(`/finance/stats?week`);
}

export function mostSoldProduct(data) {
    return service.get(`/finance/stats/product?${data}`);
}

export function exportExcel(data) {
    return service.get(`/finance/stats/export?${data}`);
}

export function getBranchArea(data) {
    return service.get(`/finance/stats/branchArea?type=${data}`);
}

export function getCustomReports(data) {
    return service.get(`/finance/stats/custom?${data}`)
}