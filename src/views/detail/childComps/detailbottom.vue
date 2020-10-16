<template>
    <div class="detailbb">
        <div class="detailbottom">
            <div class="bottom1">
                <div>
                    <img src="../../../assets/img/public/Customer service.png" alt="">
                </div>
                <div>
                    <img src="../../../assets/img/public/shop.png" alt="">
                </div>
                <div>
                    <img src="../../../assets/img/public/like.png" alt="">
                </div>
            </div>
            <div class="bottom2" @click="addcart">加入购物车</div>
            <div class="bottom3" @click="gmclick">购买</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detailbottom',
    methods:{
        addcart(){
            // console.log('点击了添加购物车')
            this.$emit('addcart')
            
        },
        gmclick(){
            this.$emit('gmclick')
        }
    }
}
</script>


<style lang="less" scoped>
.detailbb{
    // position: relative;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #fff;
}
.detailbottom{
        height: 8vh;
        display: flex;
        // align-items: center;
        text-align: center;
        z-index: 11;
}
.bottom2,.bottom3{
    // height: 8vh;
    line-height: 8vh;
    color: #fff;
    align-items: center;
}
.bottom1{
    width: 55vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #000;
}
.bottom1 img{
    height: 4.5vh;
}
.bottom2{
    flex: 1;
    background-color: #FFC400;
    color: #000;
}
.bottom3{
    flex: 1;
    background-color: #2bac8f;
}
    
</style>