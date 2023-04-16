<!--
 * @Date: 2023-04-15 21:12:11
-->
<template>
  <div>
    <template>
      <!-- <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table> -->
    </template>
  </div>
</template>

<script>
import {getStudentList} from '../../api'
export default {
  data() {
    return {
      studentList: []
    }
  },
  created() {
    getStudentList().then(res => {
      console.log(res)
    });
  }
}
</script>

<style></style>
