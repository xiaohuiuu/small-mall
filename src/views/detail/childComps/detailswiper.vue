<template>
    <div class="detailswiper">
        <swiper class="swiper1">
            <swiperitem v-for="item in topimgs">
                <img :src="'http:'+item" alt="">
            </swiperitem>
        </swiper>
    </div>
</template>

<script>

import {swiper,swiperitem} from '../../../components/common/swiper/index'

export default {
    name:'detailswiper',
    components:{
        swiper,
        swiperitem
    },
    props:{
        topimgs:{
            type:Array,
            default(){
                return []
            }
        }
    },
    created(){
        console.log(this.topimgs)
    }
}
</script>


<style lang="less" scoped>
.swiper1{
    width: 100vw;
    overflow: hidden;
    height: 45vh;
}
.swiper1 img{
    width: 100vw;
}
</style>