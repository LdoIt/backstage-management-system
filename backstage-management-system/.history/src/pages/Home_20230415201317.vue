<!--
 * @Date: 2023-04-15 08:31:12
-->
<template>
  <div>
    <Footer/>
    <Header/>
    <Menu/>
  </div>
</template>

<script>
import Footer from '../components/common/Footer.vue'
import Header from '../components/common/Header.vue'
import Menu from '../components/common/Menu.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Menu
  }
}
</script>

<style>

</style>