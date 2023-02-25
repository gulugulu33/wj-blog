<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Introduction from './views/Introduction.vue'

import { onMounted, onUnmounted, ref } from 'vue'

const tabPosition = ref('left')
const percentage = ref(0)

let timer: any = null

const customColors = [
  { color: 'pink', percentage: 20 },
  { color: 'yellow', percentage: 30 },
  { color: 'lightgreen', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: 'yellowgreen', percentage: 80 },
  { color: 'plum', percentage: 90 },
  { color: '#6f7ad3', percentage: 100 }
]

onMounted(() => {
  timer = setInterval(() => {
    percentage.value += 10
    if (percentage.value === 100) {
      percentage.value = 10
    }
  }, 1000)
})

onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <Introduction></Introduction>
        <el-tabs :tab-position="tabPosition" style="height: 180px" class="demo-tabs">
          <el-tab-pane label="主页" class="link">
            <router-link to="/">Home</router-link>
          </el-tab-pane>
          <el-tab-pane label="Page" class="link">
            <router-link to="/page">Page</router-link>
          </el-tab-pane>
          <el-tab-pane label="Role" class="link">Role</el-tab-pane>
          <el-tab-pane label="Task" class="link">Task</el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-progress :percentage="percentage" :color="customColors" />
        </el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
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
  padding-top: 23px;
  background-color: white;
  border-radius: 20px;
}
.footer {
  background-color: white;
  border-radius: 20px;
}

.demo-tabs {
  margin-top: 30px;
  margin-left: 10px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}

a {
  text-decoration: none !important;
  /* color: khaki !important; */
}

.link {
  margin: 20px 0 0 20px !important;
}
</style>
