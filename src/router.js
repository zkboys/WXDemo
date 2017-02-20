// import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import DemoView from './views/demo/demo.vue';
import Splash from './views/splash/splash.vue';

export default new Router({
    // mode: 'abstract',
    routes: [
        {path: '/splash', component: Splash},
        {path: '/', component: DemoView},
    ]
})
