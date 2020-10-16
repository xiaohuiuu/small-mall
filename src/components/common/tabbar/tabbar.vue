<template>
    <div id="tabbar">
      <slot></slot>
    </div>
</template>


<script>
export default {
    name:'tabbar'
}
</script>

<style scoped>
    #tabbar{
    width: 100%;
    height: 8vh;
    display: flex;
    align-items: center;
    background-color: 	#fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    box-shadow: 0 20px 20px 10px #0000ff;
  }
 
</style>