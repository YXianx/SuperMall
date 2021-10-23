<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommends">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueHomerecommendview',

    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    },

    components: {  },

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
.recommend{
    display: flex;
    width:100%;
    text-align: center;
    /* justify-content: space-around; */
    padding:10px 0 20px;

    border-bottom: 8px solid #eee;
}
.recommend-item{
    /* 均等分 */
    flex: 1;
    font-size: 12px;
}
.recommend-item img{
    width: 65px;
    margin-bottom: 10px;
}
</style>