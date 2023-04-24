<!--
 * @Date: 2023-04-20 09:25:13
-->
<template>
  <div class="appContainer">
    <router-view></router-view>
  </div>
</template>

<script setup>
// import Home from './pages/Home.vue'
// 引入样式重置
import 'normalize.css'
</script>

<style lang="less">
  .appContainer {
    height: 100%;
  }
</style>
