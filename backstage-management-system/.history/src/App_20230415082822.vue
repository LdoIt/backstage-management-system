<!--
 * @Date: 2023-04-13 17:21:53
-->
<template>
  <div>
    <MyComponent/>
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue'
// 格式化样式
import 'normalize.css'
export default {
  components: {
    MyComponent
  }
}
</script>

<style lang="scss">
$body-background-color: skyblue;
  div{
    text-align: center;
    background-color: $body-background-color;
  }
</style>