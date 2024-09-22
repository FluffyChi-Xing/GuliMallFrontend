<script setup lang="ts">
import { useRouter } from "vue-router";
import {onMounted} from "vue";


const router = useRouter();

/** ===== 加载页跳转-start ===== **/
function handleJump() {
  setTimeout(() => {
    router.replace('/')
  }, 2000)
}

onMounted(() => {
  handleJump()
})
/** ===== 加载页跳转-end ===== **/
</script>

<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <div class="cubes">
      <div class="sk-cube sk-cube1"></div>
      <div class="sk-cube sk-cube2"></div>
      <div class="sk-cube sk-cube3"></div>
      <div class="sk-cube sk-cube4"></div>
      <div class="sk-cube sk-cube5"></div>
      <div class="sk-cube sk-cube6"></div>
      <div class="sk-cube sk-cube7"></div>
      <div class="sk-cube sk-cube8"></div>
      <div class="sk-cube sk-cube9"></div>
    </div>
  </div>
</template>

<style scoped>
/*  begin cubes css */

.cubes {
  width: 100px;
  height: 100px;
  margin: 100px auto;
}

.cubes .sk-cube {
  width: 33%;
  height: 33%;
  background-color: theme('colors.primary');
  float: left;
  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
}

.cubes .sk-cube1 {
  animation-delay: 0.2s;
}

.cubes .sk-cube2 {
  animation-delay: 0.3s;
}

.cubes .sk-cube3 {
  animation-delay: 0.4s;
}

.cubes .sk-cube4 {
  animation-delay: 0.1s;
}

.cubes .sk-cube5 {
  animation-delay: 0.2s;
}

.cubes .sk-cube6 {
  animation-delay: 0.3s;
}

.cubes .sk-cube7 {
  animation-delay: 0s;
}

.cubes .sk-cube8 {
  animation-delay: 0.1s;
}

.cubes .sk-cube9 {
  animation-delay: 0.2s;
}

@keyframes sk-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    transform: scale3D(1, 1, 1);
  }
  35% {
    transform: scale3D(0, 0, 1);
  }
}
</style>
