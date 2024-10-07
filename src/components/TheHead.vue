<script setup lang="ts">
withDefaults(defineProps<{
  title?: string;
  isShow?: boolean;
}>(), {
  title: '默认标题',
  isShow: true
})
</script>

<template>
  <div
      v-if="isShow"
      class="w-full h-auto mt-4 flex flex-col"
  >
    <el-card
        class="w-full h-full p-4 is-never-shadow"
    >
      <div class="w-full h-full flex flex-col items-center">
        <div class="text-xl flex justify-between font-bold w-full h-auto text-start">
          {{ title }}
          <slot name="head" />
        </div>
        <slot />
      </div>
    </el-card>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
:deep(.el-card__body) {
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>
