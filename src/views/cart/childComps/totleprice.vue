<template>
    <div class="jiesuan">
            <div class="quanxuan">
                <checkbox :ischecked='ischeckedall' @click.native="clickbtn"></checkbox>全选
                <span>合计</span>
                <!-- <span>￥{{xianshi()}}</span> -->
                <span>￥{{totleprice}}</span>
            </div>

            <div class="topay" @click="jiesuanbtn">
                去结算
            </div>
        </div>
</template>

<script>

import {mapGetters} from 'vuex'
import checkbox from './checkbox'

export default {
    name:'totleprice',

    components:{
        checkbox
    },
    data(){
       return{
           zongjia:0
       }  
    },
    methods:{
        // xianshi(){
        //     console.log(this.$parent.$children[1].totleprice)
        //     return this.$parent.$children[1].totleprice
        // }
        jiesuanbtn(){
            console.log(this.zongjia)
            this.$emit('jiesuanbtn',this.zongjia)
        },

        clickbtn(){
            if(this.ischeckedall){
                this.cartlist.forEach(res => res.checked = false)
            }else{
                this.cartlist.forEach(res => res.checked = true)
            }
        }

    },
    computed:{
        ...mapGetters(['cartlist']),


        // 计算总价格
        totleprice(){
            let totle = 0
            let abc = []
            abc = this.cartlist.filter(res => res.checked)
            // abc = this.cartlist.filter(item => {item.checked})
            for(let i=0;i<abc.length;i++){
                totle += abc[i].price * abc[i].count
            }
            // console.log(abc)
            // console.log(totle)
            this.zongjia = totle.toFixed(2)
            return totle.toFixed(2)
        },

        //判断 全选 按钮
        ischeckedall(){
            //第一种方法
            // if(this.cartlist.filter(res => !res.checked).length){
            //     return false
            // }else{
            //     return true
            // }
            //第二种方法
            if(this.cartlist.find(res => res.checked === false)){
                return false
            }else{
                return true
            }
        }
    },
}
</script>

<style lang="less" scoped>
.jiesuan{
    display: flex;
    width: 100vw;
    height: 7vh;
    line-height: 7vh;
    
}
.quanxuan{
    display: flex;
    align-items: center;
    width: 70vw;
    background-color: #fff;
    padding: 0 2vh 0 2vh;
    font-size: 120%;
}
.topay{
    flex: 1;
    height: 7vh;
    background-color: #2bac8f;
    text-align: center;
    color: #fff;
}
.quanxuan input[type='checkbox']{
    -webkit-appearance: none; 
    width: 5vw;
    height: 5vw;
    border: 0.2vh solid #2bac8f;
    border-radius: 2vw;
}
.quanxuan input[type='checkbox']:checked{
    background-color: #2bac8f;
}
.quanxuan span{
    padding: 0 2vh 0 2vh;
}
</style>