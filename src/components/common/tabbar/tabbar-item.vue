<template>
    
    <div class="tabbar_item" @click="btnitemclick()">
        <div v-if="!isActive" ><slot name="item-img"></slot></div>
        <div v-else ><slot name="item-img-select"></slot></div>
        <div :style="activestyle"><slot name="item-text"></slot></div>
    </div>
    
</template>

<script> 

// console.log($parent)
export default {
    name:'tabbaritem',
    props:{
        path:String,
        activecolor:{
            type:String,
            default: '#2BAF85'
        }
    },
    computed:{
        isActive(){
            return this.$route.matched[0].path == this.path
        },
        activestyle(){
            return this.isActive ? {color: this.activecolor} : {}
        }
    },
    data(){
        return {
            // isActive:'/home'
        }
    },
    methods:{
        btnitemclick(){
            this.$router.replace(this.path)
            // console.log(this.path)
            // console.log(this.$route.matched[0].path)
            // console.log(this.$route.matched[0].path == this.path)   
            
        }
    }
}

</script>

<style scoped>
    .tabbar_item{
    flex: 1;
    text-align: center;
    /* height: 8vh; */
    font-size: 15px;
  }
  .tabbar_item img{
      width: 27%;
      /* margin-top: 3px; */
      /* vertical-align: middle; */
  }

</style>