<script setup lang="ts">
import type {FitmentTypes} from "@/componsables/apis/fitmentTypes";

withDefaults(defineProps<{
  goods?: FitmentTypes.homeSalesTypes[];
  title?: string;
  hotTag?: string;
}>(), {

})
</script>

<template>
  <div class="w-[300px] h-[200px] sale-fit flex flex-col rounded-[10px] overflow-hidden bg-gradient-to-b from-[#FFF0F1] to-[#FFFFFF00]">
    <!-- the header -->
    <div class="w-full h-auto flex">
      <span class="text-[20px] font-bold mr-2">{{ title }}</span>
      <el-tag class="hot-tag">{{ hotTag }}</el-tag>
    </div>
    <!-- 单个商品 -->
    <div
        v-if="goods?.length === 1"
        style="height: calc(100% - 30px)"
        class="w-full flex flex-col"
    >
      <!-- img -->
      <div
          style="height: calc(100% - 48px)"
          class="w-full flex"
      >
        <img
            :src="goods[0].imgUrl"
            alt=""
            class="w-full h-full object-contain"
            loading="lazy"
        >
      </div>
      <!-- price -->
      <div class="w-full h-8 flex mt-4 justify-center bg-[#FFF8F5] items-center rounded-[16px]">
        <span class="text-red-500 font-bold">￥{{ goods[0].price }}</span>
      </div>
    </div>
    <!-- 多个商品按轮播展示 -->
    <el-carousel
        v-else
        style="height: calc(100% - 30px)"
        indicator-position="none"
    >
      <el-carousel-item v-for="item in goods" :key="item">
        <div
            class="w-full h-full flex flex-col"
        >
          <!-- img -->
          <div
              style="height: calc(100% - 48px)"
              class="w-full flex"
          >
            <img
                :src="item.imgUrl"
                alt=""
                class="w-full h-full object-contain"
                loading="lazy"
            >
          </div>
          <!-- price -->
          <div class="w-full h-8 flex mt-4 justify-center bg-[#FFF8F5] items-center rounded-[16px]">
            <span class="text-red-500 font-bold">￥{{ item.price }}</span>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
.sale-fit {
  border: 1px solid #ebeef5;
  box-sizing: border-box;
  padding: 16px;
}
:deep(.el-carousel__container) {
  width: 100%;
  height: 100%;
}
</style>
