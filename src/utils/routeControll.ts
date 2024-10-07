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
    if (item === '/home/order') return 'order';
    if (item === '/home/order/manage') return 'orderManage';
    if (item === '/home/fitment') return 'fitment'
    return $enum.getRouterKey(item);
}

/**
 * 获取路由label
 * @param item
 */
export function keyGetLabel(item: string): string | undefined {
    if (item === 'home') return '首页';
    if (item === 'order') return '订单系统';
    if (item === 'orderManage') return '订单管理';
    if (item === 'fitment') return '装修'
    return useIndexGetLabel(item);
}
