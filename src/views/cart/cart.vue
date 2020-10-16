<template>
    <div id="cart">
        <navbar class="cartnav"><div slot="center">购物车({{cartlength}})</div></navbar>

        <div class="cartbody">
            <cartlist></cartlist>
        </div>


        <!-- 结算功能 组件 -->
        <totleprice  @jiesuanbtn='acvf'></totleprice>

        <div class="totlebox" v-show="isshowtb">
            <div class="boxbox1">总计：￥{{zongjia1}}</div>
        </div>
    </div>
</template>

<script>
import navbar from '../../components/common/navbar/NavBar'
import cartlist from './childComps/cartlist'
import totleprice from './childComps/totleprice'
import {mapGetters} from 'vuex'


export default {
    name:'cart',
    components:{
        navbar,
        cartlist,
        totleprice
    },
    computed:{
        ...mapGetters([
            'cartlist',
            'cartlength',
        ])
    },
    methods:{
        acvf(zongjia){
            this.isshowtb = !this.isshowtb
            this.zongjia1 = zongjia
            console.log(this.isshowtb)
            console.log(this.zongjia1)
        }
    },
    data(){
        return{
            isshowtb: false,
            zongjia1:0
        }
    }
}
</script>


<style>
#cart{
    width: 100vw;
}
.cartbody{
    width: 100vw;
    height: 77vh;
    overflow: auto;
}
.cartnav{
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0; */
    color: #fff;
    background-color: #2bac8f;
}
.totlebox{
    position: fixed;
    /* background-color: rgba(43,172,143,0.7); */
    top: 38vh;
    width: 100vw;
    height: 15vh;
    /* z-index: 11; */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.boxbox1{
    line-height: 15vh;
    text-align: center;
    font-size: 120%;
    width: 50vw;
    background-color: rgba(43,172,143,0.7);
    z-index: 11;
    border-radius: 2vh;
}

</style>