<script setup lang="ts">


withDefaults(defineProps<{
  isShow?: boolean
}>(), {
  isShow: false
})

</script>

<template>
  <div
      v-if="isShow"
      class="w-full h-[100px] flex flex-col justify-center items-center"
  >
    <span class="text-[10px]">版权所有，侵权必究</span>
    <span class="text-[10px] my-4">版权所有©2023 - 2025 Fluffy_CX </span>
  </div>
</template>

<style scoped>

</style>
