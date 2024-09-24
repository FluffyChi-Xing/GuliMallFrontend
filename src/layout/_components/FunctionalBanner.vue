<script setup lang="ts">
import {onMounted, ref} from 'vue'
import type {layoutTypes} from "@/componsables/apis/layoutTypes";
import {ArrowDown, Bell, Expand, Fold, FullScreen, Refresh, Search} from "@element-plus/icons-vue";
import FunctionButton from "@/layout/_components/FunctionButton.vue";
import {$store} from "@/componsables/store";
import GenerateDialog from "@/components/GenerateDialog.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import { useRouter } from "vue-router";
import {$message} from "@/componsables/element-plus";
import NoticeCard from "@/layout/_components/NoticeCard.vue";



const router = useRouter()
/** ===== 功能按钮初始化-start ===== **/
function refresh() {
  window.location.reload()
}

// 全屏函数
function handleFullScreen() {
  let el = document.fullscreenElement;
  if (el) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
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
    content: '全屏',
    icon: FullScreen,
    func: () => handleFullScreen()
  }
]
const funcList = ref<layoutTypes.functionButtonTypes[]>(funList)
/** ===== 功能按钮初始化-end ===== **/

/** ===== 下拉菜单-start ===== **/
function handleAdmin() {
  router.push('/home/admin')
}
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
const searchValue = ref<string>('')
function handleOpen() {
  dialogVisible.value = !dialogVisible.value
}


function handleCLear() {
  searchValue.value = ''
}

function handleSearch() {
  if (!searchValue.value) {
    $message({
      message: '请输入搜索内容',
      type: 'warning'
    })
  } else {
    dialogVisible.value = false
  }
}
/** ===== 搜索模态框-end ===== **/

/** ===== 通知-start ===== **/
const noticeContent = ref<layoutTypes.noticeCardTypes[]>([
  {
    icon: 'dingdan1',
    title: '待发货订单提醒',
    desc: '您有1098个待发货订单，请尽快处理',
    index: '/home/order'
  },
  {
    icon: 'xitongbaojing',
    title: '库存报警',
    desc: '您有24个商品库存告警'
  },
  {
    icon: 'pinglun',
    title: '评论回复',
    desc: '您有13条评论待回复'
  }
])
const noticeIcon = ref<any>(Bell)

function handleNotice(item: layoutTypes.noticeCardTypes[]) {
  return !!item.length;
}

function handleRouter(path: string) {
  router.push(path)
}
/** ===== 通知-end ===== **/

/** ===== 展开侧边抽屉-start ===== **/
const emits = defineEmits(['handleCollapse'])

function handleCollapse() {
  emits('handleCollapse', true)
}
/** ===== 展开侧边抽屉-end ===== **/
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
      <el-dropdown placement="bottom">
        <FunctionButton
            :icon="noticeIcon"
            :dot="handleNotice(noticeContent)"
        />
        <template
            v-if="noticeContent.length"
            #dropdown
        >
          <el-dropdown-item
              v-for="(item, index) in noticeContent"
              :key="index"
              @click="handleRouter(item.index)"
          >
            <template #default>
              <NoticeCard
                  :icon="item.icon"
                  :title="item.title"
                  :desc="item.desc"
              />
            </template>
          </el-dropdown-item>
        </template>
        <template
            v-else
            #dropdown
        >
          <div class="w-[200px] h-20 flex justify-center items-center">
            <div class="text-[15px]">暂无通知</div>
          </div>
        </template>
      </el-dropdown>
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
            <el-dropdown-item @click="handleAdmin">个人中心</el-dropdown-item>
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
              @click="handleCollapse"
          />
        </el-tooltip>
      </div>
    </div>
  </div>
  <!-- 搜索弹框 -->
  <GenerateDialog
      v-model:visible="dialogVisible"
      :title="title"
      @confirm="handleSearch"
  >
    <el-form-item label="搜索">
      <el-input
          v-model="searchValue"
          clearable
          class="w-full"
          placeholder="请输入搜索内容..."
          @clear="handleCLear"
          @keydown.enter="handleSearch"
      />
    </el-form-item>
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
