<template>
    <div class="backtop">
        <img src="../../../assets/img/public/top.png" alt="">
    </div>
</template>


<script>
export default {
    name:'backtop'
}
</script>


<style lang="less" scoped>
    .backtop{
        width: 6vh;
        height: 6vh;
        position: fixed;
        bottom: 10vh;
        right: 2vh;
        z-index: 10;
    }
    .backtop img{
        width: 6vh;
    }
</style>