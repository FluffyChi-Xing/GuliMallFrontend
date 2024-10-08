export enum RouterPathEnum {
    // key = value
    'r1' = '/',
    'r2' = '/home/demo',
    '3-1' = '/home/category',
    '3-2' = '/home/brand',
    '3-3' = '/home/platform',
    '3-4-1' = '/home/spu',
    '3-4-2' = '/home/publish',
    '3-4-3' = '/home/goods',
    '3-3-1' = '/home/platform/category',
    '3-3-2' = '/home/platform/specification',
    '3-3-3' = '/home/platform/sales',
    '4-1' = '/home/order',
    '5-1' = '/home/setting/menu',
    '5-2' = '/home/setting/sql',
    '5-3' = '/home/setting/role',
    '6-1' = '/home/fitment/databind',
    '6-2' = '/home/fitment/resource',
    '6-3' = '/home/fitment/spikes'
}

/**
 * 获取枚举的值
 * @param item
 */
export function getRouterPath(item: string) {
     return RouterPathEnum[item as keyof typeof RouterPathEnum]
}

/**
 * 获取枚举的key
 * @param item
 */
export function getRouterKey(item: string) {
    if (item === '/home/admin') return 'admin'
    if (item === '/home/setting') return 'setting'
    // 将枚举的key转换为数组，然后通过数组的find方法找到对应的key
    return Object.keys(RouterPathEnum).find(key => RouterPathEnum[key as keyof typeof RouterPathEnum] === item)
}


/**
 * 检查路径是否存在
 * @param item
 */
export function checkPathExist(item: string) {
    const result = Object.keys(RouterPathEnum).find(key => RouterPathEnum[key as keyof  typeof RouterPathEnum] === item)
    if (result) {
        return true
    } else {
        return false
    }
}
