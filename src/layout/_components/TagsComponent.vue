<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import { useRoute, useRouter } from "vue-router";
import type {layoutTypes} from "@/componsables/apis/layoutTypes";
import {keyGetLabel, routeGetKey} from "@/utils/routeControll";
import routerTagTypes = layoutTypes.routerTagTypes;


const route = useRoute();
const router = useRouter();


/** ===== 路由tags初始化-start ===== **/
const currentRoute = ref<string>('');
const routerList = ref<string[]>([]);
const tagsList = ref<layoutTypes.routerTagTypes[]>([]);
// 去除重复的路由地址
let routerSet = null;

/**
 * 获取路由地址
 */
function getRoute() {
  routerList.value.push(route.path)
  routerSet = new Set(routerList.value)
  currentRoute.value = route.path // 当前路由地址
}

/**
 * 获取路由key
 * @param item
 */
// function routeGetKey(item: string) {
//   // 处理根目录不是首页的问题
//   if (item === '/home/dashboard') return 'r1'
//   return $enum.getRouterKey(item);
// }

/**
 * 获取路由label
 * @param item
 */
// function keyGetLabel(item: string): string {
//   return useIndexGetLabel(item)?.label;
// }


/**
 * 工厂函数
 * @param index
 * @param route
 * @param label
 */
function addTags(index: string, route: string, label: string) {
  if (!label && route === '/home/spu') {
    label = 'SPU管理'
  }
  tagsList.value.push({
    index,
    route,
    label
  })
}

/**
 * 初始化tags
 * @constructor
 * @return void
 */
function initTags() {
  tagsList.value = []; // 清空tagsList
  routerSet.forEach((item: string) => {
    addTags(routeGetKey(item), item, keyGetLabel(routeGetKey(item)))
  })
}

function changeRoute(item: string) {
  router.push(item)
}

// 关闭tags
function handleClose(index: number) {
  tagsList.value.splice(index, 1);
}

// 挂载
onMounted(() => {
  getRoute()
  initTags()
})
watch(() => route.path, () => {
  getRoute()
  initTags()
})
/** ===== 路由tags初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full flex items-center px-4 overflow-x-auto">
    <el-tag
        v-for="(item, index) in tagsList"
        :key="index"
        closable
        @click="changeRoute(item.route)"
        class="primary_tag cursor-pointer"
        :class="{'tag-active': item.route === currentRoute}"
        @close="handleClose(index)"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
</style>
