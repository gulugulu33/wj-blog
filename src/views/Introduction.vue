<template>
  <div class="demo-type">
    <div>
      <el-avatar
        src="https://img-blog.csdnimg.cn/5d67199980614a1ab03ebdfadcc99aed.png"
        :size="100"
        class="avatar"
      />
      <el-icon style="position: absolute; top: 45px"><Star /></el-icon>
      <el-icon style="position: absolute; top: 90px; left: 80px"><Star /></el-icon>
      <strong
        style="display: block; font-size: 18px; padding-bottom: 10px; color: rgb(205, 205, 239)"
        >3speech</strong
      >
      <div v-for="(item, index) in SchoolList" class="school">
        {{ item }}
      </div>
      <div class="tab" style="margin-top: 6px">
        <el-icon><OfficeBuilding /></el-icon>
        &nbsp;网易有道
      </div>
      <div class="tab" style="margin-bottom: 3px">
        <el-icon><Location /></el-icon>
        &nbsp;福建 - 三明
      </div>
      <div class="tab">
        <el-icon><Message /></el-icon>
        &nbsp;95722807@qq.com
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const SchoolList = ['U专在读', '2020.9 - 2024.6']
</script>

<style scoped>
.demo-type {
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}

.avatar {
  margin: 50px 0 15px 0;
}

.school {
  font-size: 14px;
  padding: 3px;
  text-align: center;
}

.tab {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  font-size: 14px;
}

.icon {
  display: inline-block;
}
</style>
