import {cloneDeep, isArray, isString} from 'lodash/lang';
import {createAction} from '../vuex-additions/index';
import local from '../../common/storage';
import modules from '../modules/index';
import {getLocalKeyPrefix} from '../../common/index';
import {
    SYNC_CONTEXT_FROM_GLOBAL,
    SYNC_STATE_FROM_STORAGE,
} from '../../constants/mutation-types';

const LOCAL_KEY_PREFIX = getLocalKeyPrefix();

export default {
    state: {
        platform: {},
        merchant: {},
        store: {},
        user: {},
    },
    actions: {
        // 从localStorage中同步state到项目中
        syncStateFromLocalStorage: createAction(SYNC_STATE_FROM_STORAGE, () => {
            return new Promise((resolve, reject) => {
                local.getItem(`${LOCAL_KEY_PREFIX}-sync-state`, (data, event) =>{
                    if(event.result === 'success'){
                        resolve(data);
                    }else {
                        reject(new Error('获取本地state数据失败'));
                    }

                });
            })
        }),
    },
    mutations: {
        [SYNC_CONTEXT_FROM_GLOBAL](state, action) {
            const {payload} = action;
            if (payload) {
                state.platform = payload.PLATFORM;
                state.merchant = payload.MERCHANT;
                state.store = payload.STORE;
                state.user = payload.USER;
            }
        },
    },
};
