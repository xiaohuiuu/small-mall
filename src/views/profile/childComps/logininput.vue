<template>
    <div class="login">
        <div class="loginbox">
        <div class="username">
            <div class="img"><img src="../../../assets/img/public/username.png" alt=""></div>
            <div class="input"><input type="text" placeholder="用户名"></div>
        </div>
        <div class="password">
            <div class="img"><img src="../../../assets/img/public/password.png" alt=""></div>
            <div class="input"><input type="password" placeholder="密码"></div>
        </div>
    </div>
    </div>
    
</template>

<script>
export default {
    name:'logininput'
}
</script>

<style lang="less" scoped>
.login{
    width: 100vw;
    display: flex;
    justify-content: center;
}
.loginbox{
    color: #2bac8f;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.username,.password{
    display: flex;
    align-items: center;
    border-bottom: 0.2vh solod #2bac8f;
    margin: 0.5vh 0 0.5vh 0;
    background-color: rgba(255,255,255,0.1);
}
.username img,.password img{
    width: 5vh;
}
input{
    width: 60vw;
    height: 7vh;
    color: #2bac8f;
    font-size: 130%;
    border-style: none;
    // border-bottom: 0.25vh solid #2bac8f;
    // border-top: 0.5vh solid #2bac8f;
    background-color: rgba(255,255,255,0.1);
    outline: none;
}
</style>