<script setup lang="ts">
import { ref } from "vue";
import {$message} from "@/componsables/element-plus";
import { useRouter } from "vue-router";



const router = useRouter()
/** ===== 登录检验-start ===== **/
const username = ref<string>('') // 用户名
const password = ref<string>('') // 密码
function clearPass() {
  password.value = ''
}
function clearName() {
  username.value = ''
}

function handleLogin() {
  if (username.value && password.value) {
    router.push('/loading')
    $message({
      type: 'success',
      message: '登录成功'
    })
  } else {
    $message({
      type: 'warning',
      message: '请输入用户名和密码'
    })
  }
}
/** ===== 登录检验-end ===== **/
</script>

<template>
  <div class="w-[800px] h-[400px] flex">
    <el-card
        class="w-full h-full flex is-never-shadow"
    >
      <div class="w-full h-full grid grid-cols-2">
        <div class="w-full h-full card-bg" />
        <div class="w-full h-full flex justify-center items-center flex-col">
          <div class="w-full h-14 flex login-logo mb-10" />
          <el-form label-width="auto">
            <el-form-item label="用户名">
              <el-input
                  v-model="username"
                  prefix-icon="User"
                  clearable
                  placeholder="请输入用户名"
                  class="w-full"
                  @clear="clearName"
              />
            </el-form-item>
            <el-form-item label="密码">
              <el-input
                  v-model="password"
                  clearable
                  type="password"
                  show-password
                  prefix-icon="Lock"
                  class="w-full"
                  placeholder="请输入密码"
                  @clear="clearPass"
              />
            </el-form-item>
            <el-form-item class="mt-4">
              <el-button @click="handleLogin" class="main_primary_btn w-full">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
@import "@/assets/css/Element-Plus.scss";
:deep(.el-card__body) {
  padding: 0;
  width: 100%;
  height: 100%;
}
.card-bg {
  background-image: url("@/assets/img/login-sw-2.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.login-logo {
  background-image: url("@/assets/img/logo-no-background.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
