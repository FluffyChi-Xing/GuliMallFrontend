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
    Checked,
    TakeawayBox,
    Memo,
    Histogram,
    Management,
    List
}

export function getIcon(index: number) {
    return MenuIconEnums[index];
}
