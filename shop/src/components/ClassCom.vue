<template>
    <div class="ClassCom">
        <div class="img">

        </div>
        我是图片分类导航组件
    </div>
</template>

<script>
    export default {
        name: 'ClassCom',

        data() {
            return {
                iconList: [
                    '../../static/macair.svg',
                    '../../static/macair.svg',
                    '../../static/macair.svg',
                    '../../static/macair.svg',
                    '../../static/macair.svg',
                    '../../static/macair.svg',
                    '../../static/macair.svg',
                    '../../static/macair.svg',
                    '../../static/macair.svg',
                    '../../static/macair.svg',
                    '../../static/macair.svg',
                ],
                titleList: [
                    'MacBook Air',
                    'MacBook Air',
                    'MacBook Air',
                    'MacBook Air',
                    'MacBook Air',
                    'MacBook Air',
                    'MacBook Air',
                    'MacBook Air',
                    'MacBook Air',
                    'MacBook Air',
                    'MacBook Air',
                ],
                navList:[]
            };
        },

        mounted() {
            // 处理列表数据
            this = me;
            me.iconList.forEach((i,index)=>{
                me.navList.push({
                    id:'navIcon'+index,
                    icon:i,
                    title:me.titleList[index]
                })
            })
            console.log('navList整理后的结果：',me.navList)
        },

        methods: {

        },
    };
</script>

<style scoped>
    .img {
        background-image: url('../../static/svg/air.svg');
        width: 80px;
        height: 54px;
    }
</style>