<script setup lang="ts">
import LoginForm from "@/views/LoginPage/_components/LoginForm.vue";
</script>

<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center login-bg">
    <LoginForm />
  </div>
</template>

<style scoped>
.login-bg {
  background-image: url("@/assets/img/login-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
