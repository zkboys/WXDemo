
/**
 * 获取本地存储的前缀，用来区分不同商户、不同门店存储的信息。
 * @returns {string}
 */
export function getLocalKeyPrefix() {
    const commonStr = 'STORE-SYNC-LOCAL';
    // TODO:
    const mchId = 1;
    const storeId = 1;

    return `${commonStr}-${mchId}-${storeId}`;
}