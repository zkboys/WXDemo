<template>
    <div>
        <app-header :title="title">
            <div slot="left" style="background-color: red;height:50px;" @click="handleMenuIconClick">
                <text>menu 图标 </text>
            </div>
            <div slot="right">
                <slot name="right"></slot>
            </div>
        </app-header>
    </div>
</template>
<style scope>
</style>
<script>
    import AppHeader from './app-header.vue'
    export default{
        components:{
            AppHeader,
        },
        props: {
          title: {
            type: String,
            default: ''
          }
        },
        methods: {
           handleMenuIconClick(){
                this.eventBus.$emit('show-drawer');
           }
        }
    }
</script>
