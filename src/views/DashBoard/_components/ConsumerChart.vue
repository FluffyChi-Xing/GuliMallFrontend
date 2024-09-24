<script setup lang="ts">
import {onMounted, ref} from 'vue'
import * as echarts from 'echarts/core'


/** ===== 消费统计图初始化-start ===== **/
const consumerChart = ref()

function initChart() {
  return echarts.init(consumerChart.value);
}
function handleOption() {
  const option = {
    title: {
      text: '购买用户统计',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      right: 'right'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '80%',
        data: [
          { value: 1048, name: '未消费用户' },
          { value: 735, name: '消费一次用户' },
          { value: 280, name: '留存用户' },
          { value: 184, name: '游客' },
          { value: 85, name: '回流用户' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  initChart().setOption(option);
}

onMounted(() => {
  handleOption()
})
/** ===== 消费统计图初始化-end ===== **/
</script>

<template>
  <div
      ref="consumerChart"
      class="w-full h-full flex flex-col p-4"
  />
</template>

<style scoped>

</style>
