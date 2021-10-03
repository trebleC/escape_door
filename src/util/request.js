import axios from "axios";
import {BASE_API_URL} from '../config'

export function request(config){
    //创建axios实例
    const instance = axios.create({
        baseURL:BASE_API_URL,
        //timeout:5000,
    })

    //请求拦截
    instance.interceptors.request.use(config => {
        config.headers = {

        }
        return config
    },error => {
        console.log(error)
        return Promise.reject(error)
    })

    //响应拦截
    instance.interceptors.response.use(res =>{
        if(res.data.code != '200'){
            return Promise.reject(res.data.message)
        }
        return res.data
    },error => {
        console.error(error)
        return Promise.reject(error)
    })
    return instance(config)
}