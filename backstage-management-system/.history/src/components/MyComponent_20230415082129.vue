<!--
 * @Date: 2023-04-15 08:13:57
-->
<template>
  <div>
    hello
    <roueter-link to="/foo">go to Foo</roueter-link>
    <roueter-link to="/bar">go to Bar</roueter-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent'
}
</script>

<style>

</style>