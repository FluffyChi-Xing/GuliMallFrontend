<script setup lang="ts">
withDefaults(defineProps<{
  adUrl?: string;
}>(), {

})
</script>

<template>
  <div class="w-full h-10 flex rounded-[10px] overflow-hidden relative">
    <!-- tag -->
    <div class="absolute top-[7px] left-[7px] text-[10px] text-gray-50 px-1 ad-tag rounded-[2px] bg-gray-400">广告</div>
    <!-- img -->
    <img
        :src="adUrl"
        alt=""
        class="w-full h-full object-contain"
        loading="lazy"
    >
  </div>
</template>

<style scoped>
.ad-tag {
  border: 1px solid #f0f0f0;
}
</style>
