<script setup lang="ts">
import type {layoutTypes} from "@/componsables/apis/layoutTypes";
import {onMounted, ref, watch} from "vue";
import {$api} from "@/componsables/api";
import NestMenu from "@/layout/_components/NestMenu.vue";
import {$store} from "@/componsables/store";
import { useRouter, useRoute } from "vue-router";
import {$enum} from "@/componsables/enum";
import {getRouterKey} from "@/componsables/enums/routerPathEnum";


const pageStore = $store.pageStore()
const router = useRouter()
const route = useRoute()
/** ===== 菜单初始化-start ===== **/
const highLight = ref<string>('r1');
const isCollpas = ref<boolean>(false);
const menuData = ref<layoutTypes.menuTypes[]>($api.MenuData);

function handleCollapse() {
  isCollpas.value = pageStore.isCollapse
}
onMounted(() => {
  handleCollapse()
})
watch(() => pageStore.isCollapse, (val) => {
  isCollpas.value = val
})

// 路由跳转

function getPath(item: string) {
  return $enum.getRouterPath(item)
}

function handleChange(index: string) {
  router.push(getPath(index))
}
/** ===== 菜单初始化-end ===== **/

/** ===== 菜单高亮持久化-start ===== **/
function handleHighLight() {
  //  处理首页不是根地址的问题
  if (route.path === '/home/dashboard') {
    highLight.value = 'r1'
    return
  }
  highLight.value = $enum.getRouterKey(route.path);
}
onMounted(() => {
  handleHighLight()
})
watch(() => route.path, () => {
  handleHighLight()
})
/** ===== 菜单高亮持久化-end ===== **/
</script>

<template>
  <div class="w-full max-w-[200px] h-full flex flex-col">
    <el-scrollbar
        class="w-full"
        style="height: 100vh;"
    >
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
        <div class="w-full h-[50px] justify-center text-center items-center flex">
          <span class="w-full h-10 flex menu-logo" />
        </div>
        <NestMenu
            v-for="(item, index) in menuData"
            :key="index"
            :menu-item="item"
        />
      </el-menu>
    </el-scrollbar>
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
.menu-logo {
  background-image: url("@/assets/img/logo-no-background.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
:deep(.el-scrollbar__view) {
  height: 100%;
}
</style>
