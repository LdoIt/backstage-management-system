<!--
 * @Date: 2023-04-15 21:12:11
-->
<template>
  <div>
    <template>
      <el-table :data="studentList" stripe style="width: 100%" border>
        <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
        <el-table-column prop="sex_text" label="性别" align="center"> </el-table-column>
        <el-table-column prop="age" label="年龄" align="center"> </el-table-column>
        <el-table-column prop="id" label="学号" align="center"> </el-table-column>
        <el-table-column prop="class" label="班级" align="center"> </el-table-column>
        <el-table-column prop="state_text" label="状态" align="center"> </el-table-column>
        <el-table-column prop="address" label="地址" align="center" min-width="150px"> </el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center" min-width="120px"> </el-table-column>
        <el-table-column label="操作" width="180"><el-button type="danger" class="el-icon-delete">删除</el-button></el-table-column>
      </el-table>
    </template>
    <div class="block">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100" layout="total, sizes, prev, pager, next, jumper"
      :total="400"></el-pagination>
    </div>
  </div>
</template>

<script>
import { getStudentList } from '../../api'
export default {
  data() {
    return {
      studentList: [],
      currentPage: 1 // 当前页
    }
  },
  created() {
    getStudentList().then(res => {
      if (res.status == 200) {
        this.studentList = res.data.data
        this.studentList.forEach(item => {
          // 将状态值转换成文本，最好不要改变原数据中的内容，新添加了个字段
          item.sex_text = item.sex == 2 ? '女' : '男';
          item.state_text = item.state == '1' ? '已入学' : 
          item.state == '2' ? '未入学':'休学中'
        })
      }
    })
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style></style>
