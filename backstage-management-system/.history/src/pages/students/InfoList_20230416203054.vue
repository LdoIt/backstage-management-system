<!--
 * @Date: 2023-04-15 21:12:11
-->
<template>
  <div>
    <el-button type="primary" class="add">新增</el-button>
    <el-table :data="infoList" stripe style="width: 100%" border height="570">
        <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
        <el-table-column prop="sex_text" label="性别" align="center"> </el-table-column>
        <el-table-column prop="age" label="年龄" align="center"> </el-table-column>
        <el-table-column prop="father" label="父亲姓名" align="center"> </el-table-column>
        <el-table-column prop="mather" label="母亲姓名" align="center"> </el-table-column>
        <el-table-column prop="time" label="入校时间" align="center"> </el-table-column>
        <el-table-column prop="address" label="地址" align="center" min-width="150px" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center" min-width="120px"> </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="">
            <el-button type="danger" class="el-icon-delete" size="s"></el-button>
            <el-button type="danger" class="el-icon-edit"></el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import {getInfo} from '../../api'
export default {
  data() {
    return {
      infoList: []
    }
  },
  created() {
    this.getInfoList();
  },
  methods: {
    async getInfoList() {
      let res = await getInfo();
      if(res.status === 200 ) this.infoList = res.data.data;
    }
  }
}
</script>

<style>
  .add {
    margin-bottom: 20px;
  }
</style>