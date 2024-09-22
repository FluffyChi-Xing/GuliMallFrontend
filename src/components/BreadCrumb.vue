<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import { useRoute, useRouter } from "vue-router";
import {layoutTypes} from "@/componsables/apis/layoutTypes";
import {keyGetLabel, routeGetKey} from "@/utils/routeControll";


withDefaults(defineProps<{
  separator?: string
}>(), {
  separator: '/'
})


const route = useRoute()
const router = useRouter()
/** ===== 面包屑导航-start ===== **/
const routeMatched = ref<string[]>()
const breadList = ref<layoutTypes.routerTagTypes[]>([])


/**
 * 添加面包屑导航
 */
function addBreads() {
  breadList.value = []
  routeMatched.value?.forEach((item: string) => {
    if (item === '/home') {
      breadList.value.push({
        label: keyGetLabel(routeGetKey(item)),
        route: '/'
      })
      return
    }
    breadList.value.push({
      label: keyGetLabel(routeGetKey(item)),
      route: item
    })
  })
  // console.log(breadList.value)
}

/**
 * 获取当前路由匹配的路径
 */
function getMatched() {
  routeMatched.value = route.matched.map(item => item.path)
}

onMounted(() => {
  getMatched()
  addBreads()
})
watch(() => route.path, () => {
  getMatched()
  addBreads()
})
/** ===== 面包屑导航-end ===== **/
</script>

<template>
  <div class="w-full h-full flex items-center max-w-[250px]">
    <el-breadcrumb :separator="separator">
      <el-breadcrumb-item
          v-for="(item, index) in breadList"
          :key="index"
          :to="item.route"
      >
        {{ item.label }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped>

</style>
