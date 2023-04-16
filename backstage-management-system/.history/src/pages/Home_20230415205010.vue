<!--
 * @Date: 2023-04-15 08:31:12
-->
<template>
  <div class="homeContainer">
    <el-container>
      <el-header><Header/></el-header>
      <el-container>
        <el-aside><Menu/></el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer><Footer/></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Footer from '../components/common/Footer.vue'
import Header from '../components/common/Header.vue'
import Menu from '../components/common/Menu.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Menu
  }
}
</script>

<style lang="scss">
  .homeContainer {
    height: 100%;
    .el-header {
      background-color: #37414c;
    }
    .el-aside {
      background-color: #37414c;
    }
    .el-container {
      height: 100%;
    }
  }
</style>
