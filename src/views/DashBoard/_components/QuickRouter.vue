<script setup lang="ts">
import { ref } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";

/**
 * @description 快捷导航组件
 * @param {string} label - 标签
 * @param {string} url - 跳转链接
 */
withDefaults(defineProps<{
  label?: string;
  url?: string;
  icon?: string;
}>(), {
  label: '快捷导航',
  icon: 'shangpin'
})
</script>

<template>
  <div class="w-full h-full justify-center cursor-pointer flex flex-col">
    <el-card class="w-full h-full is-never-shadow">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <div class="w-[50px] h-[50px] rounded-[25px] items-center flex justify-center bg-[#F0F2F5]">
          <SvgIcon
              :icon="icon"
              size="24"
          />
        </div>
        <div class="w-full h-auto mt-2 text-center text-[15px]">
          <span class="overflow-hidden whitespace-nowrap text-ellipsis">{{ label }}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
:deep(.el-card__body) {
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
