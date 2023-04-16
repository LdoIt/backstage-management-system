<template>
  <div class="appContainer">
    <router-view></router-view>
  </div>
</template>

<script>
// 格式化样式
import 'normalize.css'
export default {
}
</script>

<style lang="scss" scoped>
.appContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
  // .appContainer {
  //   height: 100%;
  // }
</style>