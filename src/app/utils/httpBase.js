import axios from "axios";

export const adminHttpBase = () =>{
    const token = localStorage.getItem('token')

    const headers = {
        // Authorization : `Bearer ${localStorage.getItem('token')}`
        Authorization : `Bearer ${token}`
    }

    const api = axios.create({
        baseURL: 'https://sric.onrender.com',
        headers:headers,
        responseType:'json'
    })
    return api
}

export const userHttpBase = () =>{
    const userApi = axios.create({
        baseURL: 'https://sric.onrender.com',
        // baseURL: 'http://192.168.101.10:3005',
        responseType:'json',
    })
    return userApi
}