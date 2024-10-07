<script setup lang="ts">
import { ref } from 'vue'


withDefaults(defineProps<{
  imgList?: string[];
  indicator?: string;
  interval?: number;
  blur?: boolean;
  arrow?: string;
}>(), {

})
</script>

<template>
  <div class="w-[300px] h-[400px] cursor-pointer flex flex-col p-4 bg-[#F0F2F5] rounded-[5px] swiper-card overflow-hidden">
    <el-carousel
        class="w-full h-full"
        :indicator-position="indicator"
        :interval="interval"
        :motion-blur="blur"
        :arrow="arrow"
    >
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item" alt="" class="w-full h-[366px] object-contain">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.swiper-card {
  border: 1px dashed theme('colors.primary');
}

.swiper-card:hover {
  border-color: theme('colors.info');
}

:deep(.el-carousel__item) {
  width: 100%;
  height: 100%;
}
</style>
