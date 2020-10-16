export default{
    addcart(context,payload){
        //判断购物车中是否有  新添加的商品， 有则 不添加
        let panduan = context.state.cartlist.find( item => { return payload.iid === item.iid})
        if(panduan){
          console.log('已经有了 么么哒')
          context.commit('addcount',panduan)
        }else{
          console.log('添加好了 么么哒')
          context.commit('addtolist',payload)
        }
        // console.log(panduan)
        console.log(context.state.cartlist)
      }
}