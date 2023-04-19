<!--
 * @Date: 2023-04-15 21:17:29
-->
<template>
  <div>
    <el-tree :props="" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange"> </el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: []
    }
  },
  created() {
    console.log(this.$router.option);
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    }
  }
}
</script>

<style></style>
