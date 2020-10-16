<template>
    <div>

        <swiper class="mainswiper">
            <swiperitem v-for="item in banners.list">
               <a :href="item.link">
                   <img :src="item.image" alt="" @load="imgload">
               </a>
            </swiperitem>
        </swiper>

    </div>
</template>



<script>

import {swiper,swiperitem} from '../../../components/common/swiper/index' 

export default {
    props:{
        banners:{
            
            default(){
                return []
            }
        }
    },
    name:'mainswiper',
    components:{
        swiper,
        swiperitem
    },
    // created(){
    //     console.log(this.banners)
    // }
    methods:{
        imgload(){
            this.$emit('swiperimgload')
        }
    }
}
</script>

<style lang="less" scoped>
    .mainswiper{
       margin: 0;
    }
</style>


