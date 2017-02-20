import {mapActions, mapState} from 'vuex';
import MenuHeader from '../../components/menu-header.vue'
const modal = weex.requireModule('modal');

export default {
    components: {MenuHeader},
    data () {
        return {
            showLoading: 'show',
            message: '测试vuex',
            contentStyle: '',
        }
    },

    computed: {
        ...mapState([
            'app',
            'dishCart',
        ]),
    },

    methods: {
        ...mapActions([
            'hideDishDetail',
            'setCartDish',
            'getDishDetail',
            'startPointAnimate',
        ]),
        setMessage(){
            this.setCartDish('设置一二');
        },
        oninput (event) {
            console.log('oninput:', event.value)
            modal.toast({
                message: `oninput: ${event.value}`,
                duration: 0.8
            })
        },
        onchange (event) {
            console.log('onchange:', event.value)
            modal.toast({
                message: `onchange: ${event.value}`,
                duration: 0.8
            })
        },
        onfocus (event) {
            console.log('onfocus:', event.value)
            modal.toast({
                message: `onfocus: ${event.value}`,
                duration: 0.8
            })
        },
        onblur (event) {
            console.log('onblur:', event.value)
            modal.toast({
                message: `input blur: ${event.value}`,
                duration: 0.8
            })
        }
    },
    created () {
        const contentHeight = WXEnvironment.deviceHeight - 120;
        this.contentStyle = `height: ${contentHeight}px`;
    }
}

