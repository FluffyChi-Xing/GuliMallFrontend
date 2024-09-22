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
