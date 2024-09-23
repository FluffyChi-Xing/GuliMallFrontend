<script setup lang="ts">
import { ref } from "vue";
import TheHead from "@/components/TheHead.vue";
import {$message} from "@/componsables/element-plus";
import GeneratePagination from "@/components/GeneratePagination.vue";
import GenerateTree from "@/components/GenerateTree.vue";
import type {GoodsMaintenance} from "@/componsables/apis/GoodsMaintenance";
import GenerateDialog from "@/components/GenerateDialog.vue";



const title = ref<string>('规格参数')

/** ===== 表头表单-start ===== **/
const searchValue = ref<string>('')

function handleSearch() {
  if (!searchValue.value) {
    $message({
      type: "warning",
      message: "请输入参数名"
    })
  }
}

function handleClear() {
  searchValue.value = ''
}
/** ===== 表头表单-end ===== **/

/** ===== 树形菜单初始化-start ===== **/
function handleNodeChange(index: string) {
  console.log(index)
}
/** ===== 树形菜单初始化-end ===== **/

/** ===== 表格数据-start ===== **/
const tableLabels = ref<GoodsMaintenance.tableDataTypes[]>([
  {
    label: '序号',
    prop: 'index',
    width: '100'
  },
  {
    label: '属性名',
    prop: 'name',
    width: '200'
  },
  {
    label: '可检索',
    prop: 'search',
    width: '100'
  },
  {
    label: '图标',
    prop: 'icon',
  },
  {
    label: '是否启用',
    prop: 'status',
    width: '200'
  },
  {
    label: '创建时间',
    prop: 'time',
    width: '200'
  }
])

// TODO: 泛型不能使用通用表格数据类型，需要添加专用数据类型
const tableData = ref<GoodsMaintenance.tableData[]>([
  {
    index: '1',
    name: '入网型号',
    search: '是',
    icon: 'icon',
    status: '是',
    time: '2021-09-01 12:00:00',
    type: 'string',
    value: '1,2,3'
  },
  {
    index: '2',
    name: '入网型号',
    search: '是',
    icon: 'icon',
    status: '是',
    time: '2021-09-01 12:00:00',
    type: 'string',
    value: '1,2,3'
  },
  {
    index: '3',
    name: '入网型号',
    search: '是',
    icon: 'icon',
    status: '是',
    time: '2021-09-01 12:00:00',
    type: 'string',
    value: '1,2,3'
  },
  {
    index: '4',
    name: '入网型号',
    search: '是',
    icon: 'icon',
    status: '是',
    time: '2021-09-01 12:00:00',
    type: 'string',
    value: '1,2,3'
  }
])
/** ===== 表格数据-end ===== **/

/** ===== 新增弹窗初始化-start ===== **/
const dialogVisible = ref<boolean>(false)

function handleOpen() {
  dialogVisible.value = true
}

function handleConfirm(index: boolean) {
  if (index) {
    dialogVisible.value = false
  }
}
/** ===== 新增弹窗初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <!-- the head -->
    <TheHead
        :title="title"
    >
      <div class="w-full h-10 flex justify-between">
        <el-form-item
            label="参数名"
        >
          <el-input
              v-model="searchValue"
              clearable
              placeholder="请输入参数名"
              style="width: 200px;"
              class="mr-4"
              @keydown.enter="handleSearch"
              @clear="handleClear"
          />
          <el-button class="main_primary_btn" @click="handleSearch">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="main_success_btn" @click="handleOpen">新增</el-button>
        </el-form-item>
      </div>
    </TheHead>
    <!-- table area -->
    <div
        style="height: calc(100% - 116px)"
        class="w-full flex flex-col mt-4"
    >
      <el-card class="w-full h-full flex p-4 is-never-shadow">
        <div class="w-full h-full grid grid-cols-4 gap-4">
          <!-- left tree area -->
          <div class="w-full h-full flex flex-col">
            <el-scrollbar class="w-full h-full flex-col">
              <GenerateTree
                  @selectNode="handleNodeChange"
              />
            </el-scrollbar>
          </div>
          <!-- right table area -->
          <div class="col-span-3 w-full h-full flex flex-col">
            <!-- table body -->
            <div
                style="height: calc(100% - 40px);"
                class="w-full flex flex-col"
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
                    :prop="item.prop"
                    :width="item.width"
                />
                <el-table-column
                    label="值类型"
                    prop="type"
                    width="200"
                >
                  <template #default="{ row }">
                    <el-tag type="success">{{ row?.type }}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                    label="可选值"
                    prop="value"
                    width="200"
                >
                  <template #default="{ row }">
                    <el-tag type="primary">{{ row?.value }}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    :fixed="'right'"
                    width="200"
                >
                  <el-button size="small" type="text" class="mr-4">修改</el-button>
                  <el-button size="small" type="text">删除</el-button>
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
        </div>
      </el-card>
    </div>
  </div>
  <GenerateDialog
      v-model:visible="dialogVisible"
      @confirm="handleConfirm"
  >
    <span class="text-red-500">你确定要新增吗 ?</span>
  </GenerateDialog>
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
:deep(.el-form-item__content) {
  height: 40px;
  display: flex;
  align-items: center;
}
</style>
