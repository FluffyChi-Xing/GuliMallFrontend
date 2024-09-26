<script setup lang="ts">
import { ref, computed } from 'vue'
import type {MenuSettingTypes} from "@/componsables/apis/MenuSettingTypes";

const props = withDefaults(defineProps<{
  tableData?: MenuSettingTypes.MenuDataTypes[],
  isExpand?: boolean,
}>(), {

})

/*
* 用于高亮展开行
 */
const highLight = ref<string>('')

function handleExpand(item: any) {
  highLight.value = item?.index
}

/**
 * 是否展开
 */
const shouldExpand = computed(() => {
  return props.tableData?.some(menu => menu.children?.length) ?? false;
});
</script>

<template>
  <div class="w-full h-auto flex">
    <el-table
        :data="tableData"
        fit
        stripe
        class="w-full h-full"
        @expand-change="handleExpand"
        :header-cell-style="{background: '#E5EEFF', color: '#303133', textAlign: 'center'}"
    >
      <el-table-column
          v-if="shouldExpand"
          width="100"
          type="expand"
      >
        <template #default="{ row }">
          <MenuNestTable
              v-if="row.children?.length"
              :table-data="row.children"
          />
        </template>
      </el-table-column>
      <el-table-column
          v-else
          width="100"
      />
      <el-table-column
          label="名称"
          width="200"
          prop="name"
      >
        <template #default="props">
          <span>{{ props.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
          width="200"
          label="上级菜单"
          prop="superior"
      />
      <el-table-column
          label="图标"
          width="100"
          prop="icon"
      >
        <template #default="{ row }">
          <div class="w-full h-full flex justify-center">
            <el-icon><component :is="row?.icon" /></el-icon>
          </div>
        </template>
      </el-table-column>
      <el-table-column
          label="类型"
          width="200"
          prop="type"
      >
        <template #default="{ row }">
          <div class="w-full h-full flex justify-center">
            <el-tag
                :type="row?.type === '菜单' ? 'primary' : 'success'"
            >
              {{ row?.type }}
            </el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column
          width="200"
          label="排序号"
          prop="index"
      />
      <el-table-column
          label="菜单URl"
          width="200"
          show-overflow-tooltip
          prop="route"
      />
      <el-table-column
          label="授权标识"
          prop="auth"
          width="200"
      />
      <el-table-column
          label="操作"
          width="200"
          :fixed="'left'"
      >
        <el-button type="text" size="small" class="mr-4">修改</el-button>
        <el-button type="text" size="small">删除</el-button>
      </el-table-column>
      <template #empty>
        <el-empty
            description="暂无数据"
        />
      </template>
    </el-table>
  </div>
</template>

<style scoped>
:deep(.el-table__header) {
  height: 40px;
}

.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
