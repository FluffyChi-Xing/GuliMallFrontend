<script setup lang="ts">
import { ref } from "vue";
import TheHead from "@/components/TheHead.vue";
import {$message} from "@/componsables/element-plus";
import GeneratePagination from "@/components/GeneratePagination.vue";
import type {ArgumentTypes} from "@/componsables/apis/ArgumentTypes";



const title = ref<string>('属性分组')
/** ===== 表头表单-start ====== **/
const argument = ref<string>('')
const tableLabels = ref<ArgumentTypes.categoryLabelTypes[]>([
  {
    label: '序号',
    prop: 'id',
    width: '100'
  },
  {
    label: '品牌名',
    prop: 'name',
    width: '200'
  },
  {
    label: '介绍',
    prop: 'desc',
    width: '200',
    overflows: true
  },
  {
    label: '检索首字母',
    prop: 'initial',
    width: '100'
  },
  {
    label: '排序',
    prop: 'sort',
    width: '200'
  }
])

function handleClear() {
  argument.value = ''
}

function handleSearch() {
  if (!argument.value) {
    $message({
      message: '请输入属性',
      type: 'warning'
    })
  }
}

// 暂时数据
const tableData = ref<ArgumentTypes.categoryDataTypes[]>([
  {
    id: '1',
    name: '华为',
    logo: 'https://www-file.huawei.com/-/media/corporate/images/home/logo/huawei_logo.png',
    desc: '全球领先的移动通信制造商',
    status: true,
    initial: 'H',
    sort: '1'
  },
  {
    id: '2',
    name: '小米',
    logo: 'https://www.logobiaozhi.com/upLoad/image/20230909/16942481297445784.jpg',
    desc: '为发烧而生',
    status: false,
    initial: 'X',
    sort: '2'
  }
])
/** ===== 表头表单-end ====== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <!-- the header -->
    <TheHead
        :title="title"
    >
      <div class="w-full h-10 flex justify-between">
        <el-form-item>
          <div class="w-auto h-full flex items-center">
            <el-input
                v-model="argument"
                placeholder="请输入属性..."
                clearable
                style="width: 200px;"
                class="mr-4"
                @clear="handleClear"
                @keydown.enter="handleSearch"
            />
            <el-button @click="handleSearch" class="main_primary_btn" icon="Search">搜索</el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="w-auto h-full flex items-center">
            <el-button icon="Plus" class="main_success_btn">新增</el-button>
            <el-button icon="Refresh" class="main_success_plain_btn">刷新</el-button>
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
        <!-- table body -->
        <div
            style="height: calc(100% - 56px);"
            class="w-full flex flex-col mb-4"
        >
          <el-table
              :data="tableData"
              stripe
              fit
              class="w-full h-full"
              :header-cell-style="{background: '#E5EEFF', color: '#303133', textAlign: 'center'}"
          >
            <el-table-column
                v-for="(item, index) in tableLabels"
                :key="index"
                :label="item.label"
                :prop="item.prop"
                :width="item.width"
                :show-overflow-tooltip="item.overflows"
            />
            <!-- 品牌logo -->
            <el-table-column
                label="品牌logo"
                prop="logo"
                width="250"
            >
              <template #default="{ row }">
                <img
                    :src="row.logo"
                    alt=""
                    loading="lazy"
                    class="w-full h-20 flex object-contain"
                    style="height: 80px"
                    @error="e => e.target.src = require('@/assets/img/error-img.png')"
                >
              </template>
            </el-table-column>
            <!-- 显示状态 -->
            <el-table-column
                label="显示状态"
                prop="status"
                width="250"
            >
              <template #default="{ row }">
                <div class="w-full h-full flex items-center justify-center">
                  <el-switch
                      v-model="row.status"
                  />
                </div>
              </template>
            </el-table-column>
            <!-- 操作 -->
            <el-table-column
                label="操作"
                width="250"
                :fixed="'right'"
            >
              <div class="w-full h-full flex items-center">
                <el-button type="text" size="small" class="mr-2">关联分类</el-button>
                <el-button type="text" size="small" class="mr-2">修改</el-button>
                <el-button type="text" style="color: theme('colos.denger')" size="small">删除</el-button>
              </div>
            </el-table-column>
            <template #empty>
              <el-empty
                  description="暂无数据"
              />
            </template>
          </el-table>
        </div>
        <!-- generate pagination -->
        <div class="w-full h-10 flex items-center justify-end">
          <GeneratePagination />
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
:deep(.el-form-item) {
  margin: 0;
}
:deep(.el-card__body) {
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>
