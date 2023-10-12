import service, { resource } from '../_client';

export let { get } = resource('/logistic/stats');

export function getYesterdayStats(){
    return service.get(`/logistic/stats?yesterday`);
}

export function getTodayStats(){
    return service.get(`/logistic/stats?today`);
}

export function getWeekStats(){
    return service.get(`/logistic/stats?week`);
}

export function mostSoldProduct(data) {
    return service.get(`/logistic/stats/product?${data}`);
}

export function exportExcel(data) {
    return service.get(`/logistic/stats/export?${data}`);
}


export function getBranchArea(data) {
    return service.get(`/logistic/stats/branchArea?type=${data}`);
}

export function getCustomReports(data) {
    return service.get(`/logistic/stats/custom?${data}`)
}