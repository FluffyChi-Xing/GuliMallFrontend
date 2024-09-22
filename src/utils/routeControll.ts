import {useIndexGetLabel} from "@/componsables/apis/MenuData";
import {$enum} from "@/componsables/enum";

/**
 * 获取路由key
 * @param item
 */
export function routeGetKey(item: string) {
    // 处理根目录不是首页的问题
    if (item === '/home/dashboard') return 'r1'
    if (item === '/home') return 'home';
    return $enum.getRouterKey(item);
}

/**
 * 获取路由label
 * @param item
 */
export function keyGetLabel(item: string): string | undefined {
    if (item === 'home') return '首页';
    return useIndexGetLabel(item);
}
