<!--
 * @Date: 2023-04-20 09:25:13
-->
<template>
  <router-link to="/">login</router-link>
  <router-link to="/home">home</router-link>
  <router-view></router-view>
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
