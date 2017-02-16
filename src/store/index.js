//import Vue from 'vue';
import Vuex from 'vuex';
import {toast} from '../common/modal';
import createLogger from 'vuex/dist/logger';
import {createSyncState, createHandleError, createHandlePending} from './vuex-additions/index';
import modules from './modules';

import local from '../common/storage';
import {getLocalKeyPrefix} from '../common/index';

import {
    SYNC_STATE_FROM_STORAGE,
    SYNC_CONTEXT_FROM_GLOBAL,
} from '../constants/mutation-types';


if (WXEnvironment.platform !== 'Web') {
    Vue.use(Vuex)
}

const LOCAL_KEY_PREFIX = getLocalKeyPrefix();
const debug = process.env.NODE_ENV !== 'production';
const syncStateOptions = {
    // 页面初始化的时候，执行 SYNC_STATE_FROM_STORAGE之前要忽略一些 actions 否则会将默认的state同步到本地，把本地数据覆盖了。
    ignoreActions: [SYNC_CONTEXT_FROM_GLOBAL, SYNC_STATE_FROM_STORAGE, 'router/ROUTE_CHANGED'],
    keyPrefix: `${LOCAL_KEY_PREFIX}-sync-state`,
    modules,
    setItem: local.setItem,
    getItem: local.getItem,
};
const handleErrorOptions = {
    errorCallBack(message) {
        toast({
            message,
        });
    },
};
const handlePendingOptions = {
    pendingCallBack() {
        // TODO 改成loading，目前weex没有组件
        toast({
            message: '请求开始！',
        });
    },
    pendingOverCallBack() {
        toast({
            message: '请求结束！'
        });
    },
};

const plugins = [
    createSyncState(syncStateOptions),
    createHandleError(handleErrorOptions),
    createHandlePending(handlePendingOptions),
];
if (debug) {
    plugins.push(createLogger({}));
}

export default new Vuex.Store({
    modules,
    strict: debug,
    plugins,
    getters: {
        // ids of the items that should be currently displayed based on
        // current list type and current pagination
        activeIds (state) {
            const {activeType, lists, counts} = state
            return activeType ? lists[activeType].slice(0, counts[activeType]) : []
        },

        // items that should be currently displayed.
        // this Array may not be fully fetched.
        activeItems (state, getters) {
            return getters.activeIds.map(id => state.items[id]).filter(_ => _)
        }
    }
});

