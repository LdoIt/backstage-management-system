<!--
 * @Date: 2023-04-15 21:12:11
-->
<template>
  <div>
    <el-table :data="infoList.slice((currentPage - 1) * currentSize, currentPage * currentSize)" stripe style="width: 100%" border height="515">
        <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
        <el-table-column prop="sex_text" label="性别" align="center"> </el-table-column>
        <el-table-column prop="age" label="年龄" align="center"> </el-table-column>
        <el-table-column prop="father" label="父亲姓名" align="center"> </el-table-column>
        <el-table-column prop="mather" label="母亲姓名" align="center"> </el-table-column>
        <el-table-column prop="time" label="入校时间" align="center"> </el-table-column>
        <el-table-column prop="address" label="地址" align="center" show-overflow-tooltip> </el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>