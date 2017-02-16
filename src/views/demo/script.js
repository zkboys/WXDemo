import {mapActions, mapState} from 'vuex';

export default {
    data () {
        return {
            showLoading: 'show',
            message: '测试vuex',
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
        }
    },

    created () {
    }
}

