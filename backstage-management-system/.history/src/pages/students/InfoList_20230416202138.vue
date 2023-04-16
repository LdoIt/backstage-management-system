<!--
 * @Date: 2023-04-15 21:12:11
-->
<template>
  <div>
    <el-button type="primary" class="add">新增</el-button>
    <el-table :data="infoList" stripe style="width: 100%" border height="630">
        <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
        <el-table-column prop="sex_text" label="性别" align="center"> </el-table-column>
        <el-table-column prop="age" label="年龄" align="center"> </el-table-column>
        <el-table-column prop="id" label="学号" align="center"> </el-table-column>
        <el-table-column prop="class" label="班级" align="center"> </el-table-column>
        <el-table-column prop="state_text" label="状态" align="center"> </el-table-column>
        <el-table-column prop="address" label="地址" align="center" min-width="150px" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center" min-width="120px"> </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="">
            <el-button type="danger" class="el-icon-delete"></el-button>
            <el-button type="danger" class="el-icon-edit"></el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoList: []
    }
  }

}
</script>

<style>
  .add {
    margin-bottom: 20px;
  }
</style>