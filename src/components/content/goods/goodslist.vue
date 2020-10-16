<template>
    <div class="goodslist">
        <goodslistitem v-for="item in goods" :goodsitem = 'item'></goodslistitem>
        <!-- {{logg()}} -->
    </div>
</template>


<script>
import goodslistitem from './goodslistitem'
export default {
    name:'goodslist',
    components:{
        goodslistitem
    },
    props:{
        goods:{
            default(){
                type: Array
                return []
            }
        }
    },
    methods:{
        // logg(){
        //     console.log(this.goods)
        // }
    }
}
</script>


<style lang="less" scoped>
    .goodslist{
        width: 100vw;  
        overflow-x: hidden;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        // column-count: 2;
        // margin-bottom: 8vh;
    }
</style>