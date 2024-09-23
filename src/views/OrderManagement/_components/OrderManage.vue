<script setup lang="ts">
import { ref } from "vue";
import TheHead from "@/components/TheHead.vue";
import type {layoutTypes} from "@/componsables/apis/layoutTypes";
import GeneratePagination from "@/components/GeneratePagination.vue";
import type {GoodsMaintenance} from "@/componsables/apis/GoodsMaintenance";


const title = ref<string>('订单管理')

/** ===== 表头表单-start ===== **/
const orderType = ref<string>('1') // 订单类型
const orderTypeOption = ref<layoutTypes.generateSelectTypes[]>([
  {
    label: '全部',
    value: '1'
  },
  {
    label: '普通订单',
    value: '2'
  },
  {
    label: '团购订单',
    value: '3'
  }
])
const searchValue = ref<string>('')
const payType = ref<string>('1') // 支付方式
const payTypeOption = ref<layoutTypes.generateSelectTypes[]>([
  {
    label: '全部',
    value: '1'
  },
  {
    label: '微信支付',
    value: '2'
  },
  {
    label: '支付宝支付',
    value: '3'
  }
])
/** ===== 表头表单-end ===== **/

/** ===== 表格数据-start ===== **/
const tableLabel = ref<GoodsMaintenance.tableDataTypes[]>([
  {
    label: '订单号',
    prop: 'index',
    width: '200'
  },
  {
    label: '商品信息',
    prop: 'info',
    width: '300'
  },
  {
    label: '用户信息',
    prop: 'user',
    width: '200'
  },
  {
    label: '支付情况',
    prop: 'status',
    width: '200'
  },
  {
    label: '支付方式',
    prop: 'payType',
    width: '200'
  },
  {
    label: '支付时间',
    prop: 'time',
    width: '200'
  },
  {
    label: '订单状态',
    prop: 'orderStatus',
    width: '200'
  }
])
/** ===== 表格数据-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <!-- the head -->
    <TheHead
        :title="title"
    >
      <!-- 表头表单 -->
      <div class="w-full h-10 grid grid-cols-3 gap-4">
        <el-form-item label="订单类型">
          <el-select
              v-model="orderType"
              placeholder="请选择订单类型"
              style="width: 200px;"
          >
            <el-option
                v-for="(item, index) in orderTypeOption"
                :key="index"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="支付方式">
          <el-select
              v-model="payType"
              placeholder="请选择支付方式"
              style="width: 200px;"
          >
            <el-option
                v-for="(item, index) in payTypeOption"
                :key="index"
                :value="item.value"
                :label="item.label"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="搜索">
          <div class="w-full h-full flex items-center">
            <el-input
                v-model="searchValue"
                clearable
                style="width: 200px;"
                placeholder="请输入关键字..."
                prefix-icon="Search"
                class="mr-4"
            />
            <el-button class="main_primary_btn">查询</el-button>
          </div>
        </el-form-item>
      </div>
    </TheHead>
    <!-- table area -->
    <div
        style="height: calc(100% - 116px);"
        class="w-full flex flex-col mt-4"
    >
      <el-card class="w-full h-full flex is-never-shadow p-4">
        <el-tabs class="w-full">
          <el-tab-pane label="全部" />
          <el-tab-pane label="待支付(2134)" />
          <el-tab-pane label="待发货(324)" />
        </el-tabs>
        <!-- table body -->
        <div
            style="height: calc(100% - 94px);"
            class="w-full flex flex-col bg-red-500"
        >
          <el-table
              fit
              stripe
              class="w-full h-full"
              :header-cell-style="{background: '#E5EEFF', color: '#303133', textAlign: 'center'}"
          >
            <el-table-column
                v-for="(item, index) in tableLabel"
                :key="index"
                :label="item.label"
                :prop="item.prop"
                :width="item.width"
            />
            <el-table-column
                label="操作"
                :fixed="'right'"
                width="200"
            >
              <el-button type="text" size="small">核销</el-button>
            </el-table-column>
            <template #empty>
              <el-empty
                  description="暂无数据"
              />
            </template>
          </el-table>
        </div>
        <!-- pagination -->
        <div class="w-full h-10 flex justify-end">
          <GeneratePagination />
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
:deep(.el-card__body) {
  padding: 0;
  width: 100%;
  height: 100%;
}
:deep(.el-form-item) {
  margin-bottom: 0;
}
:deep(.el-form-item__label) {
  height: 40px;
  line-height: 40px;
}
</style>
