export namespace MenuSettingTypes {
    export interface MenuDataTypes {
        name: string;
        superior: string;
        icon: string;
        type: string;
        index: string;
        route?: string;
        auth?: string;
        children?: MenuDataTypes[];
    }

    /**
     * 菜单图标类型
     * @param icon 图标
     * @param index 索引
     * @param label 标签
     */
    export interface menuIconsTypes {
        icon: any;
        index: number;
        label: string;
    }

    export interface SimMenuDataTypes {
        label: string;
        value: string;
        children?: SimMenuDataTypes[];
    }
}
