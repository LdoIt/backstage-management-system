<!--
 * @Date: 2023-04-22 18:34:09
-->
<template>
  <div class="role">
    <div class="demo-input-suffix">
      <el-row :gutter="20">
        <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
          >Using attributes</span
        >
        <el-input
          class="w-50 m-2"
          placeholder="Pick a date"
          :suffix-icon="Calendar"
        />
        <el-input
          class="w-50 m-2"
          placeholder="Type something"
          :prefix-icon="Search"
        />
      </el-row>
    </div>
  </div>
</template>

<script setup>
  import { Calendar, Search } from '@element-plus/icons-vue'
</script>

<style>
.role {
  margin: 20px 0;
}
</style>