<script setup lang="ts">
import { ref } from "vue";
import TheHead from "@/components/TheHead.vue";
import type { GoodsMaintenance } from '@/componsables/apis/GoodsMaintenance'
import {$message} from "@/componsables/element-plus";
import GeneratePagination from "@/components/GeneratePagination.vue";




/** ===== 表头筛选表单-start ===== **/
const category = ref<string>('1') // 分类
const brand = ref<string>('1') // 品牌
const status = ref<string>('1') // 状态
const searchInput = ref<string>('') // 搜索关键字
// 分类 options
const spuList = [
  {
    label: '分类1',
    value: '1'
  },
  {
    label: '分类2',
    value: '2'
  },
  {
    label: '分类3',
    value: '3'
  }
]
const cateOption = ref<GoodsMaintenance.spuFilterTypes[]>(spuList)
// 品牌 options

const brandList = [
  {
    label: '小米',
    value: '1'
  },
  {
    label: '华为',
    value: '2'
  },
  {
    label: '苹果',
    value: '3'
  }
]

const brandOptions = ref<GoodsMaintenance.spuFilterTypes[]>(brandList)
// 状态 options

const statusList = [
  {
    label: '上架',
    value: '1'
  },
  {
    label: '下架',
    value: '2'
  }
]

const statusOptions = ref<GoodsMaintenance.spuFilterTypes[]>(statusList)

function handleClean() {
  searchInput.value = ''
}

function handleSearch() {
  if (searchInput.value) {
    console.log('searchInput.value', searchInput.value)
  } else {
    $message({
      type: 'warning',
      message: '请输入关键字'
    })
  }
}
/** ===== 表头筛选表单-end ===== **/


/** ===== 表格数据-start ===== **/
const labels = [
  {
    label: 'id',
    prop: 'id',
    width: '100'
  },
  {
    label: '品名',
    prop: 'name',
    width: '200',
    overflow: true
  },
  {
    label: '描述',
    prop: 'description',
    width: '200',
    overflow: true
  },
  {
    label: '重量',
    prop: 'weight',
    width: '200'
  },
  {
    label: '创建时间',
    prop: 'create_time',
    width: '200',
    overflow: true
  },
  {
    label: '更新时间',
    prop: 'update_time',
    width: '200',
    overflow: true
  }
]
// 暂时表格数据
const dataList = [
  {
    id: '1',
    name: '小米11',
    description: '小米11 8+128G',
    weight: '200g',
    create_time: new Date(),
    update_time: new Date(),
    status: true
  },
  {
    id: '2',
    name: '华为P40',
    description: '华为P40 8+128G',
    weight: '200g',
    create_time: new Date(),
    update_time: new Date(),
    status: false
  },
  {
    id: '3',
    name: '苹果12',
    description: '苹果12 8+128G',
    weight: '200g',
    create_time: new Date(),
    update_time: new Date(),
    status: true
  }
]
const tableLabels = ref<GoodsMaintenance.tableDataTypes[]>(labels)
const tableData = ref<GoodsMaintenance.tableData[]>(dataList);
/** ===== 表格数据-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <el-scrollbar
        class="w-full h-full"
    >
      <!-- the header component -->
      <TheHead
          title="SPU管理"
          isShow
      >
        <!-- table filter form -->
        <div class="w-full h-10 grid grid-cols-4 gap-4 items-center">
          <el-form-item
              label="分类"
              class="w-full h-full flex"
          >
            <el-select
                v-model="category"
                style="width: 200px"
                placeholder="请选择分类"
                class="ml-2"
            >
              <el-option
                  v-for="(item, index) in cateOption"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item
              label="品牌"
              class="w-full h-full flex"
          >
            <el-select
                v-model="brand"
                style="width: 200px"
                placeholder="请选择品牌"
                class="ml-2"
            >
              <el-option
                  v-for="(item, index) in brandOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item
              label="状态"
              class="w-full h-full flex"
          >
            <el-select
                v-model="status"
                style="width: 200px"
                placeholder="请选择状态"
                class="ml-2"
            >
              <el-option
                  v-for="(item, index) in statusOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item
              label="检索"
              class="w-full h-full flex"
          >
            <div
                class="w-full h-full"
            >
              <el-input
                  v-model="searchInput"
                  clearable
                  placeholder="请输入关键字"
                  prefix-icon="Search"
                  style="width: 140px"
                  class="ml-2"
                  @clear="handleClean"
                  @keydown.enter="handleSearch"
              />
              <el-button class="main_primary_btn ml-2" icon="Search" @click="handleSearch">搜索</el-button>
            </div>
          </el-form-item>
        </div>
      </TheHead>
      <!-- data table -->
      <div class="w-full h-[500px] mt-4">
        <el-card class="w-full h-full flex flex-col is-never-shadow">
          <div class="w-full h-full flex flex-col p-4">
            <!-- table body -->
            <div
                style="height: calc(100% - 40px)"
                class="w-full flex"
            >
              <el-table
                  :data="tableData"
                  fit
                  stripe
                  class="w-full h-full"
                  :header-cell-style="{background: '#E5EEFF', color: '#303133', textAlign: 'center'}"
              >
                <el-table-column
                    v-for="(item, index) in tableLabels"
                    :key="index"
                    :label="item.label"
                    :width="item.width"
                    :prop="item.prop"
                    :show-overflow-tooltip="item.overflow"
                />
                <el-table-column
                    label="上架状态"
                    prop="status"
                    width="200"
                >
                  <template #default="{ row }">
                    <div class="w-full h-full flex justify-center">
                      <el-tag
                          :type="row?.status ? 'success' : 'danger'"
                      >
                        {{ row?.status ? '上架' : '下架' }}
                      </el-tag>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    :fixed="'right'"
                    width="200"
                >
                  <div class="w-full h-full flex justify-center">
                    <el-button
                        type="text"
                        size="small"
                    >
                      规格
                    </el-button>
                  </div>
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
          </div>
        </el-card>
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
:deep(.el-form-item__label) {
  display: flex;
  align-items: center;
}
:deep(.el-form-item__content) {
  display: flex;
  align-items: center;
}
:deep(.el-form-item) {
  margin-bottom: 0;
}
:deep(.el-card__body) {
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
