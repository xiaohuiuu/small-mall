<template>
  
  <div id="app">
    
      <transition name="donghua" mode="out-in">
        <keep-alive exclude="detail">
          <router-view></router-view>
        </keep-alive>
      </transition>
    
      
      <maintabbar></maintabbar>
    
    
  </div>
</template>

<script>
import tabbar from './components/common/tabbar/tabbar'
import tabbaritem from './components/common/tabbar/tabbar-item'
import maintabbar from './components/content/maintabbar'


export default {
  name:'app',
  components:{
    maintabbar
  },
  data(){
    return{
      
    }
  },
  watch:{
    
  }
}
</script>


<style>
@import './assets/css/base.css';



@keyframes donghua{
  from{transform: rotate(0deg);}
  to{transform: rotate(360deg);}
}
@keyframes donghua1{
  from{transform: scale(0);}
  to{transform: scale(1);}
}
.donghua{
  transition: all 0.5s;
  animation: donghua 0.5s;
}
.donghua-enter{
  opacity: 0;
}
.donghua-enter-to{
  opacity: 1;
}
.donghua-leave{
  opacity: 1;
  
}
.donghua-leave-to{
  opacity: 0;
}
.donghua-enter-active{
  transition: all 0.5s;
  /* animation: donghua1 0.5s; */
}
.donghua-leave-active{
  transition: all 0.5s;
  animation: donghua 0.5s;
}


</style>
