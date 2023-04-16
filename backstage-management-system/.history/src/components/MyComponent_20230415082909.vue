<!--
 * @Date: 2023-04-15 08:13:57
-->
<template>
  <div>
    <ul>
      <li><router-link to="/foo">go to Foo</router-link></li>
      <li><router-link to="/bar">go to Bar</router-link></li>
      <li><router-view></router-view></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyComponent'
}
</script>

<style>

</style>