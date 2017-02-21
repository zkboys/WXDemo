// import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import DemoView from './views/demo/demo.vue';
import Splash from './views/splash/splash.vue';
import Table from './views/table/table.vue';
import StoriesView from './views/StoriesView.vue';

export default new Router({
    // mode: 'abstract',
    routes: [
        {path: '/store', component: StoriesView},
        {path: '/table', component: Table},
        {path: '/splash', component: Splash},
        {path: '/', component: DemoView},
    ]
})
