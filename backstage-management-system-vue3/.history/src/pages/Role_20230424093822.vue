<!--
 * @Date: 2023-04-22 18:34:09
-->
<template>
  <div class="role">
    <div class="demo-input-suffix">
      <el-input
        class="w-50 m-2"
        placeholder="请输入搜索内容"
        :suffix-icon="Search"
      />
    </div>
  </div>
</template>

<script setup>
  import { Calendar, Search } from '@element-plus/icons-vue'
</script>

<style>
.role {
  margin: 20px 0;
}
</style>