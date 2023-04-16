<!--
 * @Date: 2023-04-15 21:12:11
-->
<template>
  <div>
    <template>
      <el-table :data="studentList" stripe style="width: 100%">
        <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
        <el-table-column prop="sex" label="性别" align="center"> </el-table-column>
        <el-table-column prop="age" label="年龄" align="center"> </el-table-column>
        <el-table-column prop="id" label="学号" align="center"> </el-table-column>
        <el-table-column prop="class" label="班级" align="center"> </el-table-column>
        <el-table-column prop="state" label="状态" align="center"> </el-table-column>
        <el-table-column prop="address" label="地址" align="center"> </el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center" width="100px"> </el-table-column>
        <el-table-column label="操作" width="180"> </el-table-column>
      </el-table>
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
      if(res.status == 200) {
        this.studentList = res.data.data;
        // this.studentList.forEach(item => {

        // })
      }
    });
  }
}
</script>

<style></style>
