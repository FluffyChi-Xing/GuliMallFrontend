<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";


withDefaults(defineProps<{
  icon?: string;
  title?: string;
  desc?: string;
}>(), {
  icon: 'duanxin',
  title: '通知',
  desc: '您有一条新消息'
})
</script>

<template>
  <div class="w-[200px] h-10 grid grid-cols-4 gap-4">
    <!-- icon area -->
    <div class="w-full h-full flex justify-center items-center">
      <SvgIcon
          :icon="icon"
          size="24"
      />
    </div>
    <!-- word area -->
    <div class="col-span-3 w-full h-full flex flex-col">
      <div class="w-full h-1/2 font-bold flex text-[13px] items-center overflow-hidden text-ellipsis whitespace-nowrap">
        {{ title }}
      </div>
      <div class="w-full h-1/2 flex text-[13px] items-center overflow-hidden text-ellipsis whitespace-nowrap">
        {{ desc }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
