import {request} from './request'

export function getcategory(){
    return request({
        url:'/category'
    })
}

export function getcategoryinfo(maitKey){
    return request({
        url:'/subcategory',
        params:{
            maitKey
        }
    })
}