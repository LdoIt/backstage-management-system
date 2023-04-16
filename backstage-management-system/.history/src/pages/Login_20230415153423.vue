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
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
  </el-card>
  </div>
</template>

<script>
import {validateUsername, validatePassword} from '../utils/validate'
import {setToken} from '../utils/setGetRemoveToken'
export default {
  name: 'Login',
  data() {
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
          this.axios.post('/api2/login', this.form).then(res => {
            setToken('token', res.data.token);
            this.$message({
              message: '登录成功',
              type: 'success'
            });
            this.$router.push('/home')
          })
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
