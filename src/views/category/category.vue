<template>
    <div id="category">
        <navbar class="navbar"><div slot="center">分类</div></navbar>
        <div class="body">
            <div class="fenlei">
                <div class="fenleiitem" :class="{fenleiitemactive: isactive === index}" v-for="(item,index) of category" @click="categoryitemclick(index)">{{item.title}}</div>
            </div>
            <div class="iteminfo">
                <itembox :categoryinfo='categoryinfo'></itembox>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '../../components/common/navbar/NavBar'
import {getcategory,getcategoryinfo} from '../../network/category'
import itembox from './childComps/itembox'

export default {
    name:'category',
    components:{
        navbar,
        itembox
    },
    data(){
        return{
            category:[],
            categoryinfo:[],
            isactive: 0
        }
    },
    methods:{

        //点击分类按钮
        categoryitemclick(index){
            this.isactive = index
            this.getcategoryinfo(this.category[index].maitKey)
        },

        //获取 分类的信息
        getcategory(){
            getcategory()
            .then(res => {
                this.category = res.data.category.list
                console.log(this.category)
                this.getcategoryinfo(this.category[this.isactive].maitKey)
            })
        },

        getcategoryinfo(maitKey){
            getcategoryinfo(maitKey)
            .then(res => {
                this.categoryinfo = res
                // console.log(this.categoryinfo)
            })
        }
    },
    created(){
        this.getcategory()
    },
    mounted(){
        
        // console.log(this.category)
        // this.getcategoryinfo(this.category[this.isactive])
    },
    activated(){
        
    }
}
</script>


<style  scoped>
#category{
    width: 100vw;
}
.navbar{
    color: #fff;
    background-color: #2bac8f;
}
.body{
    width: 100vw;
    height: 84vh;
    color: #000;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: start;
}
.fenlei{
    width: 25vw;
    height: 100%;
    overflow: auto;
    background-color: 	#F5F5F5;
    /* border-right: 0.2vh solid #2bac8f; */
}
.fenleiitem{
    line-height: 7.5vh;
    color: #2bac8f;
    height: 7vh;
    /* border-bottom: 0.2vh solid #2bac8f; */
}
.fenleiitemactive{
    /* border-right: 0.5vh solid #2bac8f; */
    background: #fff;
    font-weight: bold;
}
.iteminfo{
    flex: 1;
    height: 84vh;
    overflow: auto;
}
</style>