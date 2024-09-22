export namespace GoodsMaintenance {

    /**
     * 商品分类
     * @param label
     * @param value
     */
    export interface spuFilterTypes {
        label: string;
        value: string;
    }

    export interface tableDataTypes {
        label: string;
        prop: string;
        width?: number;
        fixed?: string;
        overflow?: boolean;
    }

    export interface tableData {
        id: number;
        name: string;
        description: string;
        weight: number;
        created_time: string;
        updated_time: string;
        status: boolean;
    }
}
