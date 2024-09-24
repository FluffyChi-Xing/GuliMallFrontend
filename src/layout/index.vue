<script setup lang="ts">
import Default from "@/layout/default.vue";
import TopHeader from "@/layout/TopHeader.vue";
import { ref } from "vue";
import {$store} from "@/componsables/store";



const pageStore = $store.pageStore()
/** ===== 页面设置抽屉初始化-start ===== **/
const pageDrawer = ref<boolean>(false)
const showLogo = ref<boolean>(true)
const showBread = ref<boolean>(true)
const layoutSetting = ref<string>('1')

function handleCollapse(index: boolean) {
  pageDrawer.value = index
}

// 是否显示菜单logo
function checkLogo() {
  pageStore.isShowLogo = !!showLogo.value;
}
// 是否显示面包屑导航
function checkBread() {
  pageStore.isShowBread = !!showBread.value;
}

// 布局切换
/** ===== 页面设置抽屉初始化-end ===== **/
</script>

<template>
  <div class="w-screen h-screen flex bg-[#F0F2F5]">
    <el-container class="w-full h-full">
      <el-aside width="200px">
        <!-- default menu -->
        <default />
      </el-aside>
      <el-container>
        <el-header height="80px">
          <!-- header pane -->
          <TopHeader
              @handleCollapse="handleCollapse"
          />
        </el-header>
        <el-main>
          <!-- main page -->
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
  <el-drawer
      v-model="pageDrawer"
      title="页面设置"
      size="300px"
      @close="pageDrawer = false"
  >
    <el-divider direction="horizontal">布局切换</el-divider>
    <el-form-item>
      <el-radio-group
          v-model="layoutSetting"
          class="w-full h-auto"
      >
        <div class="w-full h-auto grid grid-cols-2 gap-4">
          <el-radio-button
              value="1"
              style="border: none"
          >
            <template #default>
              <div class="w-full h-14 grid grid-cols-6 gap-1 p-1">
                <div class="w-full h-full flex bg-[theme('colors.primary')] rounded-[4px]" />
                <div class="col-span-5 w-full h-full grid grid-rows-6 gap-1">
                  <div class="w-full h-full flex row-span-2 bg-gray-500 rounded-[2px]" />
                  <div class="w-full h-full flex row-span-4 bg-gray-400 rounded-[4px]" />
                </div>
              </div>
            </template>
          </el-radio-button>
          <el-radio-button
              value="2"
              style="border: none"
          >
            <template #default>
              <div class="w-full h-14 grid grid-rows-6 gap-1 p-1">
                <div class="w-full h-full flex row-span-2 bg-[theme('colors.primary')] rounded-[2px]" />
                <div class="w-full h-full flex row-span-4 bg-gray-400 rounded-[4px]" />
              </div>
            </template>
          </el-radio-button>
        </div>
      </el-radio-group>
    </el-form-item>
    <el-divider direction="horizontal">界面显示</el-divider>
    <el-form-item
        label="侧边栏logo"
        label-width="auto"
    >
      <el-switch
          v-model="showLogo"
          @change="checkLogo"
          class="ml-auto"
      />
    </el-form-item>
    <el-form-item
        label="面包屑"
        label-width="auto"
    >
      <el-switch
          v-model="showBread"
          @change="checkBread"
          class="ml-auto"
      />
    </el-form-item>
  </el-drawer>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
:deep(.el-header) {
  padding: 0;
}
:deep(.el-radio-button__inner) {
  width: 100%;
  height: 100%;
  border: none;
  padding: 0 !important;
}
:deep(.el-radio-button) {
  border: 1px solid transparent !important;
  border-radius: 4px !important;
  overflow: hidden;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.08) !important;
  &.is-active {
    border-color: theme('colors.primary') !important;
    background-color: white !important;
  }
}
:deep(.el-radio-button.is-active .el-radio-button__original-radio:not(:disabled)+.el-radio-button__inner) {
  background-color: white !important;
}
</style>
