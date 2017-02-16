import modal from '../common/modal';
/**
 * vue 全局方法在这里定义
 */
export default {
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
