<template>
    <div class="goods-list-item">
        <img :src="goodsItem.show.img" alt="" srcset="">
        <div class="content">
            <p>{{goodsItem.title}}</p> 
            <div class="info">
                <span class="price">{{goodsItem.price}}</span>
                <span class="collect">{{goodsItem.cfav}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueGoodslistitem',

    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
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

<style scoped>
    .goods-list-item{  
        /* width: 176px; */
        /* 不适用固定宽度，用百分比使得在不同设备上的显示效果一致 */
        width: 48%;
        margin-bottom: 8px;
    }
    .goods-list-item img{
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .goods-list-item .content p{
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
    }
    .goods-list-item .content .info{
        text-align:center;
    }
    .price{
        color: var(--color-high-text);
    }
    .collect{
        margin-left: 10px;
        position: relative;
    }
    .collect::before{
        content: "☆";
    }
</style>