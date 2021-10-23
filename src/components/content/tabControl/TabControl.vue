<template>
    <!-- 组件只是文字不一致的时候就不需要slot插槽了 -->
    <div class="tab-control">
        <div v-for="(item,index) in titles" 
        class="tab-control-item" 
        :class="{active: index == currentIndex}"
        @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueTabcontrol',

    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },

    data(){
        return{
            currentIndex:0
        }
    },

    components: {  },

    directives: {  },

    mounted() {
        
    },

    methods: {
        itemClick(index){
            this.currentIndex = index;
            // 子传父，切换商品类别
            this.$emit('tabClick', index);
        }
    },
};
</script>

<style scoped>
    .tab-control{
        display: flex;
        background: #fff;
    }

    .tab-control-item{
        /* 平分 */
        flex: 1;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 15px;

        transition: all .5s;
    }
    .tab-control-item span{
        padding: 5px;

        transition: all 0.1s;
    }

    .active{
        color: var(--color-high-text);
    }
    .active span{
        border-bottom: 3px solid var(--color-tint);
    }
</style>