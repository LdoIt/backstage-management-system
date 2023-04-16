<!--
 * @Date: 2023-04-15 08:31:12
-->
<template>
  <div>
    <el-card>
      <el-form :model="form" :rules="rules">
        <h2>请登录</h2>
        <el-form-item label="用户名">
          <el-input v-model="form.username" prop="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" prop="password"></el-input>
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
    const validateUsername = (rule, value, callback) => {
      if (value == '') {
        // console.log(rule);
        callback(new Error('用户名不能为空'));
      }else {
        callback();
      }
    }
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username:[{validator: validateUsername, trigger: 'blur'}],
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
