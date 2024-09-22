<script setup lang="ts">
import { ref } from 'vue'
import type {layoutTypes} from "@/componsables/apis/layoutTypes";
import {Close, DocumentDelete, Refresh} from "@element-plus/icons-vue";
import TagsComponent from "@/layout/_components/TagsComponent.vue";
// 路由tags 接口定义
withDefaults(defineProps<{

}>(), {

})



/** ===== 功能栏初始化-start ===== **/
const dropList = [
  {
    icon: Refresh,
    label: '刷新',
  },
  {
    icon: Close,
    label: '关闭',
  },
  {
    icon: DocumentDelete,
    label: '关闭全部',
  }
]
const tagDrop = ref<layoutTypes.routerTagDropTypes[]>(dropList)
/** ===== 功能栏初始化-end ===== **/
</script>

<template>
  <div
      class="w-full flex h-[30px] pr-4"
  >
    <!-- 左箭头 -->
    <div class="w-[30px] h-full flex">
      <el-button
          icon="ArrowLeft"
          type="text"
          class="w-full h-full"
      />
    </div>
    <!-- 路由tags -->
    <div
        style="width: calc(100% - 106px)"
        class="h-ful flex overflow-x-auto"
    >
      <TagsComponent />
    </div>
    <!-- 右侧功能区 -->
    <div class="w-[76px] h-full flex">
      <el-button
          icon="ArrowRight"
          type="text"
          class="w-full h-full mr-4"
      />
      <el-dropdown>
        <el-button
            icon="Menu"
            type="text"
            class="w-full h-full"
        />
        <template #dropdown>
          <el-dropdown-item
              v-for="(item, index) in tagDrop"
              :key="index"
              :icon="item.icon"
          >
            {{ item.label }}
          </el-dropdown-item>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>
:deep(.el-button:focus-visible) {
  outline: none;
}
</style>
