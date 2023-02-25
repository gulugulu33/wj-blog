<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Introduction from './views/Introduction.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <Introduction></Introduction>
      </el-aside>
      <el-container>
        <el-header class="header"></el-header>
        <el-main class="main">Main</el-main>
        <!-- <el-footer class="footer"></el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  background-color: #f7f8f9;
}
.aside {
  background-color: white;
  height: 90vh;
  width: 300px;
  margin: 30px;
  border-radius: 20px;
}
.main {
  background-color: white;
  height: 90vh;
  flex: 1;
  border-radius: 20px;
  margin: 30px 30px 30px 10px;
}

.header {
  background-color: white;
  border-radius: 20px;
}
.footer {
  background-color: white;
  border-radius: 20px;
}
</style>
