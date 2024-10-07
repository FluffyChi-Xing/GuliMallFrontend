<script setup lang="ts">
import { ref } from 'vue'
withDefaults(defineProps<{
  tabList?: string[];
}>(), {

})
const emits = defineEmits(['tab-change'])

function changeTab(index: string) {
  emits('tab-change', index)
}
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <el-tabs
        tab-position="left"
        class="w-full"
        @tab-change="changeTab"
    >
      <el-tab-pane
          v-for="(item, index) in tabList"
          :key="index"
          :label="item"
      />
    </el-tabs>
  </div>
</template>

<style scoped>
:deep(.el-tabs__content) {
  display: none;
}
:deep(.el-tabs__nav-wrap:after) {
  display: none;
}
</style>
