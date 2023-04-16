<!--
 * @Date: 2023-04-15 08:31:12
-->
<template>
  <div class="homeContainer">
    <el-container>
      <el-header><Header /></el-header>
      <el-container>
        <el-aside><Menu /></el-aside>
        <el-container>
          <el-main>
            <el-card>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(route, index) in this.$route.matched" :key="index">{{ route.name }}</el-breadcrumb-item>
              </el-breadcrumb>
            </el-card>
            <!-- 这里的页面是根据菜单栏动态切换的 -->
            <div class="mianIfo"><router-view></router-view></div>
          </el-main>
          <el-footer><el-card><Footer /></el-card></el-footer>
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
    background-color: #1d74b9;
  }
  .el-aside {
    background-color: #1d74b9;
  }
  .el-container {
    height: 100%;
    .el-footer {
      position: absolute;
      bottom: 0;
    }
    .mianIfo {
      margin: 20px 0;
    }
  }
  .el-footer {
    padding: 0;
  }
}
</style>
