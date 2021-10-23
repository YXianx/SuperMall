<template>
  <div>
    <router-view></router-view>
    <main-tabBar/>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar'

export default {
  name: 'VueApp',
  components: { 
    MainTabBar
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

<style>
  @import './assets/css/base.css';
</style>
