<template>
    <div class="loginbtn" :style="{backgroundColor:bgcolor,color:fontcolor}">
        <slot></slot>
    </div>
</template>


<script>
export default {
    name:'loginbtn',
    props:{
        bgcolor:{
            default: '#2bac8f'
        },
        fontcolor:{
            default: '#fff'
        }
    }
}
</script>

<style lang="less" scoped>
.loginbtn{
    width: 69vw;
    height: 7vh;
    border-radius: 0.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 130%;
}
</style>