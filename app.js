import foo from './src/foo.vue';
import home from './src/home/home.vue';
foo.el = '#root';
home.el = '#root';
export default new Vue(home)
