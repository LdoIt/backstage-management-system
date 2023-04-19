<!--
 * @Date: 2023-04-15 21:17:29
-->
<template>
  <div>
    <el-tree
      :data="menu"
      show-checkbox
      node-key="name"
      :props="defaultProps"
      ref="tree"
      />
    <el-button type="primary" @click="getSelectedNodes">获取选中的节点</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  created() {
    this.menu = [...this.$router.options.routes];
  },
  methods: {
    getSelectedNodes(data) {
      console.log(this.$refs.tree.getCheckedNodes());
    }
  }
}
</script>

<style></style>
