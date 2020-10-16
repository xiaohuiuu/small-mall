<template>
    <tabbar>

      <tabbaritem path="/home">
        <img src="../../assets/img/tabbar/home.png" alt="" slot="item-img">
        <img src="../../assets/img/tabbar/homeSelect.png" alt="" slot="item-img-select">
        <div slot="item-text">首页</div>
        </tabbaritem>
      

      
        <tabbaritem path="/category">
        <img src="../../assets/img/tabbar/classify.png" alt="" slot="item-img">
         <img src="../../assets/img/tabbar/classifySelect.png" alt="" slot="item-img-select">
        <div slot="item-text">分类</div>
        </tabbaritem>
      
      
      

      
        <tabbaritem path="/cart">
        <img src="../../assets/img/tabbar/shop.png" alt="" slot="item-img">
         <img src="../../assets/img/tabbar/shopSelect.png" alt="" slot="item-img-select">
        <div slot="item-text">购物车</div>
        </tabbaritem>
      

    
     
        <tabbaritem path="/profile">
        <img src="../../assets/img/tabbar/user.png" alt="" slot="item-img">
        <img src="../../assets/img/tabbar/userSelect.png" alt="" slot="item-img-select">
        <div slot="item-text">用户</div>
        </tabbaritem>


    </tabbar>
</template>


<script>
import tabbar from '../common/tabbar/tabbar'
import tabbaritem from '../common/tabbar/tabbar-item'


export default {
    name:'maintabbar',
    components:{
        tabbaritem,
        tabbar
    }
}
</script>


<style lang="less" scoped>

</style>