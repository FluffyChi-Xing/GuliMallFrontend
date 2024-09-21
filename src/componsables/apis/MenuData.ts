import {$enum} from "@/componsables/enum";

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
    }
]
