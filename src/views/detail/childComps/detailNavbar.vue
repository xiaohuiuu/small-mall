<template>
    <div class="detailNavbar">
        <navbar>
            <div slot='left' class="backimg" @click="backclick()">
                <img src="../../../assets/img/public/back.png" alt="">
            </div>
            <div slot="center" class="title" >
                <div :class="{titleActive: isActive === index}" v-for="(item,index) in titles" @click="itemclick(index)"><span>{{item}}</span></div>
            </div>
        </navbar>
    </div>
</template>

<script>
import navbar from '../../../components/common/navbar/NavBar'

export default {
    name:'detailNavbar',
    components:{
        navbar
    },
    props:{
        titles:{
            type: Array,
            default(){
                return []
            }
        },
        paramsoffsettop:{
            default(){
                return 0
            }
        },
        commentoffsettop:{
            default(){
                return 0
            }
        },
        recommendoffsettop:{
            default(){
                return 0
            }
        }
        
        
    },
    data(){
        return {
            isActive: 0
        }
    },
    methods:{
        itemclick(index){


            const divvv = this.$parent.$el.children[1]
            if(index == 0){
                divvv.scrollTo({top:0,behavior:'smooth'})
            }
            else if(index == 1){
                divvv.scrollTo({top: this.paramsoffsettop + 1,behavior:'smooth'})
            }
            else if(index == 2){
                divvv.scrollTo({top:this.commentoffsettop + 1,behavior:'smooth'})
            }
            else{
                divvv.scrollTo({top:this.recommendoffsettop + 1,behavior:'smooth'})
            }
            this.isActive = index
            
        },
        backclick(){
            this.$router.back()
            console.log('------返回-----')
            
        }
    },
    created(){
        
    }
}
</script>


<style scoped>
    .detailNavbar{
        /* border-bottom: 0.2vh solid #2bac8f; */
        z-index: 10;
    }
    .title{
        display: flex;
        justify-content: space-around;
        color: #2baf85;
        align-items: center;
        font-size: 80%;
    }
    .titleActive{
        color: #000;
    }
    .backimg img{
        width: 4vh;
        margin-top: 2vh;
        /* height: 8vh; */
    }
</style>