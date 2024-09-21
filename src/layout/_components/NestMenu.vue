<script setup lang="ts">
import {layoutTypes} from "@/componsables/apis/layoutTypes";

withDefaults(defineProps<{
  menuItem: layoutTypes.menuTypes
}>(), {

})
</script>

<template>
  <el-sub-menu
      v-if="menuItem.children?.length"
      :index="menuItem.index"
  >
    <template #title>
      <el-icon><component :is="menuItem.icon" /></el-icon>
      <span>{{ menuItem.label }}</span>
    </template>
    <el-menu-item
        v-for="(item, index) in menuItem.children"
        :key="index"
        :index="item.index"
    >
      <el-icon><component :is="item.icon" /></el-icon>
      <span>{{ item.label }}</span>
    </el-menu-item>
  </el-sub-menu>
  <el-menu-item
      v-else
      :index="menuItem.index"
  >
    <el-icon><component :is="menuItem.icon" /></el-icon>
    <span>{{ menuItem.label }}</span>
  </el-menu-item>
</template>

<style scoped>

</style>
