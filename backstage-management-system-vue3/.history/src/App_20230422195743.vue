<!--
 * @Date: 2023-04-20 09:25:13
-->
<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside>
        <!-- 左边菜单栏 -->
        <div class="leftMenu">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 10px">
            <el-radio-button :label="false">expand</el-radio-button>
            <el-radio-button :label="true">collapse</el-radio-button>
          </el-radio-group>
          <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>账号管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <template #title>账号列表</template>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>

  <!-- <router-link to="/">login</router-link>
  <router-link to="/home">home</router-link> -->
</template>

<script setup>
// 引入样式重置
import 'normalize.css'
import { ref } from 'vue'
import {
  Menu as IconMenu,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

</script>

<style lang="less">
  html,
  body {
    height: 100%;
    .el-container {
      height: 100%;
      .el-aside {
        height: 100%;
        border-right: solid 1px #dcdfe6;
        .leftMenu {
          height: 100%;
          .el-radio-group {
            height: 6%;
            justify-content: center;
          }
          .el-radio-group {
            width: 100%;
          }
          .el-menu {
            border: none;
            height: 90%;
          }
        }
      }
    }
    
  }

</style>
