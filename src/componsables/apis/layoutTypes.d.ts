export namespace layoutTypes {
    /**
     * @description: 菜单数据类型
     * @param {string} icon: 图标
     * @param {string} index: 路由
     * @param {string} label: 标签
     * @param {menuTypes[]} children: 子菜单
     */
    export interface menuTypes {
        icon?: string;
        index: string;
        label: string;
        children?: menuTypes[];
    }

    /**
     * @description: 仪表盘数据类型
     * @param {string} title: 标题
     * @param {string} account: 账户
     * @param {string} yesterday: 昨日
     * @param {string} statistics: 统计
     * @param {boolean} status: 状态
     * @param {string} desc: 描述
     * @param {string} total: 总数
     */
    export interface KanbanTypes {
        title?: string;
        account?: string;
        yesterday?: string;
        statistics?: string;
        status?: boolean;
        desc?: string;
        total?: string;
    }

    /**
     * @description: 快捷入口数据类型
     * @param {string} label: 标签
     * @param {string} url: 链接
     * @param {string} icon: 图标
     */
    export interface QuickTypes {
        label?: string;
        url?: string;
        icon?: string;
    }

    /**
     * @description: 功能按钮数据类型
     * @param {any} icon: 图标
     * @param {string} content: 内容
     * @param {Function} func: 调用函数
     * @param {boolean} dot: 是否显示小红点
     */
    export interface functionButtonTypes {
        icon?: any;
        content?:string;
        func?: Function;
        dot?: boolean;
    }


    /**
     * @description: 路由标签数据类型
     * @param {any} icon: 图标
     * @param {string} label: 标签
     * @param {Function} func: 调用函数
     */
    export interface routerTagDropTypes {
        icon: any;
        label: string;
        func?: Function;
    }


    /**
     * @description: 路由标签数据类型
     * @param {string} index: 路由
     * @param {string} route: 路由
     */
    export interface routerTagTypes {
        index?: string;
        route: string;
        label: string;
    }
}
