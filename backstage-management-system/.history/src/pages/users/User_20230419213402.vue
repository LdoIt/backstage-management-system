<!--
 * @Date: 2023-04-15 21:17:29
-->
<template>
  <div>
    <el-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"> </el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    }
  }
}
</script>

<style></style>
