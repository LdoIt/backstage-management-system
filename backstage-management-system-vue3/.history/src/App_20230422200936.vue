<!--
 * @Date: 2023-04-20 09:25:13
-->
<template>
  <el-container>
    <el-header><div class="title">后台管理系统</div></el-header>
    <el-container>
      <el-aside>
        <!-- 左边菜单栏 -->
        <div class="leftMenu">
          <el-radio-group v-model="isCollapse">
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
    .title {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      text-align: center;
      font: 800 35px '微软雅黑';
      width: 250px;
    }
    .el-container {
      height: 100%;
      .el-aside {
        height: 100%;
        border-top: solid 1px #dcdfe6;
        border-right: solid 1px #dcdfe6;
        .leftMenu {
          height: 100%;
          .el-radio-group {
            margin: 7px 0;
            width: 100%;
            justify-content: center;
          }
          .el-menu {
            border: none;
          }
        }
      }
    }
    
  }

</style>
