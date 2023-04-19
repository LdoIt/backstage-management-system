<!--
 * @Date: 2023-04-15 21:17:29
-->
<template>
  <div>
    <el-tree
      :data="menu"
      show-checkbox
      node-key="id"
      :props="name">
    </el-tree>
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
    this.menu = [...this.$router.options.routes];
    console.log(this.$router.options.routes);
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    }
  }
}
</script>

<style></style>
