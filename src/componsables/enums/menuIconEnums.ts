import {Star} from "@element-plus/icons-vue";

export enum MenuIconEnums {
    PieChart,
    Document,
    Files,
    Folder,
    Tools,
    ElementPlus,
    Star
}

export function getIcon(index: number) {
    return MenuIconEnums[index];
}
