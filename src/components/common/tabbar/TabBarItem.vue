<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActionIcon"><slot name="item-img"></slot></div>
        <div v-else><slot name="item-active-img"></slot></div>
        <div :style="isActionColor"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'VueTabbaritem',

    components: {  },

    directives: {  },

    data() {
        return {
            
        };
    },

    props:{
        link:String,
        ActiveColor:{
            type:String,
            default:'#ff5777'
        }
    },

    mounted() {
        
    },

    methods: {
        itemClick(){
            this.$router.push(this.link)
        }
    },

    computed:{
        isActionIcon(){
            return this.link == this.$route.path
        },
        isActionColor(){
            return this.isActionIcon?{color:this.ActiveColor}:{}
        }
    }
};
</script>

<style scoped>
.tab-bar-item{
    width: 50px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    font-size: 13px;

    cursor: pointer;
}
.tab-bar-item img{
    width: 25px;
}
</style>