<script setup lang="ts">
import * as echarts from 'echarts'
import {onMounted, ref} from 'vue'

/** ===== 订单图表初始化-start ===== **/
const chart = ref()
const colors = ['#5470C6', '#91CC75', '#EE6666'];

function initCharts() {
  const charts = echarts.init(chart.value)
  charts.setOption(setOptions())
}

function setOptions() {
  return  {
    color: colors,
    title: {
      text: '订单统计图'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    grid: {
      right: '5%',
      bottom: '10%'
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['订单数', '订单金额']
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        // prettier-ignore
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '订单数',
        position: 'right',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[0]
          }
        },
        axisLabel: {
          formatter: '{value} ml'
        }
      },
      {
        type: 'value',
        name: 'Precipitation',
        position: 'right',
        alignTicks: true,
        offset: 80,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[1]
          }
        },
        axisLabel: {
          formatter: '{value} ml'
        }
      },
      {
        type: 'value',
        name: '金额',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
        },
        axisLabel: {
          formatter: '{value} 元'
        }
      }
    ],
    series: [
      {
        name: '订单金额',
        type: 'bar',
        yAxisIndex: 1,
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ]
      },
      {
        name: '订单数',
        type: 'line',
        yAxisIndex: 2,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ]
  };
}
onMounted(() => {
  initCharts()
})
/** ===== 订单图表初始化-end ===== **/
</script>

<template>
  <div ref="chart" class="w-full h-full flex" />
</template>

<style scoped>

</style>
