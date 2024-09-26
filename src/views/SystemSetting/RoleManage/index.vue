<script setup lang="ts">
import { ref } from "vue";
import TheHead from "@/components/TheHead.vue";
import GeneratePagination from "@/components/GeneratePagination.vue";
import {$message} from "@/componsables/element-plus";



/** ===== 表头表单初始化-start ===== **/
const searchValue = ref<string>('')
function handleClear() {
  searchValue.value = ''
}

function handleSearch() {
  if (searchValue.value) {
    $message({
      type: 'success',
      message: '搜索成功'
    })
  } else {
    $message({
      type: 'warning',
      message: '请输入搜索内容'
    })
  }
}
/** ===== 表头表单初始化-end ===== **/

/** ===== 表格初始化-start ===== **/
const fakeLables = [
  {
    label: 'ID',
    prop: 'id',
  },
  {
    label: '角色名称',
    prop: 'roleName',
  },
  {
    label: '备注',
    prop: 'remark',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  }
]
/** ===== 表格初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <!-- the head -->
    <TheHead
        title="角色管理"
    >
      <div class="w-full h-auto flex justify-between">
        <el-form-item label="查询">
          <el-input
              v-model="searchValue"
              clearable
              prefix-icon="Search"
              placeholder="请输入搜索内容"
              style="width: 200px"
              class="mr-4"
              @clear="handleClear"
              @keydown.enter="handleSearch"
          />
          <el-button @click="handleSearch" class="main_primary_btn">查询</el-button>
        </el-form-item>
        <el-button class="main_success_btn">添加</el-button>
      </div>
    </TheHead>
    <!-- the table part -->
    <div
        style="height: calc(100% - 116px)"
        class="w-full flex flex-col mt-4"
    >
      <el-card class="is-never-shadow w-full h-full flex flex-col p-4">
        <!-- table body -->
        <div
            style="height: calc(100% - 40px)"
            class="w-full flex flex-col"
        >
          <el-table
              fit
              stripe
              class="w-full h-full"
              :header-cell-style="{background: '#E5EEFF', color: '#303133', textAlign: 'center'}"
          >
            <el-table-column
                v-for="(item, index) in fakeLables"
                :key="index"
                :label="item.label"
                :prop="item.prop"
                width="200"
            />
            <el-table-column
                label="操作"
            />
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
</style>
