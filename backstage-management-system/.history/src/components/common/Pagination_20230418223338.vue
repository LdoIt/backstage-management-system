<!--
 * @Date: 2023-04-18 22:07:44
-->
<template>
  <div class="block" style="">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100" layout="total, sizes, prev, pager, next, jumper"
      :total="total"></el-pagination>
    </div>
</template>

<script>
import {pagingQuery} from '@/api'
export default {
  data() {
    return {
      currentPage: 1, // 当前页
      currentSize: 5, // 当前的每页条数
      total: 0, // 数据总条数
    }
  },
  created() {
    this.handleCurrentChange(1)
  },
  methods: {
    handleSizeChange(val) {
      this.$parent.currentSize = val;
      pagingQuery(this.currentPage, this.currentSize).then(res => {
        this.currentWorkList = res.data.data
      })
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      pagingQuery(this.currentPage, this.currentSize).then(res => {
        this.total = res.data.total
        this.$parent.currentWorkList = res.data.data
        this.$parent.currentWorkList.forEach((item) => {
          item[completed + '_text'] = item.completed ? '完成' : '未完成';
        })
      })
    },
  }
}
</script>

<style>

</style>