import {$authHost, $host} from "./index";

export const fetchSection = async () => {
    const {data} = await $host.get('api/section')
    return data
}
export const fetchAcademy = async (id) => {
    const {data} = await $host.get('api/academy/page/' + id +'?page=0&size=2')
    return data
}
export const fetchAllAcademy = async () => {
    const {data} = await $host.get('api/academy/')
    return data
}

export const fetchOneCategory = async (id) => {
    const {data} = await $host.get('api/category/' + id)
    return data
}
export const fetchAllClass = async () => {
    const {data} = await $host.get('api/class/admin')
    return data
}
export const fetchReview = async (id) => {
    const {data} = await $host.get('api/class/reviews/' + id)
    return data
}
export const createReview = async () => {
    const {data} = await $authHost.post('api/review')
    return data
}



