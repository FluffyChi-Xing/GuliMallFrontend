<script setup lang="ts">
import { ref } from "vue";
import type {layoutTypes} from "@/componsables/apis/layoutTypes";

withDefaults(defineProps<{
  data?: layoutTypes.generateTreeTypes[];
  emptyText?: string;
  isShowCheck?: boolean;
  accordion?: boolean;
}>(), {
  isShowCheck: false,
  accordion: false
})


/** ===== 树形菜单初始化-start ===== **/
// 生成树
// 暂时数据
const treeData = ref<layoutTypes.generateTreeTypes[]>([
  {
    label: '手机',
    children: [
      {
        label: '小米',
        children: [
          {
            label: '小米10'
          },
          {
            label: '小米11'
          }
        ]
      },
      {
        label: '华为',
        children: [
          {
            label: '华为P40'
          },
          {
            label: '华为P50'
          }
        ]
      }
    ]
  },
  {
    label: '电脑',
    children: [
      {
        label: '联想',
        children: [
          {
            label: '联想拯救者'
          },
          {
            label: '联想小新'
          }
        ]
      },
      {
        label: '戴尔',
        children: [
          {
            label: '戴尔灵越'
          },
          {
            label: '戴尔战神'
          }
        ]
      }
    ]
  }
])



const emits = defineEmits(['selectNode'])
function handleSelectNode(index: string) {
  emits('selectNode', index)
}
/** ===== 树形菜单初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <el-tree
        :data="treeData"
        :props="{label: 'label'}"
        :accordion="accordion"
        :show-checkbox="isShowCheck"
        :empty-text="emptyText"
        @nodeClick="handleSelectNode"
        @check-change="handleSelectNode"
    >
      <template #empty>
        <el-empty
            description="暂无数据"
        />
      </template>
    </el-tree>
  </div>
</template>

<style scoped>

</style>
