<!--
 * @Date: 2023-04-15 20:04:31
-->
<template>
  <div class="muenContainer">
    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#1d74b9" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1" v-for="">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: []
    }
  },
  created() {
    let routes = this.$router.options.routes;
    for (let i = 0; i < routes.length; i++) {
      if(i !== 0 || i !== routes.length - 1) {
        this.routes.push = routes[i]
      }
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
  .muenContainer {
    width: 100%;
    height: 100%;
    .el-menu {
      border: none;
    }
  }
</style>
