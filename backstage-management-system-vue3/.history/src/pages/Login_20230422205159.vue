<!--
 * @Date: 2023-04-22 16:07:11
-->
<template>
  <div class="appContainer">
    <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
  </div>
</template>

<script setup>

</script>

<style>
.appContainer {
  position: relative;
  top: 50%;
  /* transform: translate(-50%, 0); */
}
.el-card {
  margin: 0 auto;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}

</style>