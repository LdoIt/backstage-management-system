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
export default {

}
</script>

<style>

</style>