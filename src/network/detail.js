import {request} from './request'

export function getdatas(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}


export function getrecommends(){
    return request({
        url:'/recommend'
    })
}

//将 商品的信息封装成一个对象
export  class iteminfo{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

//将展示 商家 的信息封装成一个类
export  class shopinfo{
    constructor(shopInfo){
        this.name = shopInfo.name
        this.score = shopInfo.score
        this.shopid = shopInfo.shopId
        this.shoplogo = shopInfo.shopLogo
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.good = shopInfo.cGoods
    }
}