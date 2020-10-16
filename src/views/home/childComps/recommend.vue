<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends.list">
            <a :href="item.link"><img :src="item.image" alt=""></a>
            <div><p>{{item.title}}</p></div>
        </div>
    </div>
</template>


<script>
export default {
    name:'recommend',
    props:{
        recommends:{
            default(){
                return {}
            }
        }
    },
    created(){
        console.log(this.recommends)
    }
}
</script>


<style scoped>
    .recommend{
        width: 100vw;
        height: 20vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: solid 10px lightgray;
        /* border-top: solid 10px lightgray; */
        text-align: center;

    }
    .recommend img{
        height: 10vh;
    }
</style>