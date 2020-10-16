export default {
    //购物车商品计数
    addcount(state,payload){
        payload.count++
      },
      //将商品添加到 购物车中
      addtolist(state,payload){
        payload.count = 1
        payload.checked = true
          state.cartlist.push(payload)
      }
}