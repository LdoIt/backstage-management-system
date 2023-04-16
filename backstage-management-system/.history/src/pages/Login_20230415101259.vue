<!--
 * @Date: 2023-04-15 08:31:12
-->
<template>
  <div>
    <el-card>
      <el-form :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
        <h2>请登录</h2>
        <el-form-item label="用户名" v-model="ruleForm.username">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码"  v-model="ruleForm.password">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
  </el-card>
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
      },
      rules: {
        username:[{validator: validateUsername, trigger: 'blur'}]
      }
    }
  }
}
</script>

<style>
  .el-card {
    width: 400px;
    height: 400px;
    margin: 200px auto;
    .el-form-item {
      margin: 35px 0;
      .el-button {
        width: 100%;
      }
    }
  }
</style>
