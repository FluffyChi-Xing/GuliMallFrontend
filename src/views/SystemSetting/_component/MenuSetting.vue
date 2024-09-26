<script setup lang="ts">
import TheHead from "@/components/TheHead.vue";
import GeneratePagination from "@/components/GeneratePagination.vue";
import {onMounted, ref} from 'vue'
import type {MenuSettingTypes} from "@/componsables/apis/MenuSettingTypes";
import {layoutTypes} from "@/componsables/apis/layoutTypes";
import {getMenuData} from "@/componsables/apis/MenuData";
import {getRouterPath} from "@/componsables/enums/routerPathEnum";
import MenuNestTable from "@/views/SystemSetting/_component/MenuNestTable.vue";
import GenerateDialog from "@/components/GenerateDialog.vue";



/** ===== 菜单管理初始化-start ===== **/
const tableData = ref<MenuSettingTypes.MenuDataTypes[]>([])
const menuData = ref<layoutTypes.menuTypes[]>()


function handleMenuData() {
  // 获取菜单数据
  menuData.value = getMenuData();
  tableData.value = exchangeData(menuData.value)
}

function exchangeData(menus: layoutTypes.menuTypes[], superior: string = '--') {
  let menuList = []
  for (let index = 0; index < menus?.length; index++) {
    menuList.push({
      name: menus[index].label,
      superior: superior,
      icon: menus[index].icon,
      type: menus[index].children?.length ? '目录' : '菜单',
      index: menus[index].index,
      route: getRouterPath(menus[index].index),
      auth: '--',
      children: exchangeData(menus[index].children, menus[index].label),
    })
  }
  return menuList;
}

onMounted(() => {
  handleMenuData()
})
/** ===== 菜单管理初始化-end ===== **/

/** ===== 菜单添加窗口初始化-start ====== **/
const dialogVisible = ref<boolean>(false)

function handleAddMenu() {
  dialogVisible.value = true
}

function handleConfirm(index: boolean) {
  if (index) {
    dialogVisible.value = false
  }
}
/** ===== 菜单添加窗口初始化-end ====== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <!-- the head -->
    <TheHead
        title="菜单管理"
    >
      <div class="w-full h-10 flex justify-end">
        <el-button @click="handleAddMenu" class="main_primary_btn">新增</el-button>
      </div>
    </TheHead>
    <!-- table area -->
    <el-scrollbar class="w-full h-full mt-4">
      <div
          class="w-full flex flex-col"
      >
        <el-card class="w-full h-full flex is-never-shadow p-4">
          <div
              style="height: calc(100% - 40px)"
              class="w-full flex flex-col"
          >
            <MenuNestTable
                :table-data="tableData"
            />
          </div>
          <!-- pagination -->
<!--          <div class="w-full h-10 flex flex-col">-->
<!--            <GeneratePagination />-->
<!--          </div>-->
        </el-card>
      </div>
    </el-scrollbar>
  </div>
  <GenerateDialog
      v-model:visible="dialogVisible"
      title="添加目录"
      @confirm="handleConfirm"
  >
    <span class="text-red-500">您确定要添加目录吗 ?</span>
  </GenerateDialog>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
:deep(.el-card__body) {
  width: 100%;
  height: 100%;
  padding: 0;
}
:deep(.el-scrollbar__view) {
  width: 100%;
  height: 100%;
}
</style>
