<template>
    <div class="cartlist">
        
        <div class="cartlist1" v-for="(item,index) in cartlist" v-if="cartlist">
            <div class="inputbox">
                <!-- <input type="checkbox" name="" id="" :value="item" v-model="checkeditem" @click="xianshi"> -->
                <checkbox :ischecked='item.checked' @click.native="checkeditem(index)" ref="btn11" :key="index"></checkbox>
            </div>
            <div class="detailbox">
            <div class="img">
                <img :src="item.img" alt="">
            </div>
            <div class="detail">
                <div><span>{{item.title}}</span></div>
                <div><span>{{item.desc}}</span></div>
                <div class="totleprice">
                    <div><span class="price">￥ {{item.price}}</span></div>
                    <!-- <div><button @click="xianshi">{{totleprice}}</button></div> -->
                    <!-- <div><span>{{item.checked}}</span></div> -->
                    <div><span class="count">x{{item.count}}</span></div>
                </div>
            </div>
            </div>
        </div>
        
    </div>
</template>

<script>

import checkbox from './checkbox'
import {mapGetters} from 'vuex'

export default {
    name:'cartlist',
    components:{
        checkbox
    },
    props:{
        // cartlist:{
        //     // type:Object,
        //     default(){
        //         return {}
        //     }
        // }
        
    },
    data(){
        return{
            //购物车中 选中的商品  保存在这数组
            // checkeditem:[],
            checkedprice: 0,
            
        }
    },

    computed:{
        ...mapGetters(['cartlist'])
        //计算选中的  商品  的总价格
        // totleprice(){
        //     let totle = 0
        //     for(let i=0;i<this.checkeditem.length;i++){
        //         totle += this.checkeditem[i].price * this.checkeditem[i].count 
                
        //     }
        //     this.checkedprice = totle
        //     return totle
        // }
        
    },

    methods:{
        checkeditem(index){
            this.cartlist[index].checked = !this.cartlist[index].checked
            // console.log(this.cartlist[index].checked)
            // console.log(this.$refs.btn11)
            // console.log(this.cartlist)
            // console.log(this.$store.state.cartlist)
        }
    },
    created(){
        
    },
    mounted(){
        
    },
    activated(){
        // this.cartlist = this.$store.state.cartlist
    }
}
</script>

<style lang="less" scoped>
.cartlist{
    width: 95vw;
}
.cartlist1{
    width: 95vw;
    margin: 0 1vh 1vh 1vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-bottom: 0.3vh solid #2bac8f;
}
.inputbox{
    width: 10vw;
    padding: 0 0.7vh 0 0.7vh;
    
}

.inputbox input[type='checkbox']{
    -webkit-appearance: none; 
    width: 6vw;
    height: 6vw;
    border: 0.2vh solid #2bac8f;
    border-radius: 3vw;
}
.inputbox input[type='checkbox']:checked{
    background-color: #2bac8f;
}
.detailbox{
    flex: 1;
    display: flex;
}
.img img{
    height: 15vh;
    border-radius: 2vh;
    
}
.detail{
    padding:0vh 2vh 0vh 2vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.price{
    color: red;
}
.count{
    right: 3vh;
}
.totleprice{
    width: 60vw;
    display: flex;
    justify-content: space-between;
}
</style>