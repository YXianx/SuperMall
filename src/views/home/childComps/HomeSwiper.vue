<template>
    <swiper>
        <swiper-item v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'

export default {
    name: 'VueHomeswiper',

    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },

    components: { 
        Swiper,
        SwiperItem
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