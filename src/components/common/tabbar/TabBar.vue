<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'VueTabbar',

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
#tab-bar{
    width: 100%;
    height: 49px;
    background: #eee;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);

    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: space-around;
}
</style>