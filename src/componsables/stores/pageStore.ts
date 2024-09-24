import {defineStore} from "pinia";
import { ref } from "vue";

export const pageStore = defineStore('page', () => {
    const isCollapse = ref<boolean>(false)
    const isShowLogo = ref<boolean>(true) // 是否显示logo
    const isShowBread = ref<boolean>(true) // 是否显示面包屑

    return {
        isCollapse,
        isShowLogo,
        isShowBread
    }
})
