<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name:'navbar'
}
</script>


<style scoped>
    .nav-bar{
        display: flex;
        height: 8vh;
        line-height: 8vh;
        text-align: center;
        font-size: 1.3rem;
        color: #fff;
        /* position: fixed;
        left: 0;
        right: 0;
        top: 0; */
        z-index: 9;
    }
    .left,.right{
        width: 20%;
    }
    .center{
        flex: 1;
        
    }
</style>