<script setup lang="ts">
import FunctionalBanner from "@/layout/_components/FunctionalBanner.vue";
import RouterTags from "@/layout/_components/RouterTags.vue";


/** ===== 转发展开侧边抽屉-start ===== **/
const emits = defineEmits(['handleCollapse'])

function handleCollapse(index: boolean) {
  emits('handleCollapse', index)
}
/** ===== 转发展开侧边抽屉-end ===== **/
</script>

<template>
  <div class="w-full h-auto flex flex-col shadow-sm bg-white">
    <!-- function banner -->
    <FunctionalBanner
        @handleCollapse="handleCollapse"
    />
    <!-- router tags banner -->
    <RouterTags />
  </div>
</template>

<style scoped>

</style>
