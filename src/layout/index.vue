<script setup lang="ts">
import Default from "@/layout/default.vue";
import TopHeader from "@/layout/TopHeader.vue";
</script>

<template>
  <div class="w-screen h-screen flex bg-[#F0F2F5]">
    <el-container class="w-full h-full">
      <el-aside width="200px">
        <!-- default menu -->
        <default />
      </el-aside>
      <el-container>
        <el-header>
          <!-- header pane -->
          <TopHeader />
        </el-header>
        <el-main>
          <!-- main page -->
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
:deep(.el-header) {
  padding: 0;
}
</style>
