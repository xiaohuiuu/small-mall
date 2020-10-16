<template>

    <div id="home">

        <navbar class="home-nav"><div slot="center" ref="navtop">徐金龙的第一个VUE</div></navbar>

        <tabcontrol :class="{tabshow1: !istabshow}" :titles='titles' @tabclick='tabclick' ref="tabcontrol1"></tabcontrol>

        <div class="scrollbox" ref="scroll111" @scroll="dsiii">
        <!-- <scroll ref='scroll' :probetype=3 :pullupload = true @backdisplay='backdisplay' @pullingup='loadmore'> -->
            <mainswiper :banners="banners" @swiperimgload='swiperimgload'></mainswiper>

            <recommend :recommends="recommends"></recommend>

            <fashion></fashion> 

            <!-- <tabcontrol :class="{tabshow:istabshow}" :titles='titles' @tabclick='tabclick' ref="tabcontrol"></tabcontrol> -->
            <tabcontrol class="tabshow2" :titles='titles' @tabclick='tabclick' ref="tabcontrol"></tabcontrol>



            <!-- <goodslist :goods="goods[currentype].list"></goodslist> -->
            <!-- 利用计算属性 -->
            <goodslist :goods="showgoods"></goodslist>
            <div class="pulldown1" @click="shuaxin()">加载更多</div>
        <!-- </scroll> -->
        </div>

        
        

        <backtop @click.native="backclick" v-show="divscrolltop > 1000"></backtop>
    </div>
    
    
    
</template>

<script>
import {gethomedatas,gethomegoods} from '../../network/homeRes'
import axios from 'axios'

import navbar from '../../components/common/navbar/NavBar'
import mainswiper from './childComps/mainswiper'
import recommend from './childComps/recommend'
import fashion from '../home/childComps/fashion'
import tabcontrol from '../../components/content/tabcontrol'
import goodslist from '../../components/content/goods/goodslist'
import scroll from '../../components/common/scroll/betterscroll'
import backtop from '../../components/common/backTop/backtop'


export default {
    name:'home',
    components:{
        navbar,
        mainswiper,
        recommend,
        fashion,
        tabcontrol,
        goodslist,
        scroll,
        backtop
    },
    data(){
        return{
            banners:[],
            recommends:[],
            titles:['流行','新款','精品'],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
            },
            // 设置默认类型
            currentype:'pop',
            topoffsettop:0 ,
            istabshow: false,
            divscrolltop: 0
            
        }
    },
    computed:{
        showgoods(){
            return this.goods[this.currentype].list
        }
    },
    methods:{
        //事件监听的方法
        backclick(){
            this.$refs.scroll111.scrollTo({top:0,behavior:'smooth'})
        },


        tabclick(index){
            // console.log(index)
            switch(index){
                case 0:
                    this.currentype = 'pop'
                    break
                case 1:
                    this.currentype = 'new'
                    break
                case 2:
                    this.currentype = 'sell'
                    break
            }
            this.$refs.tabcontrol1.isactive = index
            this.$refs.tabcontrol.isactive = index
        },


        //下划显示  backtop按钮
        backdisplay(pos){
            
            
            // console.log(this.istabshow)
            
            
        },
        //获取当前滚动的 高度
        dsiii(){
            this.divscrolltop = this.$refs.scroll111.scrollTop
            // console.log(this.divscrolltop > 1000)
            
        },

        //当 商品详情页点击返回后  ，跳转到 上次浏览的位置
        



        shuaxin(){
            console.log('加载更多233')
            this.gethomegoods(this.currentype)
            console.log(this.goods)
        },

        // 下拉刷新
        loadmore(){
            console.log('加载更多233')
            this.gethomegoods(this.currentype)
            console.log(this.goods)
            this.$refs.scroll.scrolls.finishPullUp()
        },





        //网络请求
        //将 created中的 请求数据的函数  封装到methods中，然后在 created中调用
        gethomedatas(){

            gethomedatas().then(res => { 
            this.banners = res.data.banner
            this.recommends = res.data.recommend
            console.log(res.data)
            })
        },

        gethomegoods(type){
            const page = this.goods[type].page + 1

            gethomegoods(type,page)
            .then(res => {
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page++
                // console.log(res.data.list)
                // console.log(this.goods[type].list)
                // console.log(...this.goods[type].list)
            })
        },
        

        swiperimgload(){
            //加载图片后  拿到tabcontrol栏  的offsetTop值
            this.topoffsettop = this.$refs.tabcontrol.$el.offsetTop - this.$refs.navtop.offsetHeight
            // console.log(this.topoffsettop)
        }
        
        
    },
    created(){

        //将函数封装到methods中
        // gethomedatas().then(res => { 
        //     this.banners = res.data.banner
        //     this.recommends = res.data.recommend
        //     // console.log(res.data)
        //     })



        //将函数封装到methods中
        // gethomedatas().then(res => { 
        //     this.banners = res.data.banner
        //     this.recommends = res.data.recommend
        //     // console.log(res.data)
        //     })

        //调用封装在methods的函数
        //请求 轮播图 等数据
        this.gethomedatas()

        //请求tabcontrol中需要的数据
        this.gethomegoods('pop')
        this.gethomegoods('new')
        this.gethomegoods('sell')

        
    },
    mounted(){


        //监听item中图片加载完成
        this.$bus.$on('itemimgload',() => {
            // console.log('------------')
            this.$refs.scroll && this.$refs.scroll.refresh()
            
        })


        
        
        
    },
    activated(){
        this.$refs.scroll111.scrollTo(0,this.divscrolltop)
    },
    disactivated(){

    },
    destoryed(){
        console.log('摧毁了，么么哒')
    }
}
</script>


<style scoped>
#home{
    width: 100vw;
    height: 92vh;
    /* overflow-x: hidden; */
}
.scrollbox{
    height: 84vh;
    overflow: auto;
}
.home-nav{
    background-color: #2baf85;

}
p{
    margin-top: 8vh;
    margin-bottom: 8vh;
}
.tabshow2{
    position: sticky;
    top: -0.2vh;
}
.tabshow{
    position: fixed;
    top: 0vh;
}
.tabshow1{
    top: 0vh;
    display: none;
}
.pulldown1{
    width: 100vw;
    line-height: 7vh;
    background-color: lightgray;
    text-align: center;
    font-weight: bold;
}

</style>