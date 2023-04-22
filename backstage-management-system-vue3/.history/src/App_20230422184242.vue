<!--
 * @Date: 2023-04-20 09:25:13
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>

  <!-- <router-link to="/">login</router-link>
  <router-link to="/home">home</router-link> -->
  
</template>

<script>
// 引入样式重置
import 'normalize.css'
export default {
  name: 'App',
  setup() {

  }
}
</script>

<style>
</style>
