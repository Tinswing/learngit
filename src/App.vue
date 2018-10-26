<template>
  <div id="app">
    <app-header></app-header>
    <h1>{{ title }}</h1>
    <users></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Users from './components/Users.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'Vue脚手架'
    }
  },
  components: {
    'users': Users,
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
  h1 {
    text-align:center;
  }
</style>
