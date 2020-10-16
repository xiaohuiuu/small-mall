<template>
    <div id="checkbox">
        <div class="checkbox" :class="{checkedbox: ischecked}"></div>

    </div>
</template>

<script>
export default {
    name:'checkbox',
    props:{
        ischecked:{
            type:Boolean,
            default: false
        }
    },
    
}
</script>


<style lang="less" scoped>
.checkbox{
    width: 3.5vh;
    height: 3.5vh;
    border: 0.2vh solid #2bac8f;
    border-radius: 50%;
}.checkedbox{
    width: 3.5vh;
    height: 3.5vh;
    border: 0.2vh solid #2bac8f;
    border-radius: 50%;
    background-color: #2bac8f;
}
</style>