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
import {enum2list} from "@/componsables/enums/menuIconEnums";



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

function handleSimpleMenu() {
  menuData.value?.forEach((item: layoutTypes.menuTypes) => {
    menuSimList.value.push({
      label: item.label,
      value: item.index,
      children: item.children?.map((child: layoutTypes.menuTypes) => {
        return {
          label: child.label,
          value: child.index,
        }
      })
    })
  })
}

onMounted(() => {
  handleMenuData()
  handleSimpleMenu()
})
/** ===== 菜单管理初始化-end ===== **/

/** ===== 菜单添加窗口初始化-start ====== **/
const dialogVisible = ref<boolean>(false)
const superior = ref<string>('') // 上级目录
const menuName = ref<string>('') // 目录名称
const menuIndex = ref<string>('') // 目录索引
const menuRoute = ref<string>('') // 目录路由
const menuIcon = ref<string>('') // 目录图标
const iconsOption = ref<MenuSettingTypes.menuIconsTypes[]>([])
const menuSimList = ref<MenuSettingTypes.SimMenuDataTypes[]>([])

// 重置目录表单
function resetMenu() {
  superior.value = ''
  menuName.value = ''
  menuIndex.value = ''
  menuRoute.value = ''
  menuIcon.value = ''
}

function handleAddMenu() {
  dialogVisible.value = true
}

function handleConfirm(index: boolean) {
  if (index) {
    dialogVisible.value = false
    resetMenu()
  }
}

function getIcons() {
  iconsOption.value = enum2list()
}

onMounted(() => {
  getIcons()
})

// TODO: 添加目录表单
// TODO: 添加目录 menuData.ts 读写函数
// TODO: 添加目录接口 routerPathEnum.ts 读写函数
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
      title="添加菜单"
      @confirm="handleConfirm"
  >
    <div class="w-full h-auto flex flex-col">
      <el-form label-width="auto">
        <el-form-item label="菜单名">
          <el-input
              v-model="menuName"
              placeholder="请输入菜单名"
              clearable
              style="width: 100%"
              maxlength="20"
              show-word-limit
          />
        </el-form-item>
        <el-form-item label="菜单地址">
          <el-input
              v-model="menuRoute"
              clearable
              placeholder="请输入菜单地址"
              style="width: 100%"
              maxlength="20"
              show-word-limit
          />
        </el-form-item>
        <el-form-item label="上级目录">
          <el-cascader
              v-model="superior"
              style="width: 100%"
              placeholder="请选择上级目录"
              clearable
              :options="menuSimList"
              :props="{value: 'label', children: 'children'}"
          />
        </el-form-item>
        <el-form-item label="图标">
          <el-select
              v-model="menuIcon"
              placeholder="请选择图标"
              style="width: 100%"
          >
            <el-option
                v-for="(item, index) in iconsOption"
                :key="index"
                :value="item.label"
                :label="item.label"
            >
              <template #default>
                <el-icon class="mr-4"><component :is="item.icon" /></el-icon>
                <span class="text-black">{{ item.label }}</span>
              </template>
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
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
