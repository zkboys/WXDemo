/**
 * 根据 mapObj 的结构，获取 originObj 对应结构的数据
 * @param originObj
 * @param mapObj
 * @param result
 * @returns {{}}
 */
function filterObjectByObject(originObj, mapObj, result = {}) {
    for (const key of Object.keys(mapObj)) {
        const value = mapObj[key];
        if (value === true) {
            result[key] = originObj[key];
        }

        if (typeof value === 'object') {
            result[key] = filterObjectByObject(originObj[key], value, result[key]);
        }
    }
    return result;
}

/**
 * 根据 modules 中syncToLocal配置 将state同步到localStorage中（调用setItem(key, value)，具体进行了什么操作，取决于setItem）
 * @param syncAction
 * @param keyPrefix
 * @param modules
 * @param setItem
 * @returns {function(*)}
 */
export default function createSyncState({ignoreActions, keyPrefix = 'state-sync-local-', modules, setItem, getItem}) {
    return (store) => {
        store.subscribe((mutation, state) => {
            const {error, meta = {}} = mutation.payload;
            const pending = meta.sequence && meta.sequence.type === 'start';

            if (!pending && !error && ignoreActions.indexOf(mutation.type) === -1) {
                getItem(keyPrefix, (data = {}) => {
                    if (!data || typeof data !== 'object') {
                        data = {}
                    }
                    for (const moduleName of Object.keys(modules)) {
                        const {syncToLocal} = modules[moduleName];
                        if (syncToLocal) {
                            const moduleState = state[moduleName];
                            const localValue = filterObjectByObject(moduleState, syncToLocal);
                            data[moduleName] = localValue;
                        }
                    }
                    console.log(keyPrefix, data);
                    setItem(keyPrefix, data);
                });
            }
        });
    };
}

