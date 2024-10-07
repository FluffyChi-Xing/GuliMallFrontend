<script setup lang="ts">
import { ref } from 'vue'
import TheHead from "@/components/TheHead.vue";
import SideTabs from "@/views/Fitment/DataBind/_components/SideTabs.vue";
import HomeSwiper from "@/views/Fitment/DataBind/_components/HomeSwiper.vue";
import HomeSwiperFit from "@/views/Fitment/DataBind/_components/HomeSwiperFit.vue";
import HomeSale from "@/views/Fitment/DataBind/_components/HomeSale.vue";
import HomeSaleFit from "@/views/Fitment/DataBind/_components/HomeSaleFit.vue";
import {FitmentTypes} from "@/componsables/apis/fitmentTypes";



/** ===== 侧边栏初始化-start ===== **/
const currentTab = ref<string>('0')
const componentsList = ref<any[]>([HomeSwiper, HomeSale])
const currentComponent = ref<any>(componentsList.value[0])
const tabList = ref<string[]>([
  '首页轮播图',
  '首页优惠推荐',
  '首页banner位广告'
])
function handleChangeTab(index: string) {
  currentTab.value = index
  currentComponent.value = componentsList.value[Number(index)]
}
/** ===== 侧边栏初始化-end ===== **/

/** ===== 首页轮播图配置-start ===== **/
const interval = ref<number>(1000) // 轮播图延时
const blur = ref<boolean>(false) // 轮播图动态模糊
const arrow = ref<string>('hover') // 轮播图箭头
const indicator = ref<string>('outside') // 轮播图指示器
const imgUrl = ref<string[]>([
  'src/assets/img/login-sw-2.png',
  'src/assets/img/login-bg@2.png'
])

function changeBlur(index: boolean) {
  blur.value = index
}

function changeInterval(index: number) {
  interval.value = index
}

function fitArrow(index: string) {
  arrow.value = index
}

function changeIndicator(index: string) {
  indicator.value = index
}
/** ===== 首页轮播图配置-end ===== **/

/** ===== 首页优惠推荐初始化-start ===== **/
const title = ref<string>('谷粒秒杀')
const hotTag = ref<string>('1元抢大牌')
const goods = ref<FitmentTypes.homeSalesTypes[]>([
  {
    index: 0,
    price: 100,
    imgUrl: 'https://picsum.photos/200/300',
  }
])
/** ===== 首页优惠推荐初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <TheHead
        :is-show="true"
        title="数据配置"
    >
      <div class="w-full h-auto flex justify-end">
        <el-button class="main_primary_btn">保存</el-button>
      </div>
    </TheHead>
    <div
        style="height: calc(100% - 106px)"
        class="w-full flex mt-4"
    >
      <el-card class="w-full h-full flex flex-col is-never-shadow">
        <div class="w-full h-full grid grid-cols-5 gap-4">
          <!-- side tab pane -->
          <div class="col-span-1 w-full h-full flex">
            <SideTabs
                :tab-list="tabList"
                @tab-change="handleChangeTab"
            />
          </div>
          <!-- show area -->
          <div class="col-span-2 w-full h-full flex flex-col items-center">
            <component
                :is="currentComponent"
                :imgList="imgUrl"
                :blur="blur"
                :interval="interval"
                :arrow="arrow"
                :indicator="indicator"
                :title="title"
                :hotTag="hotTag"
                :goods="goods"
            />
          </div>
          <!-- data bind area -->
          <div class="col-span-2 w-full h-full flex flex-col p-4">
            <!-- title -->
            <div class="w-full h-auto flex relative fitment-title">
              {{ tabList[Number(currentTab)] }} 设置
            </div>
            <!-- tooltip -->
            <div class="w-full h-auto text-[10px] mt-2 text-gray-500">
              建议尺寸：690 * 240px，拖拽图片可调整图片顺序哦，最多添加五张
            </div>
            <!-- form -->
            <!-- 首页轮播图配置 -->
            <HomeSwiperFit
                v-if="currentTab === '0'"
                :img-list="imgUrl"
                :arrow="arrow"
                :indicator="indicator"
                @change-blur="changeBlur"
                @change-interval="changeInterval"
                @change-arrow="fitArrow"
                @change-indicator="changeIndicator"
            />
            <!-- 首页优惠推荐配置 -->
            <HomeSaleFit
                v-if="currentTab === '1'"
                :title="title"
                :hotTag="hotTag"
                :goods="goods"
            />
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
:deep(.el-card__body) {
  width: 100%;
  height: 100%;
}
.fitment-title {
  font-weight: bold;
}

.fitment-title::before {
  content: "";
  width: 2px;
  height: 100%;
  background-color: theme('colors.primary');
  margin-right: 4px;
}
</style>
