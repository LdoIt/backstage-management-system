<!--
 * @Date: 2023-04-15 08:31:12
-->
<template>
  <div>
    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" v-model="ruleForm.username">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="密码"  v-model="ruleForm.password">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style></style>
