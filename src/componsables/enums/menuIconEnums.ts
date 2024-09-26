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
    List,
    Setting,
    Menu,
    Compass
}

// 获取图标
export function getIcon(index: number) {
    return MenuIconEnums[index];
}


// 将枚举转化为数组返回
export function enum2list(): any[] {
    const list = [];
    for (let i = 0; i < Object.keys(MenuIconEnums).length / 2; i++) {
        list.push({
            index: i,
            label: String(MenuIconEnums[i]), // 通过枚举值获取枚举名
            icon: getIcon(i) // 通过枚举值获取图标
        });
    }
    return list;
}

