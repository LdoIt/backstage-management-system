<!--
 * @Date: 2023-04-22 16:07:11
-->
<template>
  <div class="appContainer">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>登录</span>
        </div>
      </template>
      <div class="text item">
        <el-form :model="form" :rules="formrules" ref="formRef" status-icon label-width="120px" class="demo-ruleForm" style="width: 80%">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-button style="margin-top: 20px" type="primary" @click="submitForm(formRef)">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script setup>
  import {ref, reactive} from 'vue'
  import {useRouter} from 'vue-router'
  import { ElMessage } from 'element-plus'
  // 引入用store
  import store from '../store'

  // 存储form中的数据
  let form = reactive({
    username: 'admin',
    password: '123wQWE'
  })
  // 拿到表单DOM
  const formRef = ref()
  // 编程式导航
  const router = useRouter();
  // 自定义校验规则
  const validateUsername = (rule, value, callback) => {
    if(!value) {
      callback(new Error('不允许为空值'))
    }else {
      callback()
    }
  }
  const validatePassword = (rule, value, callback) => {
    let reg = /^(?![A-Za-z]+$)(?![A-Z\d]+$)(?![A-Z\W]+$)(?![a-z\d]+$)(?![a-z\W]+$)(?![\d\W]+$)\S{6,}$/;
    if(!value) {
      callback(new Error('不允许为空值'))
    }else if(!reg.test(value)) {
      callback(new Error('至少6位，包含大小写字母，数字，特殊字符中的三种'))
    }else {
      callback()
    }
  }
  // 登录按钮
  const submitForm = (formRef) => {
    formRef.validate((valid) => {
      if(valid) {
        store.dispatch('userInfo/increment', form.username)
        return router.push('/home');
      }else {
        ElMessage.error('不符合验证规则，请重新输入！！')
      }
    })
  }
  let formrules = reactive({
    username: [
    { validator: validateUsername, trigger: 'blur' }
    ],
    password: [
    { validator: validatePassword, trigger: 'blur' }
    ]
  })
</script>

<style>
html,
body {
  height: 100%;
}
.appContainer {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
}
.el-card {
  margin: 0 auto;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
