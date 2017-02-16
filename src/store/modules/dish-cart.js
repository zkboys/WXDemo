import {cloneDeep} from 'lodash/lang';
import {createAction} from '../vuex-additions/index';
import {
    SET_CART_DISH,
    SYNC_STATE_FROM_STORAGE,
} from '../../constants/mutation-types';


export default {
    syncToLocal: {
        message: true,
    },
    state: {
        message: 'init message',
    },
    actions: {
        setCartDish: createAction(SET_CART_DISH),
    },
    mutations: {
        [SET_CART_DISH](state, action) {
            const {payload} = action;
            state.message = payload;
        },

        [SYNC_STATE_FROM_STORAGE](state, action) {
            const {payload} = action;
            if (payload && payload.dishCart) {
                state.message = payload.dishCart.message;
            }
        },
    },
};
