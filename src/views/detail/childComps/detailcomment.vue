<template>
    <div class="detailcomment">
        <div class="commentnav">
            <div>用户评价 {{detailcomment.cRate}}</div>
            <div @click="commentmore">更多</div>
        </div>
        <div  class="commentbody" v-if="detailcomment.list">
            <div class="commentuser">
                <img :src="'http:'+detailcomment.list[0].user.avatar" alt="">
                <div><span>{{detailcomment.list[0].user.uname}}</span></div>
            </div>
            <div class="comment">
                <div><p>{{detailcomment.list[0].content}}</p></div>
            </div>
            <div class="commentdetail">
                <span>{{detailcomment.list[0].created}}</span>
                <span>{{detailcomment.list[0].style}}</span>
            </div>
            <div class="commentimg">
                <img :src=" 'http:'+ item" alt="" v-for="(item,index) in detailcomment.list[0].images">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detailcomment',
    props:{
        detailcomment:{
            default(){
                return []
            }
        }
    },
    methods:{
        commentmore(){
            alert('没有更多了')
        }
    }
}
</script>



<style lang="less" scoped>
.detailcomment{
    width: 100wh;
    padding: 0 2vh 1vh 2vh;
}
.commentnav{
    display: flex;
    justify-content: space-between;
    line-height: 6vh;
    border-bottom: 0.2vh solid #f5f5f5;
}
.commentbody div{
    margin: 2vh 0 2vh 0 ;
}
.commentuser{
    line-height: 8vh;
    display: flex;
    font-weight: bold;
    align-items: center;
}
.commentuser img{
    height: 8vh;
}
.commentdetail span{
    padding-right: 2vh;
    color: 	#CDCDC1;
}
.commentimg{
    display: flex;
    overflow: hidden;
}
.commentimg img{
    height: 15vh;
}
</style>