<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {layoutTypes} from "@/componsables/apis/layoutTypes";
import {ArrowDown, Bell, Expand, Fold, FullScreen, Refresh, Search} from "@element-plus/icons-vue";
import FunctionButton from "@/layout/_components/FunctionButton.vue";
import {$store} from "@/componsables/store";
import GenerateDialog from "@/components/GenerateDialog.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";


/** ===== 功能按钮初始化-start ===== **/
function refresh() {
  window.location.reload()
}
const funList = [
  {
    content: '刷新',
    icon: Refresh,
    func: () => refresh()
  },
  {
    content: '搜索',
    icon: Search,
    func: () => handleOpen()
  },
  {
    content: '消息',
    icon: Bell
  },
  {
    content: '全屏',
    icon: FullScreen
  }
]
const funcList = ref<layoutTypes.functionButtonTypes[]>(funList)
/** ===== 功能按钮初始化-end ===== **/

/** ===== 下拉菜单-start ===== **/
// TODO 下拉菜单
/** ===== 下拉菜单-end ===== **/

/** ===== 折叠菜单-start ===== **/
const pageStore = $store.pageStore()
const icon = ref<any>(Fold)
// function handleCollapse() {
//   pageStore.isCollapse = !pageStore.isCollapse
//   if (pageStore.isCollapse) {
//     icon.value = Fold
//   } else {
//     icon.value = Expand
//   }
// }

function checkIcon() {
  if (pageStore.isCollapse) {
    icon.value = Fold
  } else {
    icon.value = Expand
  }
}

onMounted(() => {
  checkIcon()
})
/** ===== 折叠菜单-end ===== **/

/** ===== 搜索模态框-start ===== **/
const dialogVisible = ref<boolean>(false)
const title = ref<string>('搜索')
function handleOpen() {
  dialogVisible.value = !dialogVisible.value
}
/** ===== 搜索模态框-end ===== **/
</script>

<template>
  <div class="w-full h-[50px] top-banner flex px-4 justify-between">
    <!-- 折叠按钮 -->
    <div class="w-[250px] h-full flex flex-col items-center">
      <BreadCrumb />
    </div>
    <!-- 功能列表 -->
    <div class="w-auto h-full flex justify-center">
      <FunctionButton
          v-for="(item, index) in funcList"
          :key="index"
          :icon="item.icon"
          :content="item.content"
          :func="item.func"
      />
      <!-- 个人中心 / 退出登录 -->
      <div class="w-auto h-full mx-4 flex flex-col items-center justify-center">
        <el-dropdown
            style="outline: none !important;"
        >
          <div class="w-auto h-full flex">
            <span class="text-[10px] mx-1">谷粒商城后台系统</span>
            <el-icon><arrow-down /></el-icon>
          </div>
          <template #dropdown>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </template>
        </el-dropdown>
      </div>
      <!-- 页面设置 -->
      <div class="w-auto h-full flex flex-col justify-center items-center">
        <el-tooltip
            effect="dark"
            placement="bottom"
            content="设置"
        >
          <el-button
              type="text"
              icon="Setting"
          />
        </el-tooltip>
      </div>
    </div>
  </div>
  <!-- 搜索弹框 -->
  <GenerateDialog
      v-model:visible="dialogVisible"
      :title="title"
  >
    <span class="text-xl text-red-500">你确定吗 ?</span>
  </GenerateDialog>
</template>

<style lang="scss" scoped>
.top-banner {
  border-bottom: 1px solid #ebeef5;
}
:deep(.el-dropdown-link:focus) {
  outline: none !important;
}
</style>
