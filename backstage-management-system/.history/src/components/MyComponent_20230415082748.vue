<!--
 * @Date: 2023-04-15 08:13:57
-->
<template>
  <div>
    hello
    <router-link to="/foo">go to Foo</router-link>
    <router-link to="/bar">go to Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MyComponent'
}
</script>

<style>

</style>