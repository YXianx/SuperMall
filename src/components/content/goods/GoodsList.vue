<template>
    <div class="goods">
        <goods-list-item v-for="item in goods" :goods-item="item"/>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
    name: 'VueGoodslist',

    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },

    components: { 
        GoodsListItem
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
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        /* justify-content: space-between; */
        padding: 0 8px;
    }
</style>