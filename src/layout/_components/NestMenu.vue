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
      <el-icon
          v-if="menuItem.icon"
      >
        <component :is="menuItem.icon" />
      </el-icon>
      <span>{{ menuItem.label }}</span>
    </template>
    <NestMenu
        v-for="(item, index) in menuItem.children"
        :key="index"
        :menuItem="item"
    />
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
