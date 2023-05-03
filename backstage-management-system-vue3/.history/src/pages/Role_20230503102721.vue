<!--
 * @Date: 2023-04-22 18:34:09
-->
<template>
  <div class="role">
    <!-- 搜索 -->
    <div class="search">
      <el-input
        v-model="data.search"
        class="w-50 m-2"
        placeholder="请输入搜索内容"
        :suffix-icon="Search"
        autofocus
        @keyup.enter="search"
      />
      <el-button type="primary" style="margin-left: 10px" @click="reset">重置</el-button>
      <el-button type="primary" style="margin-left: 10px">创建用户</el-button>
    </div>
    
    <!-- 表格 -->
    <el-table :data="data.roleList" style="width: 100%">
      <el-table-column fixed prop="date" label="Date" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="state" label="State" />
      <el-table-column prop="city" label="City" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column fixed="right" label="Operations" >
        <template #default>
          <el-button link type="primary" size="small" >Detail</el-button>
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
  import { Calendar, Search } from '@element-plus/icons-vue'
  import { onMounted, reactive } from 'vue'
  import {reqGetRoleList} from '../api'
  const data = reactive({
    search: '',
    roleList: [],
  })
  // let roleList = reactive([])
  onMounted(() => {
    reqGetRoleList().then(res => {
      // roleList = res.data; // vue 中这种赋值给一个对象或者数组会导致视图不会更新，虽然vue中数据是改变了，需要使用下面这一行代码，或使用下面第二行代码
      // roleList.push(...res.data);
      data.roleList = res.data // 这种赋值防止会被vue检测的到，视图也会及时更新
    })
  })
  function search() {
    let arr = []
    let count = 0;
    data.roleList.forEach(item => {
      if(item.name == data.search) {
        arr.push(item)
        count++
      }
    })
    if(count > 0) {
      data.roleList.splice(0, data.roleList.length);
      data.roleList.push(...arr);
    }
  }
  function reset() {
    reqGetRoleList().then(res => {
      data.roleList = res.data
      console.log(data.roleList);
    })
  }
</script>

<style lang="less">
.role {
  margin: 20px 0;
  .search {
    margin-bottom: 15px;
    .el-input {
      width: 200px;
    }
  }
}
</style>