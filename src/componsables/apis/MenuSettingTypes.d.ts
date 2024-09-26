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
}
