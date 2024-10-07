<script setup lang="ts">
import {onMounted, ref} from 'vue'
import ImgFitCard from "@/views/Fitment/DataBind/_components/ImgFitCard.vue";
import {$message} from "@/componsables/element-plus";

const props = withDefaults(defineProps<{
  imgList?: string[];
  arrow?: string;
  indicator?: string;
}>(), {

})
/** ===== 首页轮播图配置-start ===== **/
const emits = defineEmits(['change-blur', 'change-interval', 'change-arrow', 'change-indicator'])
const imgUrl = ref<string[]>(props.imgList) // 轮播列表，上限五张
const interval = ref<number>(1000) // 轮播图延时
const blur = ref<boolean>(false) // 轮播图动态模糊
const arrow = ref<string>(props.arrow) // 轮播图箭头
const indicator = ref<string>(props.indicator) // 轮播图指示器
interface imgFitType {
  label: number;
  value: string;
}
const arrowList = [
  {
    label: '默认',
    value: 'always'
  },
  {
    label: '浮动',
    value: 'hover'
  },
  {
    label: '取消',
    value: 'never'
  }
]
const indicatorList = [
  {
    label: '默认',
    value: '',
  },
  {
    label: '无',
    value: 'none'
  },
  {
    label: '外部',
    value: 'outside'
  }
]

function clearIndicator() {
  indicator.value = ''
}

function changeBlur() {
  emits('change-blur', blur.value)
}

function changeInterval() {
  emits('change-interval', interval.value)
}

function changeArrow() {
  emits('change-arrow', arrow.value)
}

function clearArrow() {
  arrow.value = ''
}

function changeIndicator() {
  emits('change-indicator', indicator.value)
}

function changeUrl(index: imgFitType) {
  if (imgUrl.value.length > index.label) {
    imgUrl.value[index.label] = index.value
  } else {
    imgUrl.value.push(index.value)
  }
}

function handleAddImg() {
  if (imgUrl.value.length <= 5) {
    imgUrl.value.push('')
  } else {
    $message({
      message: '最多只能添加五张图片',
      type: 'warning'
    })
  }
}
/** ===== 首页轮播图配置-end ===== **/
</script>

<template>
  <div
      class="w-full h-auto flex mt-4 flex-col"
  >
    <el-form-item label="轮播图延时">
      <el-input-number
          v-model="interval"
          min="500"
          :step="500"
          @change="changeInterval"
      />
    </el-form-item>
    <el-form-item label="是否开启动态模糊">
      <el-switch
          v-model="blur"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          @change="changeBlur"
      />
    </el-form-item>
    <el-form-item label="指示器">
      <el-select
          v-model="indicator"
          placeholder="请选择指示器设置"
          style="width: 200px"
          clearable
          @clear="clearIndicator"
          @change="changeIndicator"
      >
        <el-option
            v-for="(item, index) in indicatorList"
            :key="index"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="切换箭头">
      <el-select
          v-model="arrow"
          placeholder="请选择切换箭头设置"
          style="width: 200px"
          clearable
          @clear="clearArrow"
          @change="changeArrow"
      >
        <el-option
            v-for="(item, index) in arrowList"
            :key="index"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-form-item>
    <!-- 图源设置 -->
    <div class="w-full h-auto flex flex-col my-4">
      <ImgFitCard
          v-for="(item, index) in imgUrl"
          :key="index"
          :img-url="item"
          :index="index"
          @change-url="changeUrl"
      />
    </div>
    <div class="w-full h-auto flex justify-end">
      <el-button @click="handleAddImg" class="main_primary_btn">添加图片</el-button>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
</style>
