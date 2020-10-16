<template>
    <div class="tabcontrol">
        <div v-for="(item,index) in titles" class="tabcitem" :class="{tabcitema: index === isactive}" @click="itemclick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>


<script>
export default {
    name:'tabcontrol',
    props:{
        titles:{
            default(){
                return []
            }
        }
        
    },
    data(){
        return {
            isactive:0
        }
    },
    methods:{
        itemclick(index){
            this.isactive = index
            this.$emit('tabclick',index)
        }
    }
}
</script>


<style lang="less" scoped>
    .tabcontrol{
        width: 100vw;
        height: 7vh;
        background-color: #fff;
        display: flex;
        // justify-content: space-around;
        align-items: center;
        border-top: 3px solid #2bac8f;
        line-height: 6vh;
        
        
    }
    .tabcitem{
       flex: 1;
       text-align: center;
       padding-bottom: 5px;
    }
    .tabcitema{
       flex: 1;
       color: #2bac8f;
       padding-bottom: 5px;
       
    }
    .tabcitema span{
        border-bottom: 3px solid #2bac8f;
        padding: 0px 15px 10px 15px;
        
    }
</style>