<!--
 * @Date: 2023-04-22 18:34:09
-->
<template>
  <div class="role">
    <div class="demo-input-suffix">
      <el-input
        v-model="search"
        class="w-50 m-2"
        placeholder="请输入搜索内容"
        :suffix-icon="Search"
        max="1"
      />
    </div>
  </div>
</template>

<script setup>
  import { Calendar, Search } from '@element-plus/icons-vue'
  let search = ref('')
</script>

<style>
.role {
  margin: 20px 0;
}
</style>