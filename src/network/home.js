// 封装home页面的请求

import {request} from './request'

// 轮播图 & banner
export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}

// 商品信息
export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type:type,
            page:page
        }
    })
}