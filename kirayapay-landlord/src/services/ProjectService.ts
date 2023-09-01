import jsonToQueryString from '@/utils/urlQuery';
import ApiService from './ApiService'

export async function apiGetProjectDashboardData<T>() {
    return ApiService.fetchData<T>({
        url: '/project/dashboard',
        method: 'get',
    })
}

export async function apiGetProjectList<T, U extends Record<string, unknown>>(
    data: U
) {
    return ApiService.fetchData<T>({
        // url: `/building${jsonToQueryString(data)}`,
        url: `/building`,
        method: 'get',
        data,
    })
}
export async function apiGetProjectDetail<T, U extends Record<string, unknown>>(
    data: U
) {
    return ApiService.fetchData<T>({
        // url: `/building${jsonToQueryString(data)}`,
        url: `/building/6`,
        method: 'get',
        data,
    })
}

export async function apiPutProjectList<T, U extends Record<string, unknown>>(
    data: U
) {
    return ApiService.fetchData<T>({
        url: '/project/list/add',
        method: 'put',
        data,
    })
}

export async function apiGetScrumBoards<T>() {
    return ApiService.fetchData<T>({
        url: '/project/scrum-board/boards',
        method: 'post',
    })
}

export async function apiGetScrumBoardtMembers<T>() {
    return ApiService.fetchData<T>({
        url: '/project/scrum-board/members',
        method: 'post',
    })
}

export async function apiGetScrumBoardtTicketDetail<T>() {
    return ApiService.fetchData<T>({
        url: '/project/scrum-board/tickets/detail',
        method: 'get',
    })
}
