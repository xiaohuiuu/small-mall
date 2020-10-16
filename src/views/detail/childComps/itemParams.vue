<template>
    <div class="itemparams">
        <div class="paramsrules"  v-if=" itemparams.rule">
            <div class="paramskey">❤----------{{itemparams.rule.key}}----------❤</div>
            
            <div class="paramstable">
                <tbody class="paramstabody">
                    <tr v-for="item in itemparams.rule.tables[0]">
                        <td v-for="tds in item.length">{{item[tds-1]}}</td>
                    </tr>
                </tbody>
            </div>
            <div v-show="itemparams.rule.desc">
                <div class="jiantou">☆-------------</div>
                <div><p>{{itemparams.rule.desc}}</p></div>
                <div class="jiantou">--------------☆</div>
            </div>
        </div>
        <div class="paramsinfo" v-if=" itemparams.info">
            <div class="paramskey">❤----------{{itemparams.info.key}}----------❤</div>

            <tbody>
                <tr v-for="(item,index) in itemparams.info.set">
                    <td class="pitd1">{{item.key}}</td>
                    <td class="pitd2">{{item.value}}</td>
                </tr>
            </tbody>

        </div>

    
    </div>
</template>

<script>
export default {
    name:'itemparams',
    props:{
        itemparams:{
            // type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="less" scoped>
.itemparams{
    width: 100vw;
}
.jiantou{
    color: #2bac8f;
}
.paramskey{
    margin-top: 3vh;
    margin-bottom: 3vh;
    text-align: center;
    color: #2bac8f;
}
.paramsrules div{
    margin-top: 3vh;
    padding: 0 1vh 0 1vh;
}
.paramstable{
    
    margin: 3vh 1vh 3vh 1vh;
}
.paramstabody{
    width: 100%;
    background-color: #2bac8f;
    color: #fff;
    text-align: center;
}
.paramstabody tr{
    border: 1vh solid red;
    height: 4vh;
    line-height: 4vh;
}
.paramstabody td{
    border: 0.1vh solid #FFF;
    width: 18.2vw;
}
.paramsinfo{
    margin: 3vh 2vh 3vh 2vh;
}
.paramsinfo tbody{
    width: 100%;
}
.paramsinfo tbody tr{
    height: 7vh;
}
.paramsinfo tbody td{
    text-align: left;
    border-bottom: 0.5vh solid #f5f5f5;
}
.pitd1{
    width: 30vw;
}
.pitd2{
    color: #2bac8f;
}
</style>