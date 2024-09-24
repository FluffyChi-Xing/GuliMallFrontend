<script setup lang="ts">
import {onMounted, ref} from 'vue'
import * as echarts from 'echarts/core'


const userChart = ref()

/** ===== 用户统计图初始化-start ===== **/
// 初始化图表
function initChart() {
   return echarts.init(userChart.value);
}

// 绘制图表
function handleOption() {
  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {},
        smooth: true
      }
    ],
    title: {
      text: '用户统计'
    }
  };
  initChart().setOption(option);
}

onMounted(() => {
  handleOption()
})
/** ===== 用户统计图初始化-end ===== **/
</script>

<template>
  <div
      ref="userChart"
      class="w-full h-full flex flex-col p-4"
  />
</template>

<style scoped>

</style>
