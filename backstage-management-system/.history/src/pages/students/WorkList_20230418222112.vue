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
        <el-table-column prop="completed" label="完成情况" align="center"> </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <Pagination :currentWorkList="currentWorkList"/>
    <!-- <div class="block" style="">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100" layout="total, sizes, prev, pager, next, jumper"
      :total="total"></el-pagination>
    </div> -->
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
      // currentWorkList: [], // 当前页的数据
      // currentPage: 1, // 当前页
      // currentSize: 5, // 当前的每页条数
      // total: 0, // 数据总条数
    }
  },
  created() {
    // this.handleCurrentChange(1)
  },
  // methods: {
  //   handleSizeChange(val) {
  //     this.currentSize = val;
  //     pagingQuery(this.currentPage, this.currentSize).then(res => {
  //       this.currentWorkList = res.data.data
  //     })
  //   },
  //   handleCurrentChange(val) {
  //     this.currentPage = val;
  //     pagingQuery(this.currentPage, this.currentSize).then(res => {
  //       this.total = res.data.total
  //       this.currentWorkList = res.data.data
  //     })
  //   },
  // }
}
</script>

<style>
  .el-pagination {
      display: flex;
      margin-top: 20px;
      justify-content: center;
    }
</style>