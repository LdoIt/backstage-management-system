<!--
 * @Date: 2023-04-15 21:12:11
-->
<template>
  <div>
    <!-- 表格 -->
    <el-table :data="workList" stripe style="width: 100%" border height="515">
        <el-table-column prop="id" label="姓名" align="center"> </el-table-column>
        <el-table-column prop="userId" label="性别" align="center"> </el-table-column>
        <el-table-column prop="title" label="年龄" align="center"> </el-table-column>
        <el-table-column prop="completed" label="父亲姓名" align="center"> </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <div class="block" style="">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100" layout="total, sizes, prev, pager, next, jumper"
      :total="total"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workList: [], // 作业列表
      currentPage: 1, // 当前页
      currentSize: 5, // 当前的每页条数
    }
  },
  methods: {
    handleSizeChange(val) {

    },
    handleCurrentChange(val) {

    },
  }
}
</script>

<style>

</style>