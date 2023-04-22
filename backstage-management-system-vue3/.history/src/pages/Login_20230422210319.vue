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
        <el-form ref="ruleFormRef" status-icon label-width="150px" class="demo-ruleForm" style="width: 60%">
          <el-form-item label="用户名">
            <el-input type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script setup></script>

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
