export default function handleMutation({
    always = () => {
    },
    pending = () => {
    },
    resolve = () => {
    },
    reject = () => {
    },
    complete = () => {
    },
}) {
    return (state, action) => {
        const {meta = {}, error, payload} = action;
        const isPending = meta.sequence && meta.sequence.type === 'start';

        always(state, action);

        if (isPending) {
            pending(state, action);
        } else if (error) {
            reject(state, action);
            complete(state, action);

            if (meta.reject && typeof meta.reject === 'function') {
                meta.reject(payload);
            }
        } else {
            resolve(state, action);
            complete(state, action);

            if (meta.resolve && typeof meta.resolve === 'function') {
                meta.resolve(payload);
            }
        }
    };
}
