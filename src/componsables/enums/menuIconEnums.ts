import {Star} from "@element-plus/icons-vue";

export enum MenuIconEnums {
    PieChart,
    Document,
    Files,
    Folder,
    Tools,
    ElementPlus,
    Star,
    DocumentAdd,
    Edit,
    Checked
}

export function getIcon(index: number) {
    return MenuIconEnums[index];
}
