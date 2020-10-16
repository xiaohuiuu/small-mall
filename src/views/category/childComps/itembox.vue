<template>
    <div class="itembox" v-if="categoryinfo.length !=0">
        <categoryitem v-for="item in categoryinfo.data.list" :iteminfo='item'>
            
        </categoryitem>
    </div>
</template>

<script>
import categoryitem from './categoryitem'
export default {
    name:'itembox',
    components:{
        categoryitem
    },
    props:{
        categoryinfo:{
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="less" scoped>
.itembox{
    width: 75vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>