<!--
 * @Date: 2023-04-15 08:31:12
-->
<template>
  <div>
    <el-card>
      <el-form :model="form" :rules="rules" label-width="100px" class="demo-ruleForm">
        <h2>请登录</h2>
        <el-form-item label="用户名" v-model="form.username">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码"  v-model="form.password">
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
    // const validateUsername = (rule, value, callback) => {
    //   console.log(rule);
    //   console.log(value);
    //   console.log(callback);
    // }
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        // username:[{validator: validateUsername, trigger: 'blur'}]
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
