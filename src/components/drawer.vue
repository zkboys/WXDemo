<template>
    <div class="drawer-wrapper"  v-if="show">
        <div class="cover" ref="cover" @click="hideDrawer"></div>
        <scroller class="drawer" ref="drawer">
            <div class="drawer-header"></div>
            <text>菜单1</text>
            <text>菜单1</text>
            <text>菜单1</text>
            <text>菜单1</text>
        </scroller>
    </div>
</template>
<style>
    .drawer-wrapper{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .cover{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
    }
    .drawer{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 250px;
        background-color: #eeeeee;
        transform: translate(-250px, 0px);
    }
    .drawer-header{
        height: 150px;
        background-image: linear-gradient(to top left,#28520c,#66ff00);
    }

</style>
<script>
    const animation = weex.requireModule('animation');
    const modal = weex.requireModule('modal');
    const drawerDuration = 200;
    const coverDuration = 300;
    export default{
        data(){
            return{
                show: false,
            }
        },
        methods: {
            hideDrawer(){
                const cover = this.$refs.cover;
                const drawer = this.$refs.drawer;
                animation.transition(drawer,
                    {
                        styles: {
                            transform: 'translate(-250px, 0px)',
                        },
                        duration: drawerDuration, //ms
                        timingFunction: 'ease',
                        delay: 0 //ms
                    },
                );
                animation.transition(cover,
                    {
                        styles: {
                            opacity: 0,
                        },
                        duration: coverDuration, //ms
                        timingFunction: 'ease',
                        delay: 0 //ms
                    },
                    ()=> {
                        this.show = false;
                    }
                );
            },
            showDrawer(){
                this.show = true;
                // 由于 v-if = 'show' 的原因，这里要使用nextTick，否者无法获取$refs
                this.$nextTick(() => {
                    const cover = this.$refs.cover;
                    const drawer = this.$refs.drawer;
                    animation.transition(cover,
                        {
                            styles: {
                                opacity: 1,
                            },
                            duration: coverDuration, //ms
                            timingFunction: 'ease',
                            delay: 0 //ms
                        }
                    );
                    animation.transition(drawer,
                        {
                            styles: {
                                transform: 'translate(0px, 0px)',
                            },
                            duration: drawerDuration, //ms
                            timingFunction: 'ease',
                            delay: 1 //ms 这里需要使用delay，否者android没有动画效果，原因未知
                        },
                    );
                });
            },
        },
        mounted(){
            this.eventBus.$on('show-drawer', this.showDrawer);
            this.eventBus.$on('hide-drawer', this.hideDrawer);
        }
    }
</script>
