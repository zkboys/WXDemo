const Storage = weex.requireModule('storage');

export default {
    setItem(key, value, cb) {
        if (key === '' || key === null || value === '' || value === null) return;
        value = JSON.stringify(value);
        Storage.setItem(key, value, cb);
    },
    getItem(key, cb = () => {
    }) {
        if (key === '' || key === null) return;
        Storage.getItem(key, function (event) {
            const value = event.data;
            if (value && value != 'undefined') {
                cb(JSON.parse(value), event);
            } else {
                cb(value, event);
            }
        });
    },
    removeItem(key, cb){
        if (key === '' || key === null) return;
        return Storage.removeItem(key);
    },
};

