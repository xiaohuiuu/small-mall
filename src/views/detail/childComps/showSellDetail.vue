<template>
    <div class="detailinfo">

        <div class="jianjie">
            <div class="jiantou">☆-------------</div>
            <div><p>{{detailinfo.desc}}</p></div>
            <div class="jiantou">--------------☆</div>
        </div>
        
        <div v-for="item in detailinfo.detailImage" style="margin-top:3vh">
            <div class="jianjietitle">
                <div>{{item.desc}}</div>
                <div class="imgdesc">❤----------{{item.key}}----------❤</div>
            </div>
            <div class="detailimgs" v-for="imgs in item.list">
                <img :src="'http:'+imgs" alt="">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'showselldetail',
    props:{
        detailinfo:{
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="less" scoped>
.detailinfo{
    width: 100vw;
}
.jianjie div{
    padding: 1vh 1vh 1vh 1vh;
    // font-weight: bold;
}
.jianjie{
    margin-top: 2vh;
}
.imgdesc{
    text-align: center;
    color: #2bac8f;
}
.jianjietitle{
    font-weight: bold;
    margin: 3vh 0 3vh 0;
}
.detailimgs img{
    width: 100vw;
}
.jiantou{
    color: #2bac8f;
}
</style>