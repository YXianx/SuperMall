<template>
    <tab-bar>
        <tab-bar-item link='/home'>
          <template  v-slot:item-img>
            <img src="../../../assets/img/tabbar/home.svg" alt="" style="width:25px">
          </template>
          <template  v-slot:item-active-img>
            <img src="../../../assets/img/tabbar/home-active.svg" alt="" style="width:25px">
          </template>
          <template v-slot:item-text>
          <div>首页</div>
          </template>
        </tab-bar-item>
        
        <tab-bar-item link='/category'>
          <template  v-slot:item-img>
            <img src="../../../assets/img/tabbar/category.svg" alt="" style="width:25px">
          </template>
          <template  v-slot:item-active-img>
            <img src="../../../assets/img/tabbar/category-active.svg" alt="" style="width:25px">
          </template>
          <template v-slot:item-text>
            <div>分类</div>
          </template>
        </tab-bar-item>

        <tab-bar-item link='/shopcart'>
          <template  v-slot:item-img>
            <img src="../../../assets/img/tabbar/shopcart.svg" alt="" style="width:25px">
          </template>
          <template  v-slot:item-active-img>
            <img src="../../../assets/img/tabbar/shopcart-active.svg" alt="" style="width:25px">
          </template>
          <template v-slot:item-text>
            <div>购物车</div>
          </template>
        </tab-bar-item>

        <tab-bar-item link="/user">
          <template  v-slot:item-img>
            <img src="../../../assets/img/tabbar/user.svg" alt="" style="width:25px">
          </template>
          <template  v-slot:item-active-img>
            <img src="../../../assets/img/tabbar/user-active.svg" alt="" style="width:25px">
          </template>
          <template v-slot:item-text>
            <div>个人</div>
          </template>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar.vue'
import TabBarItem from '../../common/tabbar/TabBarItem.vue'

export default {
    name: 'VueMaintabbar',

    components: { 
        TabBar,
        TabBarItem
     },

    directives: {  },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>