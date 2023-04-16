<!--
 * @Date: 2023-04-15 08:31:12
-->
<template>
  <div>
    <el-form status-icon  label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      
    }
  }
}
</script>

<style></style>
