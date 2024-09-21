<script setup lang="ts">
import {ref, onMounted} from "vue";
import {CaretBottom, CaretTop} from "@element-plus/icons-vue";


/**
 * @description KanBan component
 * @param title {string} title 看板标题
 * @param account {string} account 看板数字
 * @param yesterday {string} yesterday 昨日数据
 * @param statistics {string} statistics 环比数据
 * @param status {boolean} status 环比状态
 * @param desc {string} desc 描述
 * @param total {string} total 总计
 */
const props = withDefaults(defineProps<{
  title?: string;
  account?: string;
  yesterday?: string;
  statistics?: string;
  status?: boolean;
  desc?: string;
  total?: string;
}>(), {
  title: "KanBan",
  account: '100.0',
  yesterday: '99.0',
  statistics: '-78%',
  status: false,
  desc: '本月销售额',
  total: '1000.0元'
})

const trend = ref<string>('green')
const trendIcon = ref<any>(CaretBottom);

function initTrend() {
  if (props.status) {
    trend.value = 'green';
    trendIcon.value = CaretTop
  } else {
    trend.value = 'red';
    trendIcon.value = CaretBottom
  }
}
onMounted(() => {
  initTrend()
})
</script>

<template>
  <div class="w-full h-[200px] flex">
    <el-card class="w-full h-full is-never-shadow">
      <div class="w-full h-full flex flex-col p-4">
        <!-- head -->
        <div class="w-full h-[30px] flex justify-between">
          <span>{{ title }}</span>
          <el-tag>今日</el-tag>
        </div>
        <!-- number info -->
        <div class="w-full h-10 flex overflow-hidden whitespace-nowrap text-ellipsis">
          <span class="text-[32px]">{{ account }}</span>
        </div>
        <!-- change account -->
        <div class="w-full h-10 grid grid-cols-2 gap-2">
          <div class="w-full h-full flex items-center">
            <span class="text-[15px]">昨日</span>
            <span class="text-[15px] ml-1 whitespace-nowrap overflow-hidden text-ellipsis">{{ yesterday }}</span>
          </div>
          <div class="w-full h-full flex items-center">
            <span class="text-[15px]">日环比</span>
            <span class="text-[15px] ml-1 whitespace-nowrap overflow-hidden text-ellipsis">{{ statistics }}</span>
            <span class="w-auto h-full flex items-center">
              <el-icon
                  :style="{ color: trend }"
              >
                <component :is="trendIcon" />
              </el-icon>
            </span>
          </div>
        </div>
        <el-divider />
        <!-- footer -->
        <div class="w-full h-10 flex justify-between">
          <div class="h-full flex items-center text-[#999999] text-[15px]">{{ desc }}</div>
          <div class="h-full flex items-center text-[#999999] text-[15px]">{{ total }}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
:deep(.el-card__body) {
  padding: 0;
  height: 100%;
  width: 100%;
}
:deep(.el-divider) {
  margin-top: auto;
  margin-bottom: 0;
}
</style>
