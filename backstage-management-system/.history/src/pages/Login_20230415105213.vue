<!--
 * @Date: 2023-04-15 08:31:12
-->
<template>
  <div>
    <el-card>
      <el-form :model="form" :rules="rules" ref="form">
        <h2>请登录</h2>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
  </el-card>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    // 用户名验证
    const validateUsername = (rule, value, callback) => {
      let reg = /^[a-zA-Z0-9]{4,16}$/
      if (value == '') {
        callback(new Error('用户名不能为空'));
      }else if(!reg.test(value)) {
        callback(new Error('用户名只能是大小写字母和数字4-16位'));
      }else {
        callback();
      }
    }
    // 密码验证
    const validatePassword = (rule, value, callback) => {
      let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
      if (value == '') {
        callback(new Error('密码不能为空'));
      }else if(!reg.test(value)) {
        callback(new Error('至少8-16个字符，至少1个大写字母，1个小写字母和1个数字'));
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
        password:[{validator: validatePassword, trigger: 'blur'}],
      }
    }
  },
  methods: {
    submit() {
      this.$refs['form'].validate((valid) => {
        if(valid) {
          console.log('表单验证通过');
          console.log(this)
        }else {
          return
        }
      })
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
