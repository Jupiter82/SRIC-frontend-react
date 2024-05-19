import { adminHttpBase, userHttpBase } from "./httpBase"

export function adminFetchApi (endPoint , params){
    return adminHttpBase().get(`${endPoint}/${params}`)
}

export function adminPostApi (endPoint , params){
    return adminHttpBase().post(`${endPoint}`, params)
}

export function adminUpdateApi (endPoint , params){
    return adminHttpBase().put(`${endPoint}`, params)
}
export function adminDeleteApi (endPoint , params){
    return adminHttpBase().delete(`${endPoint}`, params)
}

// User BASE APIS

export function userFetchApi (endPoint , params){
    if(params) {

        return  userHttpBase().get(`${endPoint}/${params}`)
    }else {
        return  userHttpBase().get(`${endPoint}`)

    }
}