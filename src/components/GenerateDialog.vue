<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";




const props = withDefaults(defineProps<{
  visible?:boolean;
  title?: string;
  showClose?: boolean;
  width?: string;
}>(), {
  visible: false,
  title: '提示',
  showClose: true,
  width: '500'
})
/** ===== 通用模态框-start ===== **/
const emits = defineEmits(['update:visible', 'confirm'])
const isVisible = computed({
  get: () => props.visible,
  set: (val) => emits('update:visible', val)
})
function handleCancel() {
  isVisible.value = false
}

function handleConfirm() {
  emits('confirm', true)
}

watch(() => props.visible, (val) => {
  isVisible.value = val
})
/** ===== 通用模态框-end ===== **/
</script>

<template>
  <div class="w-auto h-auto flex flex-col">
    <el-dialog
        v-model="isVisible"
        :show-close="props.showClose"
        title="提示"
        :width="width"
    >
      <template v-if="title" #title>
        <span class="text-xl font-bold">{{ title }}</span>
      </template>
      <slot />
      <template #footer>
        <el-button @click="handleCancel" class="main_danger_plain_btn">取消</el-button>
        <el-button class="main_primary_btn" @click="handleConfirm">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
</style>
