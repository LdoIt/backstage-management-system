<!--
 * @Date: 2023-04-22 18:34:09
-->
<template>
  <div class="role">
    <!-- 搜索 -->
    <div class="search">
      <el-input
        v-model="data.search"
        class="w-50 m-2"
        placeholder="请输入搜索内容"
        :suffix-icon="Search"
        autofocus
      />
      <el-button type="primary" style="margin-left: 10px">创建用户</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="roleList" style="width: 100%">
      <el-table-column fixed prop="date" label="Date" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="state" label="State" />
      <el-table-column prop="city" label="City" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column fixed="right" label="Operations" >
        <template #default>
          <el-button link type="primary" size="small" >Detail</el-button>
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
  import { Calendar, Search } from '@element-plus/icons-vue'
  import { onMounted, reactive } from 'vue'
  import {reqGetRoleList} from '../api'
  const data = reactive({
    search: '',
    roleList: [],
  })
  let roleList = reactive([])
  onMounted(() => {
    reqGetRoleList().then(res => {
      // data.roleList = res.data;
      roleList = res.data;
    })
  })
</script>

<style lang="less">
.role {
  margin: 20px 0;
  .search {
    margin-bottom: 15px;
    .el-input {
      width: 200px;
    }
  }
}
</style>