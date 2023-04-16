<!--
 * @Date: 2023-04-15 20:04:31
-->
<template>
  <div class="muenContainer">
    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#1d74b9" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu :index="item1.name" v-for="(item1, index1) in routes" :key="index1">
        <template slot="title">
          <i :class="item1.iconClass"></i>
          <span>{{item1.name}}</span>
        </template>
        <el-menu-item-group v-for="(child, index2) in item1.children" :key="index2">
          <el-menu-item :index="child.name">
            <i :class="child.iconClass"></i>
            {{ child.name }}
          </el-menu-item>
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
      if(i !== 0 && i !== routes.length - 1) {
        this.routes.push(routes[i]);
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
