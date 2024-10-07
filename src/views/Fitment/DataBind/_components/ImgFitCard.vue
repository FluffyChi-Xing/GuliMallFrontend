<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  imgUrl?: string;
  index?: number;
}>(), {

})


const imgUrl = ref<string>(props.imgUrl) // 图片地址
const imgName = ref<string>('') // 图片名称
const emits = defineEmits(['change-url'])

function handleError() {
  imgUrl.value = 'src/assets/img/error-img.png'
}

function clearName() {
  imgName.value = ''
}

function clearUrl() {
  imgUrl.value = ''
}

function changeUrl() {
  emits('change-url', {
    label: props.index,
    value: imgUrl.value
  })
}
</script>

<template>
  <div class="w-full rounded-[5px] overflow-hidden fit-card mb-4 h-auto flex p-4">
    <!-- image preview -->
    <div class="w-[118px] h-full flex mr-4">
      <img
          :src="imgUrl"
          alt=""
          class="w-full h-full object-contain img-border"
          loading="lazy"
      >
    </div>
    <!-- image setting form -->
    <div
        style="width: calc(100% - 134px)"
        class="h-full flex flex-col"
    >
      <el-form-item label="图片名称">
        <el-input
            v-model="imgName"
            clearable
            class="w-full"
            placeholder="请输入图片名称"
            @clear="clearName"
        />
      </el-form-item>
      <el-form-item label="图片路径">
        <el-input
            v-model="imgUrl"
            clearable
            class="w-full"
            placeholder="请输入图片路径"
            @clear="clearUrl"
        />
      </el-form-item>
      <slot name="more" />
      <el-form-item>
        <div class="w-full h-auto flex justify-end">
          <el-button @click="changeUrl" class="main_danger_plain_btn">确认</el-button>
        </div>
      </el-form-item>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
.fit-card {
  border: 1px dashed theme('colors.primary');
}

.img-border {
  border: 1px dashed theme('colors.info');
}
:deep(.el-form-item) {
  margin-bottom: 10px !important;
}
</style>
