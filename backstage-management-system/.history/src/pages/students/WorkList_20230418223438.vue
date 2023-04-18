<!--
 * @Date: 2023-04-15 21:12:11
-->
<template>
  <div>
    <!-- 表格 -->
    <el-table :data="currentWorkList" stripe style="width: 100%" border height="515">
        <el-table-column prop="id" label="用户ID" align="center"> </el-table-column>
        <el-table-column prop="userId" label="所属班级" align="center"> </el-table-column>
        <el-table-column prop="title" label="作业名称" align="center"> </el-table-column>
        <el-table-column prop="completed_text" align="center"> </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <Pagination/>
  </div>
</template>

<script>
// import {pagingQuery} from '@/api'
import Pagination from '@/components/common/Pagination'
export default {
  components: {
    Pagination
  },
  data() {
    return {
      currentWorkList: [], // 当前页的数据
    }
  },
}
</script>

<style>
  .el-pagination {
      display: flex;
      margin-top: 20px;
      justify-content: center;
    }
</style>