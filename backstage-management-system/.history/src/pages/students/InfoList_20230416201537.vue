<!--
 * @Date: 2023-04-15 21:12:11
-->
<template>
  <div>
    <el-table :data="infoList" stripe style="width: 100%" border height="515">
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>