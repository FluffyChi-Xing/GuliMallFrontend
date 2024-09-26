import {$enum} from "@/componsables/enum";
import type {layoutTypes} from "@/componsables/apis/layoutTypes";

export const MenuData = [
    {
        index: 'r1',
        label: '仪表盘',
        icon: $enum.getIcon(0),
    },
    {
        index: 'r2',
        label: 'demo',
        icon: $enum.getIcon(6),
    },
    {
        index: '3',
        label: '商品系统',
        icon: $enum.getIcon(1),
        children: [
            {
                index: '3-1',
                label: '分类维护',
                icon: $enum.getIcon(2),
            },
            {
                index: '3-2',
                label: '品牌管理',
                icon: $enum.getIcon(3),
            },
            {
                index: '3-3',
                label: '平台属性',
                icon: $enum.getIcon(4),
                children: [
                    {
                        index: '3-3-1',
                        label: '属性分组',
                        icon: $enum.getIcon(10),
                    },
                    {
                        index: '3-3-2',
                        label: '规格参数',
                        icon: $enum.getIcon(11),
                    },
                    {
                        index: '3-3-3',
                        label: '销售属性',
                        icon: $enum.getIcon(12),
                    }
                ]
            },
            {
                index: '3-4',
                label: '商品维护',
                icon: $enum.getIcon(5),
                children: [
                    {
                        index: '3-4-1',
                        label: 'spu管理',
                        icon: $enum.getIcon(7),
                    },
                    {
                        index: '3-4-2',
                        label: '发布商品',
                        icon: $enum.getIcon(8),
                    },
                    {
                        index: '3-4-3',
                        label: '商品管理',
                        icon: $enum.getIcon(9),
                    }
                ]
            }
        ]
    },
    {
        index: '4',
        label: '订单系统',
        icon: $enum.getIcon(13),
        children: [
            {
                index: '4-1',
                label: '订单管理',
                icon: $enum.getIcon(14),
            }
        ]
    },
    {
        index: '5',
        label: '系统管理',
        icon: $enum.getIcon(15),
        children: [
            {
                index: '5-1',
                label: '菜单管理',
                icon: $enum.getIcon(16),
            },
            {
                index: '5-2',
                label: 'SQL监控',
                icon: $enum.getIcon(17),
            }
        ]
    }
]


/**
 * @description: 获取菜单标签
 * @param {string} thing
 * @param thing
 */
export function useIndexGetLabel(thing: string) {
    if (thing === 'admin') {
        return '个人中心';
    }
    function findLabel(menuData: layoutTypes.menuTypes[]): string | undefined {
        for (const item of menuData) {
            if (item.index === thing) {
                return item.label;
            }
            if (item.children?.length) {
                const foundLabel = findLabel(item.children);
                if (foundLabel) {
                    return foundLabel;
                }
            }
        }
    }
    return findLabel(MenuData);
}

// get menu data
export function getMenuData() {
    return MenuData
}
