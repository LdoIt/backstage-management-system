<!--
 * @Date: 2023-04-15 21:12:11
-->
<template>
  <div class="tableCon">
    <template>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input v-model="formInline.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="studentList.slice((currentPage - 1) * currentSize, currentPage * currentSize).filter(data => !search || data.name.includes(search))" stripe style="width: 100%" border height="575">
        <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
        <el-table-column prop="sex_text" label="性别" align="center"> </el-table-column>
        <el-table-column prop="age" label="年龄" align="center"> </el-table-column>
        <el-table-column prop="id" label="学号" align="center"> </el-table-column>
        <el-table-column prop="class" label="班级" align="center"> </el-table-column>
        <el-table-column prop="state_text" label="状态" align="center"> </el-table-column>
        <el-table-column prop="address" label="地址" align="center" min-width="150px" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center" min-width="120px"> </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot="header">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button type="danger" class="el-icon-delete" @click="delStudent(scope.row.id)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
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
import { getStudentList, delStudent } from '../../api'
export default {
  data() {
    return {
      studentList: [],
      currentPage: 1, // 当前页
      total: 0, // 数据总数
      currentSize: 5, // 当前每页的条数
      search: '',
      formInline: { // 用姓名查询全部数据
          name: ''
        }
    }
  },
  created() {
    // 获取学生列表
    this.getStudentInfo();
  },
  methods: {
    handleSizeChange(val) {
      this.currentSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    // 发请求拿学生数据
    getStudentInfo() {
      getStudentList().then(res => {
        if (res.status == 200) {
          this.studentList = res.data.data
          this.total = this.studentList.length
          this.studentList.forEach(item => {
            // 将状态值转换成文本，最好不要改变原数据中的内容，新添加了个字段
            item.sex_text = item.sex == 2 ? '女' : '男';
            item.state_text = item.state == '1' ? '已入学' : 
            item.state == '2' ? '未入学':'休学中'
          })
        }
    })
    },
    // 删除学生
    delStudent(id) {
      delStudent(id)
      this.getStudentInfo();
    }
  }
}
</script>

<style lang="scss">
  .tableCon {
    height: 100%;
    .el-pagination {
      display: flex;
      margin-top: 20px;
      justify-content: center;
    }
  }
</style>
