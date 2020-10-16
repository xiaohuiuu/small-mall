<template>
    <div class="wrapper" ref="wrapper">
        <div class="contont">
            <slot></slot>
        </div>
    </div>
</template>




<script>
import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'
BScroll.use(PullUp)



export default {
    name:'betterscroll',
    props:{
        probetype:{
            type:Number,
            default(){
                return 0
            }
        },
        pullupload:{
            type:Boolean,
            default: false
        }
    },
    date(){
        return{
            scrolls:null
        }
    },
    mounted(){
       
       this.scrolls = new BScroll(this.$refs.wrapper,{
            scrollY:true,
            pullUpLoad: this.pullupload,
            click:true,
            probeTybe: this.probetype,
            
        }),


        this.scrolls.on('scroll', pos =>{
            // console.log(this.scrolls)
            this.$emit('backdisplay',pos)
        })

        this.scrolls.on('pullingUp',() =>{
            console.log('上拉刷新')
            this.$emit('pullingup')
        })
        

        


        
    },
    methods:{
        refresh(){
            this.scrolls.refresh()
        }
    }
}
</script>


<style lang="less" scoped>
.wrapper{
    width: 100vw;
    height: 84vh;
    /* margin-top: 8vh; */
    overflow:auto;
}
</style>