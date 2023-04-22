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
          <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose" router>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>账号管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/account">账号列表</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><icon-menu /></el-icon>
                <span>角色管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/role">角色列表</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
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

</script>

<style lang="less">
</style>
