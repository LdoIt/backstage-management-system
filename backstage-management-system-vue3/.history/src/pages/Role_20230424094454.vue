<!--
 * @Date: 2023-04-22 18:34:09
-->
<template>
  <div class="role">
    <div class="search">
      <el-input
        v-model="search"
        class="w-50 m-2"
        placeholder="请输入搜索内容"
        :suffix-icon="Search"
        autofocus
      />
    </div>
  </div>
</template>

<script setup>
  import { Calendar, Search } from '@element-plus/icons-vue'
  import {ref} from 'vue'
  let search = ref('')
</script>

<style lang="less">
.role {
  margin: 20px 0;
  .search {
    .el-input {
      width: 200px;
    }
  }
}
</style>