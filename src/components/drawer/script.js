const animation = weex.requireModule('animation');
const modal = weex.requireModule('modal');
import {toast} from '../../common/modal';

import iconDiancan from './icon-diancan.png';
import iconActiveDiancan from './icon-diancan-active.png';
import iconDingdan from './icon-dingdan.png';
import iconActiveDingdan from './icon-dingdan-active.png';
import iconZhuye from './icon-zhuye.png';
import iconActiveZhuye from './icon-zhuye-active.png';


const drawerDuration = 200;
const coverDuration = 300;


export default{
    data(){
        return {
            show: false,
            userName: '王丹婷',
            userAccount: 'wangdanting@xiaoyage.com',
            activeMenuId: 'diancan',
            menus: [
                {
                    id: 'diancan',
                    icon: iconDiancan,
                    iconActive: iconActiveDiancan,
                    text: '点餐',
                },
                {
                    id: 'dingdan',
                    icon: iconDingdan,
                    iconActive: iconActiveDingdan,
                    text: '订单',
                },
                {
                    id: 'zhuye',
                    icon: iconZhuye,
                    iconActive: iconActiveZhuye,
                    text: '主页',
                },
            ],
        }
    },
    methods: {
        menuClick(menuId){
            // TODO 切换时，有点卡
            this.activeMenuId = menuId;
            this.hideDrawer();
        },
        hideDrawer(){
            const cover = this.$refs.cover;
            const drawer = this.$refs.drawer;
            animation.transition(drawer,
                {
                    styles: {
                        transform: 'translate(-266px, 0px)',
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
                () => {
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
        this.showDrawer();
        this.eventBus.$on('show-drawer', this.showDrawer);
        this.eventBus.$on('hide-drawer', this.hideDrawer);
    }
}
