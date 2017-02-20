<template>
    <div>
        <app-header :title="title">
            <div slot="left" @click="handleMenuIconClick">
                <div class="menu-icon">
                    <div class="menu-icon-item"></div>
                    <div class="menu-icon-item"></div>
                    <div class="menu-icon-item"></div>
                </div>
            </div>
            <div slot="right">
                <slot name="right"></slot>
            </div>
        </app-header>
    </div>
</template>
<style scope>
    .menu-icon{
        width: 60px;
        height: 50px;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .menu-icon-item{
        border-style: solid;
        border-width: 0px;
        border-color: #666;
        border-bottom-width: 2px;
        margin-bottom: 5px;
    }
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
