<!--
 * @Date: 2023-04-22 18:34:09
-->
<template>
  <div class="role">
    <!-- 搜索 -->
    <div class="search">
      <el-input
        v-model="search"
        class="w-50 m-2"
        placeholder="请输入搜索内容"
        :suffix-icon="Search"
        autofocus
      />
      <el-button type="primary" style="margin-left: 10px">创建用户</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="600" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick"
            >Detail</el-button
          >
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
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