<template>
    <div id="detail">
        <detailnavbar :titles='titles' :paramsoffsettop='paramsoffsettop' :commentoffsettop='commentoffsettop'
        :recommendoffsettop='recommendoffsettop'
         class="detailnavbar" ref="detailnav"></detailnavbar>
        

        <div class="detailscroll" @scroll="divscroll" ref="scroll1">
            <detailswiper :topimgs = topimgs ref="swiperimg"></detailswiper>
            <showiteminfo :iteminfo='iteminfo'></showiteminfo>
            <showshopinfo :shopinfo='shopinfo'></showshopinfo>
            <showselldetail :detailinfo='detailinfo'></showselldetail>
            <itemparams :itemparams='itemparams' ref="scroll2"></itemparams>
            <detailcomment :detailcomment='detailcomment' ref="comment"></detailcomment>
            <goodlist :goods='recommends' ref="recommend"></goodlist>
        </div>

        <detailbottom @addcart='addtocart' @gmclick='gmclick'></detailbottom>

        <div class="addalter" v-show="isshowalter">添加成功，么么哒!</div>

    </div>
</template>

<script>
import detailnavbar from './childComps/detailNavbar'
import axios from 'axios'
import {getdatas,iteminfo,shopinfo,getrecommends} from '../../network/detail' 
import detailswiper from '../detail/childComps/detailswiper'
import showiteminfo from './childComps/showiteminfo'
import showshopinfo from './childComps/showshopinfo'
import scroll from '../../components/common/scroll/betterscroll'
import showselldetail from './childComps/showSellDetail'
import itemparams from './childComps/itemParams'
import detailcomment from './childComps/detailcomment'
import goodlist from '../../components/content/goods/goodslist'
import detailbottom from './childComps/detailbottom'


export default {
    name: 'detail',
    components:{
        detailnavbar,
        detailswiper,
        showiteminfo,
        showshopinfo,
        scroll,
        showselldetail,
        itemparams,
        detailcomment,
        goodlist,
        detailbottom
    },
    data(){
        return {
            iid:'',
            titles: ['商品','参数','评论','推荐'],
            topimgs:[],
            iteminfo:[],
            shopinfo:[],
            detailinfo:[],
            itemparams:[],
            scrollheight: 0,
            paramsoffsettop: 0,
            commentoffsettop:0,
            recommendoffsettop:0,
            detailcomment:[],
            recommends:[],
            isshowalter:false
            
        }
    },
    methods:{
        //监听滚动事件
        divscroll(){
            
            // console.log(this.$refs.detailnav.$el.offsetHeight)
            //获取 滑动 的高度
            this.scrollheight = this.$refs.scroll1.scrollTop
            // console.log(this.scrollheight)
            //获取 参数内容  所在的高度
            this.paramsoffsettop = this.$refs.scroll2.$el.offsetTop - this.$refs.detailnav.$el.offsetHeight
            // console.log(this.paramsoffsettop)

            //获取 评价 所在的高度
            this.commentoffsettop = this.$refs.comment.$el.offsetTop - this.$refs.detailnav.$el.offsetHeight
             

            //获取 推荐 所在的高度
            this.recommendoffsettop = this.$refs.recommend.$el.offsetTop - this.$refs.detailnav.$el.offsetHeight



            //根据滑动的距离 判断navbar哪个换颜色
            if(this.scrollheight < this.paramsoffsettop){
                this.$refs.detailnav.isActive = 0
            }
            else if(this.scrollheight > this.paramsoffsettop && this.scrollheight < this.commentoffsettop){
                this.$refs.detailnav.isActive = 1
            }
            else if(this.scrollheight > this.commentoffsettop && this.scrollheight < this.recommendoffsettop){
                this.$refs.detailnav.isActive = 2
            }
            else{
                this.$refs.detailnav.isActive = 3
            }
        },

        //添加购物车的函数
        addtocart(){
            console.log('✩-------✩-------✩')

            const cartinfo = {}
            cartinfo.iid = this.iid
            cartinfo.img = this.topimgs[0]
            cartinfo.price = this.iteminfo.realPrice
            cartinfo.title = this.iteminfo.title
            cartinfo.desc = this.iteminfo.desc

            console.log('✩-------✩-------✩')

            // console.log(cartinfo)
            //将添加购物车数据 添加到 vuex中 
            this.$store.dispatch('addcart',cartinfo)


            this.isshowalter = true
            setTimeout(() => {
                this.isshowalter = false
            }, 1500);
        },
        gmclick(){
            this.addtocart()
            this.$router.push('/cart')
        }
        


    },
    created(){
        this.iid = this.$route.query.iid
        // console.log(this.$route.query.iid)
        //每次点击商品的时候  拿到商品的数据
        // this.getdatas(this.iid)


        //调用 封装的 获取数据的函数   详情页数据
        getdatas(this.iid)
        .then(res =>{ 
            // console.log(res)
            const data = res.result
            this.topimgs = data.itemInfo.topImages
            // console.log(this.topimgs)

            //获取商品信息
            this.iteminfo = new iteminfo(data.itemInfo,data.columns,data.shopInfo.services)
            console.log(this.iteminfo)

            //获取商家的信息
            this.shopinfo = new shopinfo(data.shopInfo)
            console.log(this.shopinfo)

            //保存 商品详情 数据
            this.detailinfo = data.detailInfo
            console.log(this.detailinfo)

            //获取 商品参数 数据
            this.itemparams = data.itemParams
            console.log(this.itemparams)

            //获取 评论 的数据
            this.detailcomment = data.rate

            

        })

        //获取 推荐商品  数据
        getrecommends()
        .then(res =>{
            this.recommends = res.data.list
            // console.log(this.recommends)
        })


        

  
    },
    mounted(){
        //获取 参数内容  所在的高度
        this.paramsoffsettop = this.$refs.scroll2.$el.offsetTop - this.$refs.detailnav.$el.offsetHeight

        //获取 评价 所在的高度
        this.commentoffsettop = this.$refs.comment.$el.offsetTop - this.$refs.detailnav.$el.offsetHeight

        //获取 推荐 所在的高度
        this.recommendoffsettop = this.$refs.recommend.$el.offsetTop - this.$refs.detailnav.$el.offsetHeight
             
    },
    destroyde(){
        
    },
    activated(){
        
           
    },
    deactivated(){
        this.iid = '',
        // console.log(this.$children)
        this.$children[0].isActive = 0 ,
        this.$refs.swiperimg.load()
    }


}
</script>


<style  scoped>
#detail{
    width: 100vw;
    height: 100vh;
    /* position: relative;
    z-index: 10; */
}
.detailscroll{
    width: 100vw;
    height: 84vh;
    overflow: auto;
}
.detailbavbar{
    display: flex;
    justify-content: space-around;
}
.addalter{
    position: absolute;
    padding: 1vh  2vh 1vh 2vh;
    color: #fff;
    top: 55vh;
    left: 30vw;
    background-color: #2bac8f;
    z-index: 11;
    line-height: 3vh;
    border-radius: 1vh;
}


</style>