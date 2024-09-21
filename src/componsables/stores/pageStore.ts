import {defineStore} from "pinia";
import { ref } from "vue";

export const pageStore = defineStore('page', () => {
    const isCollapse = ref<boolean>(false)

    return {
        isCollapse
    }
})
