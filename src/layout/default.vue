<script setup lang="ts">
import type {layoutTypes} from "@/componsables/apis/layoutTypes";
import {onMounted, ref, watch} from "vue";
import {$api} from "@/componsables/api";
import NestMenu from "@/layout/_components/NestMenu.vue";
import {$store} from "@/componsables/store";



const pageStore = $store.pageStore()
/** ===== 菜单初始化-start ===== **/
const highLight = ref<string>('1');
const isCollpas = ref<boolean>(false);
const menuData = ref<layoutTypes.menuTypes[]>($api.MenuData);
function handleChange(index: item) {
  console.log(index)
}

function handleCollapse() {
  isCollpas.value = pageStore.isCollapse
}
onMounted(() => {
  handleCollapse()
})
watch(() => pageStore.isCollapse, (val) => {
  isCollpas.value = val
})
/** ===== 菜单初始化-end ===== **/
</script>

<template>
  <div class="w-full max-w-[200px] h-full flex flex-col">
    <el-menu
        :default-active="highLight"
        class="w-full h-full"
        background-color="#282C34"
        text-color="#c7c7c7"
        style="height: 100%;border-right: none"
        active-text-color="#fff"
        @select="handleChange"
        :collapse="isCollpas"
        collapse-transition
    >
      <div class="w-full h-[50px] justify-center text-center items-center flex bg-[#08A3A4]">
        <span class="text-[20px] text-white font-bold">谷粒商城后台系统</span>
      </div>
      <NestMenu
          v-for="(item, index) in menuData"
          :key="index"
          :menu-item="item"
      />
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-menu-item:hover) {
  background-color: #0256FF;
  color: #fff;
}

:deep(.el-menu-item) {
  &.is-active {
    background-color: #0256FF;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
