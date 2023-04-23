<!--
 * @Date: 2023-04-20 09:25:13
-->
<template>
  <el-container>
    <el-header>
      <div class="title">后台管理系统</div>
      <span>欢迎您：{{ username }}</span>
      <el-button type="danger" class="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside>
        <!-- 左边菜单栏 -->
        <div class="leftMenu">
          <el-radio-group v-model="isCollapse">
            <el-radio-button :label="false">expand</el-radio-button>
            <el-radio-button :label="true">collapse</el-radio-button>
          </el-radio-group>
          <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" router>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><Avatar /></el-icon>
                <span>账号管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/home/account">账号列表</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><UserFilled /></el-icon>
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
import store from '../store'
const isCollapse = ref(true)
let username = ref('')
onMounted( () => {
  username.value = store.userInfo.state
})
</script>

<style lang="less">
  html,
  body {
    height: 100%;
    .el-header {
      border-bottom: solid 1px #dcdfe6;
      .title {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        text-align: center;
        font: 800 30px '微软雅黑';
        width: 250px;
      }
      .logout {
        float: right;
        margin: 15px 0;
      }
    }
    .el-container {
      height: 100%;
      .el-aside {
        height: 100%;
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
