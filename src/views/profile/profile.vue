<template>
    <div id="profile" :style="note">
        <div class="title">大威天龙</div>


        <login></login>

        <div class="sign">
            <loginbtn @click.native="btnclick"><div>登录</div></loginbtn>
            <div class="or">OR</div>
            <loginbtn :bgcolor="'#00FEFF'" :fontcolor="'#000'" @click.native="btnclick"><div>注册</div></loginbtn>
        </div>



    </div>

</template>

<script>

import login from './childComps/logininput'
import loginbtn from './childComps/loginbtn'

export default {
    name:'profile',
    components:{
        login,
        loginbtn
    },
    data(){
        return{
            //背景图片
            note:{
　　　　　　　　　　backgroundImage:"url("+require('../../assets/img/public/bg1.png')+")",
　　　　　　　　　　backgroundSize:'100vw 92vh',
　　　　　　　　　　backgroundRepeat:"no-repeat",
　　　　　　　　　　
　　　　　　　　}
        }
    },
    methods:{
        btnclick(){
            alert('服务器崩了 ლ(•̀ _ •́ ლ)')
        }
    }
}
</script>


<style scoped>
#profile{
    width: 100vw;
    height: 92vh;
    overflow: hidden;
}
.title{
    width: 100vw;
    height: 27.5vh;
    text-align: center;
    color: #2bac8f;
    font-size: 200%;
    line-height: 30vh;
    font-weight: bold;
}
.sign{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    top: 15vh;
}
.or{
    width: 65vw;
    text-align: center;
    line-height: 5vh;
    color: #fff;
    font-weight: bold;
}
</style>