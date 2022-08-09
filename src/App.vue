<template>
  <NavBar msg="Welcome to Your Vue.js App"/>

   <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
}
}
</script>

<style>
#app{
  max-width: 1548px;
  margin: auto;
  padding-top: 4rem;
}
</style>
