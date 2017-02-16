function isPromise(val) {
    return val && typeof val.then === 'function';
}

function identity(value) {
    return value;
}

let idCounter = 0;
function uniqueId() {
    idCounter += 1;
    return String(idCounter);
}

export default function createAction(type, payloadCreator, metaCreator) {
    const finalPayloadCreator = typeof payloadCreator === 'function'
        ? payloadCreator
        : identity;

    const actionCreator = ({commit}, args) => {
        const hasError = args instanceof Error;

        const action = {
            type,
        };

        const payload = hasError ? args : finalPayloadCreator(args);
        if (!(payload === null || payload === undefined)) {
            action.payload = payload;
        }

        if (hasError || payload instanceof Error) {
            // Handle FSA errors where the payload is an Error object. Set error.
            action.error = true;
        }

        if (typeof metaCreator === 'function') {
            action.meta = metaCreator(args);
        } else if (typeof metaCreator === 'object') {
            action.meta = metaCreator;
        }

        if (action.meta === undefined) {
            action.meta = {};
        }

        if (!args) {
            args = {};
        }

        const callBacks = {
            resolve: args.resolve,
            reject: args.reject,
        };
        const id = uniqueId();

        if (isPromise(payload)) {
            action.meta.sequence = {
                type: 'start',
                id,
            };
            commit(action);
            payload.then( // 异步结束时，再次调用commit，分为成功或失败
                result => commit(type, {
                    ...action,
                    payload: result,
                    meta: {
                        ...callBacks,
                        ...action.meta,
                        sequence: {
                            type: 'next',
                            id,
                        },
                    },
                }),
                error => commit(type, {
                    ...action,
                    payload: error,
                    error: true,
                    meta: {
                        ...callBacks,
                        ...action.meta,
                        sequence: {
                            type: 'next',
                            id,
                        },
                    },
                })
            );
        } else {
            commit(type, action);
        }
    };

    actionCreator.toString = () => type.toString();

    return actionCreator;
}
