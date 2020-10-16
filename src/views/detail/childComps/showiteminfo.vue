<template>
    <div class="showinfo">
        <!-- 显示商品的标题 -->
        <div class="itemtitle">{{iteminfo.title}}</div>

        <!-- 显示商品价格等信息 -->
        <div class="showprice">
            <span class="newprice">￥ {{iteminfo.realPrice}}</span>
            <span class="oldprice">{{iteminfo.oldPrice}}</span>
            <span class="discount" v-show="iteminfo.discount">{{iteminfo.discount}}</span>
        </div>

        <!-- 显示 columns 中的信息 -->
        <div class="itemcolumns">
            <span v-for="item in iteminfo.columns">{{item}}</span>
        </div>

        <!-- 显示支持的服务 -->
        <div class="shopservice">
            <div v-for="(item,index) in iteminfo.services">
                <img :src="'http:'+item.icon" alt="">
                <span>{{item.name}}</span>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name:'showiteminfo',
    props:{
        iteminfo:{
            default:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            
        }
    }
}
</script>

<style lang="less" scoped>
.showinfo{
    width: 100vw;
    padding: 2vh 2vh 2vh 2vh;
}
.itemtitle{
    font-size: 120%;
    font-weight: bold;
}
.showprice{
    padding: 2vh 0 2vh 0;
    line-height: 5vh;
}
.newprice{
    color: red;
    font-weight: bold;
    font-size: 140%;
}
.oldprice{
    padding: 0 3vh 0 3vh;
    text-decoration: line-through;
}
.discount{
    background-color: #2bac8f;
    padding: 1vh 1vh 1vh 1vh;
    color: #fff;
    border-radius: 2vh;
}
.itemcolumns{
    display: flex;
    justify-content: space-between;
    padding: 1vh 1vh 1vh 1vh;
    border-bottom: 0.5vh solid #F5F5F5;
}
.shopservice{
    display: flex;
    justify-content: space-between;
    line-height: 8vh;
    border-bottom: 0.5vh solid #F5F5F5;
    font-size: 80%;
    flex-wrap: wrap;
}

.shopservice img{
    width: 1.5vh;
}

</style>