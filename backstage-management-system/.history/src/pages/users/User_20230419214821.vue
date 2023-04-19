<!--
 * @Date: 2023-04-15 21:17:29
-->
<template>
  <div>
    <el-tree
      :data="menu"
      show-checkbox
      :node-key="'menu'+name"
      :props="defaultProps">
    </el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [],
      defaultProps: {
        children: 'children',
        name: 'name'
      }
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
