<template>
    <div class="goodslistitem" @click="itemclick()">
        <a><img :src="showimage" alt="" @load="imageload"></a>
        <div>
            <p>{{goodsitem.title}}</p>
            <span class="price">￥ {{goodsitem.price}}</span>
            <span class="cfav"> ★{{goodsitem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'goodslistitem',
    computed:{
        showimage(){
            return this.goodsitem.image || this.goodsitem.show.img
        }
    },
    props:{
        goodsitem:{
            default(){
                type:Object
                return []
            }
        }
    },
    methods:{
        imageload(){
            if(this.$route.path.indexOf('/home')){
                this.$bus.$emit('itemimgload')
            }
            
        },
        itemclick(){
            console.log('-----跳转------')
            // console.log(this.goodsitem.iid)
            this.$router.push({
                path:'/detail',
                query: {iid:this.goodsitem.iid}
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .goodslistitem{
        width: 45vw;
        margin: 10px 1vw 10px 1vw;
        // text-align: center;
        line-height: 3vh;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .goodslistitem img{
        width: 100%;
        border-radius: 8px;
    }
    .price{
        color: #8B0000;
        font-size: 120%;
        font-weight: bold;
    }
    .cfav{
        color: #2bac8f;
        float: right;
        padding: 0 5px 0 10px;
    }
</style>