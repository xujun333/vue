<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用 v-for 循环的话，一定要使用 key -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                lunbotuList: []  // 保存轮播图的数组
            }
        },
        created() {
            this.getLunbotu()
        },
        methods:{
            getLunbotu() {
                // 获取轮播图数据的方法
                this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
                    // console.log(result.body);
                    if(result.body.status ===0 ){
                        // 数据加载成功
                        this.lunbotuList = result.body.message;
                    }else{
                        // 数据加载失败
                        Toast("加载轮播图失败……")
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            &:nth-child(1) {
                background-color: red;
            }
            &:nth-child(2) {
                background-color: blue;
            }
            &:nth-child(3) {
                background-color: cyan;
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>