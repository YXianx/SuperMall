<template>
    <div id="home">
        <nav-bar class="home-nav">
            <template v-slot:center>
                <label>购物街</label>
            </template>
        </nav-bar>

        <scroll class="content" ref='scroll' :probe-type="3">
            <!-- 为了不让Home.vue显得臃肿而进行进一步封装，封装后需要传递banner数据给HomeSwiper -->
            <home-swiper :banners="this.banners"/>

            <home-recommend-view :recommends="this.recommends"/>
            <home-feature-view/>
            <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
            <!-- 父传子 > goods集合传递子组件GoodsList -->
            <goods-list :goods="showGoods"/>
        </scroll>

        <!-- 返回顶部按钮 -> 方案：1、监听原生事件 2、子组件emit信号(较为繁琐) -->
        <back-top @click="backClick"/>
    </div>
</template>

<script>
// 页面组件
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommendView from './childComps/HomeRecommendView.vue'
import HomeFeatureView from './childComps/HomeFeatureView.vue'

// 公共组件
import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'

// 功能文件
import { getHomeMultidata,getHomeGoods } from '../../network/home' 



export default {
    name: 'VueHome',

    components: { 
        HomeSwiper,
        HomeRecommendView,
        HomeFeatureView,
        
        NavBar,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
     },

    directives: {  },

    data() {
        return {
            // 请求内容分类
            banners:[],
            recommends:[],
            // 商品数据结构，流行/新款/精选
            goods:{
                // 字符串的形式可以用传参选中，很方便
                'pop':{
                    page:0,
                    list:[]
                },
                'new':{
                    page:0,
                    list:[]
                },
                'sell':{
                    page:0,
                    list:[]
                }
            },
            // tabControl商品分类
            currentType:'pop'
        };
    },

// created 中只写主要逻辑，不写逻辑实现，所以将请求再做一层封装到methods中
    created() {
        // 请求轮播图 & banner
        this.getHomeMultidata()

        // 请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },

    mounted() {
        
    },

    computed: {
        // 表达式较长写成计算属性，直接放在标签中会显得杂乱
        showGoods(){
            return this.goods[this.currentType].list
        }
    },

    methods: {

        /*
            网络请求
        */
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
                this.banners = res.data.data.banner.list;
                this.recommends = res.data.data.recommend.list;
            })
        },

        getHomeGoods(type){
            // 获取当前页，+1到下一页
            const page = this.goods[type].page + 1

            getHomeGoods(type,page).then(res=>{ 
                /* 
                    更新数据
                    push > 在原有内容的基础上push进去新的，直接赋值会覆盖原有的
                    方法1：遍历lish挨个push(item)
                    方法2：push(...list) > es6语法，解构，将数组内的数值挨个push进去，直接push(lish)则为[1,2,[3,4]]
                */
                this.goods[type].list.push(...res.data.data.list);
                // 更新当前页码
                this.goods[type].page += 1;
            })
        },

        /*
            事件监听
        */
        tabClick(index){
            switch(index){
                case 0:
                    this.currentType = 'pop';
                break;
                case 1:
                    this.currentType = 'new';
                break;
                case 2:
                    this.currentType = 'sell';
                break;
            }
        },

        backClick(){
            // 返回顶部
            this.$refs.scroll.scrollTo(0,0);
        }
    },
};
</script>

<style scoped>
#home{
    /* padding-top: 44px;
    padding-bottom: 49px; */
    height: 100vh;
    /* margin-top:44px; */
    position: relative;
}
.home-nav{
    position:fixed;
    left:0;
    top:0;
    right: 0;
    z-index: 10;
    background-color:var(--color-tint);
    color:#fff;
}

.tab-control{
    /* 
        sticky属性在没有超过设置的数值的时候一直为sticky，超过则自动设为flex 
        超过当前标签的top:44px时，变为flex。
        兼容性较差，有些浏览器不支持，ie不支持。
    */
    position: sticky;
    top: 44px;
    /* z-index: 2; */
}

.content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
}
</style>