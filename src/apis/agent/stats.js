import service, { resource } from '../_client';

export let { get } = resource('/agent/stats');

export function getYesterdayStats(){
    return service.get(`/agent/stats?yesterday`);
}

export function getTodayStats(){
    return service.get(`/agent/stats?today`);
}

export function getWeekStats(){
    return service.get(`/agent/stats?week`);
}

export function mostSoldProduct(data) {
    return service.get(`/agent/stats/product?${data}`);
}

export function exportExcel(data) {
    return service.get(`/agent/stats/export?${data}`);
}


export function getBranchArea(data) {
    return service.get(`/agent/stats/branchArea?type=${data}`);
}

export function getCustomReports(data) {
    return service.get(`/agent/stats/custom?${data}`)
}