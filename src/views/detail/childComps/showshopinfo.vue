<template>
    <div class="shopinfo">
        <div class="shopname">
            <img :src="'http:'+shopinfo.shoplogo" alt="">
            <span>{{shopinfo.name}}</span>
        </div>
        <div class="score">
            <div class="xiaoliang">
                <div>
                    <span>{{shopinfo.sells}}</span>
                    <div><span>总销量</span></div>
                </div>
                <div>
                    <span>{{shopinfo.good}}</span>
                    <div><span>全部宝贝</span></div>
                </div>
            </div>

            <div class="miaoshu">
                <div class="miaoshuitem" v-for="item in shopinfo.score">
                    <div class="ms1"><span>{{item.name}}</span></div>
                    <div class="ms2"><span class="ms2span" :class="{ms2isbetter: item.isBetter}">{{item.score}}</span></div>
                    <div class="ms3"><span class="ms3span" :class="{ms3isbetter: item.isBetter}">{{item.isBetter? '高' : '低'}}</span></div>
                </div>
            </div>
        </div>

        <div class="shopbtn"><span @click="shopclick">进店逛逛</span></div>
    </div>

</template>


<script>
export default {
    name:'showshopinfo',
    props:{
        shopinfo:{
            default(){
                return []
            }
        }
    },
    methods:{
        shopclick(){
            alert('店铺倒闭了')
        }
    }
}
</script>


<style lang="less" scoped>
.shopinfo{
    border-bottom: 0.5vh solid #F5F5F5;
}

.shopname{
    display: flex;
    line-height: 7vh;
    padding: 2vh 2vh 2vh 2vh;
    border-bottom: 0.5vh solid #F5F5F5;
    align-items: center;
}
.shopname span{
    padding: 0 2vh 0 2vh;
    font-weight: bold;
    font-size: 120%;
}
.shopname img{
    width: 7vh;
}
.score{
    height: 15vh;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // flex-wrap: wrap;
    text-align: center;
    font-size: 100%;
    border-bottom: 0.5vh solid #F5F5F5;
}

.xiaoliang{
    flex: 1;
    display: flex;
    
}
.xiaoliang div{
    flex: 1;
}
.miaoshu{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // font-size: 80%;
    border-left: 0.5vh solid #F5F5F5;
    
}
.miaoshu span{
    padding: 1vh 1vh 1vh 1vh;
    border-radius: 1vh;
}
.miaoshuitem{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.miaoshuitem div{
    margin: 1vh 0 1vh 0;
}
.ms1{
    flex: 1;
}
.ms2{
    width: 25%;
    color: #2bac8f;
}
.ms2span{
    color: #2bac8f;
}
.ms2isbetter{
    color:red;
}
.ms3{
    width: 25%;
    color: #fff;
}
.ms3span{
    background-color: #2bac8f;
}
.ms3isbetter{
    background-color: red;
}
.shopbtn{
    width: 100vw;
    line-height: 8vh;
    text-align: center;
}
.shopbtn span{
    font-weight: bold;
    padding: 1vh 2vh 1vh 2vh;
    background-color: #D3D3D3;
    border-radius: 1vh;
}
</style>