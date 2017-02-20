import modal from '../common/modal';
/**
 * vue 全局方法在这里定义
 */
const eventBus = new Vue();
export default {
    data (){
        return {
            eventBus,
        };
    },
    methods: {
        jump (to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        showToast(message){
            modal.toast({message});
        },
    }
}
