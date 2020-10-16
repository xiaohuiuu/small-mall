<template>
    <div class="item" v-if="iteminfo.length !=0">
        <div class="body">
            <div class="img"><img :src="iteminfo.image" alt=""></div>
            <div class="title"><div>{{iteminfo.title}}</div></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'categoryitem',
    props:{
        iteminfo:{
            default(){
                return []
            }
        }
    }
}
</script>


<style lang="less" scoped>
.item{
width: 20vw;
padding: 1vh 1vh 1vh 1vh;
color: #2bac8f;
}
.img img{
   max-width: 20vw;
   max-height: 20vw;
}
</style>