<script setup lang="ts">
import TheFooter from "@/components/TheFooter.vue";
import { ref } from "vue";


/** ===== 个人中心-start ===== **/
const username = ref<string>('') // 用户名
const password = ref<string>('') // 密码
const nickname = ref<string>('') // 昵称
const secondPassword = ref<string>('') // 第二次输入的密码
const userAvatar = ref<string>('https://picsum.photos/200/300?1') // 用户头像

function handleError() {
  userAvatar.value = 'src/assets/img/error-img.png'
}
/** ===== 个人中心-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="w-full h-auto flex flex-col">
      <el-card class="w-full h-auto is-never-shadow">
        <el-form
            label-width="auto"
        >
          <el-form-item label="头像">
            <el-avatar
                shape="circle"
                size="large"
                :src="userAvatar"
                @error="handleError"
            />
          </el-form-item>
        </el-form>
        <el-form-item required label="用户名">
          <el-input
              clearable
              v-model="username"
              placeholder="请输入用户名"
              prefix-icon="User"
              style="width: 240px"
          />
        </el-form-item>
        <el-form-item label="昵称">
          <el-input
              clearable
              v-model="nickname"
              placeholder="请输入昵称"
              prefix-icon="Tickets"
              style="width: 240px"
          />
        </el-form-item>
        <el-form-item required label="密码">
          <el-input
              clearable
              v-model="password"
              placeholder="请输入密码"
              prefix-icon="Lock"
              style="width: 240px"
              type="password"
              show-password
              maxlength="18"
              show-word-limit
          />
        </el-form-item>
        <el-form-item required label="确认密码">
          <el-input
              clearable
              v-model="secondPassword"
              placeholder="请再次输入密码"
              prefix-icon="Lock"
              style="width: 240px"
              type="password"
              show-password
              maxlength="18"
              show-word-limit
          />
        </el-form-item>
        <el-form-item>
          <el-button class="main_primary_btn">保存</el-button>
        </el-form-item>
      </el-card>
    </div>
    <TheFooter
        :is-show="true"
        class="mt-auto"
    />
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
</style>
