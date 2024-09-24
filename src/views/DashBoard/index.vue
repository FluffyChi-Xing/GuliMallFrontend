<script setup lang="ts">
import { ref } from "vue";
import KanBan from "@/views/DashBoard/_components/KanBan.vue";
import {layoutTypes} from "@/componsables/apis/layoutTypes";
import QuickRouter from "@/views/DashBoard/_components/QuickRouter.vue";
import TheFooter from "@/components/TheFooter.vue";
import OrderChart from "@/views/DashBoard/_components/OrderChart.vue";
import UserChart from "@/views/DashBoard/_components/UserChart.vue";
import ConsumerChart from "@/views/DashBoard/_components/ConsumerChart.vue";


/** ===== 看板初始化-start ===== **/
const kanBanList = [
  {
    title: '销售额',
    account: '78.3',
    yesterday: '12098.5',
    statistics: '-99.6%',
    status: false,
    desc: '本月销售额',
    total: '12098.5元',
  },
  {
    title: '用户访问量',
    account: '43',
    yesterday: '435',
    statistics: '-69.6%',
    status: false,
    desc: '本月访问量',
    total: '6759Pv',
  },
  {
    title: '订单量',
    account: '34',
    yesterday: '23',
    statistics: '+23%',
    status: true,
    desc: '本月订单量',
    total: '123单',
  },
  {
    title: '新增用户',
    account: '56',
    yesterday: '34',
    statistics: '+45%',
    status: true,
    desc: '本月新增用户',
    total: '1345人',
  }
]
const kanbans = ref<layoutTypes.KanbanTypes[]>(kanBanList)
/** ===== 看板初始化-end ===== **/

/** ===== 快捷入口初始化-start ===== **/
const quickStart = [
  {
    label: '用户管理',
    icon: 'yonghu'
  },
  {
    label: '系统设置',
    icon: 'xitongguanli'
  },
  {
    label: '商品',
    icon: 'shangpin'
  },
  {
    label: '订单管理',
    icon: 'dingdan'
  },
  {
    label: '短信配置',
    icon: 'duanxin'
  },
  {
    label: '文章管理',
    icon: 'wenzhang'
  },
  {
    label: '分销管理',
    icon: 'weifenxiao'
  },
  {
    label: '优惠券',
    icon: 'youhuiquan'
  }
]
const quickList = ref<layoutTypes.QuickTypes[]>(quickStart)
/** ===== 快捷入口初始化-end ===== **/

/** ===== 统计图初始化A-start ===== **/
interface selectTypes {
  value: string;
  label: string;
}
const selectData = ref<string>('1')
const selectList = ref<selectTypes[]>([
  {
    value: '1',
    label: '30天'
  },
  {
    value: '2',
    label: '周'
  },
  {
    value: '3',
    label: '月'
  },
  {
    value: '4',
    label: '年'
  }
])
/** ===== 统计图初始化A-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col overflow-y-auto">
    <el-scrollbar class="w-full h-full">
      <!-- kanban -->
      <div class="w-full h-[200px] grid grid-cols-4 gap-4">
        <KanBan
            v-for="(item, index) in kanbans"
            :key="index"
            :desc="item.desc"
            :title="item.title"
            :total="item.total"
            :account="item.account"
            :statistics="item.statistics"
            :status="item.status"
            :yesterday="item.yesterday"
        />
      </div>
      <!-- 快捷入口 -->
      <div class="w-full h-[150px] grid grid-cols-8 gap-4 mt-4">
        <QuickRouter
            v-for="(item, index) in quickList"
            :key="index"
            :icon="item.icon"
            :label="item.label"
        />
      </div>
      <!-- 统计图 A -->
      <div class="w-full h-[300px] flex mt-4">
        <el-card class="w-full h-full is-never-shadow p-4">
          <!-- selector -->
          <div class="w-full h-10 flex justify-end">
            <el-radio-group
                v-model="selectData"
            >
              <el-radio-button
                  v-for="(item, index) in selectList"
                  :key="index"
                  :value="item.value"
              >
                {{ item.label }}
              </el-radio-button>
            </el-radio-group>
          </div>
          <!-- charts part -->
          <div style="height: calc(100% - 40px)" class="w-full flex">
            <OrderChart />
          </div>
        </el-card>
      </div>
      <!-- 统计图 B -->
      <div class="w-full h-[300px] grid grid-cols-2 gap-4 my-4">
        <el-card class="w-full h-full is-never-shadow">
          <UserChart />
        </el-card>
        <el-card class="w-full h-full is-never-shadow">
          <ConsumerChart />
        </el-card>
      </div>
      <!-- the footer -->
      <TheFooter
          :is-show="true"
      />
    </el-scrollbar>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
:deep(.el-card__body) {
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
