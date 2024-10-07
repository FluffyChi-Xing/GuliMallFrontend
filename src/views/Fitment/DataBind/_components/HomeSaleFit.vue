<script setup lang="ts">
import {computed, ref} from 'vue'
import ImgFitCard from "@/views/Fitment/DataBind/_components/ImgFitCard.vue";
import type {FitmentTypes} from "@/componsables/apis/fitmentTypes";
import {$message} from "@/componsables/element-plus";

const props = withDefaults(defineProps<{
  title?: string;
  hotTag?: string;
  goods?: FitmentTypes.homeSalesTypes[];
}>(), {

})


const emits = defineEmits(['add-good'])
const title = ref<string>(props.title)
const hotTag = ref<string>(props.hotTag)
const goodList = ref<FitmentTypes.homeSalesTypes[]>(props.goods)
const prices = ref<number[]>(props.goods.map(item => item.price))
function clearTitle() {
  title.value = ''
}
function clearTag() {
  hotTag.value = ''
}

function handleAddGood() {
  if (props.goods.length <= 4) {
    goodList.value.push({
      index: goodList.value.length,
      imgUrl: '',
      price: 0
    })
  } else {
    $message({
      message: '最多添加5个商品',
      type: 'warning'
    })
  }
}

function bindPrice(index: number) {
  goodList.value[index].price = prices.value[index]
}

interface goodUrlTypes {
  label: number;
  value: string;
}

function changeUrl(item: goodUrlTypes) {
  goodList.value[item.label].imgUrl = item.value
}
</script>

<template>
  <div class="w-full h-auto flex flex-col p-4">
    <el-form-item label="标题修改">
      <el-input
          v-model="title"
          clearable
          style="width: 200px"
          placeholder="请输入标题"
          @clear="clearTitle"
      />
    </el-form-item>
    <el-form-item label="标签修改">
      <el-input
          v-model="hotTag"
          clearable
          style="width: 200px"
          placeholder="请输入标签"
          @clear="clearTag"
      />
    </el-form-item>
    <!-- 修改/添加 商品信息 -->
    <ImgFitCard
        v-for="(item, index) in goodList"
        :key="index"
        :index="index"
        :img-url="item.imgUrl"
        @change-url="changeUrl"
    >
      <template #more>
        <el-form-item label="价格修改">
          <el-input
              v-model="prices[index]"
              class="w-full"
              clearable
              placeholder="请输入价格"
              @keydown.enter="bindPrice(index)"
          />
        </el-form-item>
      </template>
    </ImgFitCard>
    <div class="w-full h-auto flex justify-end mt-4 items-center">
      <el-button @click="handleAddGood" class="main_primary_btn">添加商品</el-button>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
</style>
