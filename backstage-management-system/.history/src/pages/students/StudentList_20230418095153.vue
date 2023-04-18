<!--
 * @Date: 2023-04-15 21:12:11
-->
<template>
  <div class="tableCon">
    <template>

      <!-- 表单 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="formInline.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="find">查询</el-button>
          <el-button type="primary" @click="reset">重置</el-button>
        </el-form-item> 
      </el-form>

      <!-- 表格数据 -->
      <el-table :data="studentList.slice((currentPage - 1) * currentSize, currentPage * currentSize).filter(data => !search || data.name.includes(search))" stripe style="width: 100%" border height="515">
        <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
        <el-table-column prop="sex_text" label="性别" align="center"> </el-table-column>
        <el-table-column prop="age" label="年龄" align="center"> </el-table-column>
        <el-table-column prop="id" label="学号" align="center"> </el-table-column>
        <el-table-column prop="class" label="班级" align="center"> </el-table-column>
        <el-table-column prop="state_text" label="状态" align="center"> </el-table-column>
        <el-table-column prop="address" label="地址" align="center" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center"> </el-table-column>
        <el-table-column label="操作" align="center" min-width="100px">
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
import { getStudentList, delStudent } from '../../api'
import {getTableList} from '@/utils/table.js'
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
      getTableList(getStudentList, 'studentList', 'total', ['sex', 'state'], this)
    },
    // 删除学生
    delStudent(id) {
      
      
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
          try {
            let res = await delStudent(id)
            this.getStudentInfo();
            this.$message({message: res.data.message, type: 'success'})
          } catch (error) {
            this.$message({message: res.data.message, type: 'warning'})
          }
      }).catch(() => {this.$message({type: 'info', message: '已取消删除'});});
    },
    // 查询数据
    find() {
      // 自己封装一个方法，不调接口
      if(this.formInline.name == '') return;
      let indexArr = [];
      // 数组或对象不能直接赋值，否则会有问题，浅拷贝
      let info = JSON.parse(JSON.stringify(this.studentList));
      this.studentList.forEach((data, index) => {
        if(!data.name || data.name.includes(this.formInline.name)) indexArr.push(index)
      })
      this.studentList.splice(0);
      for(let i = 0; i < indexArr.length; i++) {
        this.studentList.push(info[indexArr[i]])
      }
      this.total = this.studentList.length;
    },
    reset() {
      this.search = ''
      this.formInline.name = ''
      this.getStudentInfo()
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
