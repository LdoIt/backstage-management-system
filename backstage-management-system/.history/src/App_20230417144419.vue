<!--
 * @Date: 2023-04-13 17:21:53
-->
<template>
  <div class="appContainer">
    <el-progress :percentage="50"></el-progress>
    <router-view></router-view>
  </div>
</template>

<script>
// 格式化样式
import 'normalize.css'
// 引入图标
import 'font-awesome/css/font-awesome.min.css';
export default {
}
</script>

<style lang="scss">
html,
body,
.appContainer {
  height: 100%;
}
// .appContainer {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// }
</style>