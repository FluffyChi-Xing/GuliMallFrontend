<script setup lang="ts">
import {Refresh} from "@element-plus/icons-vue";

/**
 * 功能按钮组件
 * @param content 按钮提示文字
 * @param icon 按钮图标
 * @param dot 是否显示红点
 * @param func 按钮点击事件
 */
withDefaults(defineProps<{
  content?: string;
  icon?: any;
  dot?: boolean;
  func?: () => void;
}>(), {
  content: '暂无数据',
  icon: Refresh,
  dot: false
})
</script>

<template>
  <div class="w-auto h-full flex mx-4 flex-col justify-center items-center">
    <el-tooltip
        effect="dark"
        placement="bottom"
        :content="content"
    >
      <el-badge
          :is-dot="dot"
      >
        <el-button
            type="text"
            :icon="icon"
            @click="func"
        />
      </el-badge>
    </el-tooltip>
  </div>
</template>

<style scoped>

</style>
