<template>
  <div id="home">
    <app-header v-on:titleChanged="title = $event"></app-header>
    <h1>{{ title }}</h1>
    <users v-bind:users="users"></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'
import Users from './Users.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'home',
  data() {
    return {
      title: 'Vue脚手架',
      shuoming: 'good tools',
      users : [
          // {name: 'Henry', position: 'Web开发', show: false},
          // {name: 'Bucky', position: 'Web开发', show: false},
          // {name: 'Emily', position: 'Web开发', show: false},
          // {name: 'Henry', position: 'Web开发', show: false},
          // {name: 'Henry', position: 'Web开发', show: false},
          // {name: 'Henry', position: 'Web开发', show: false},
          // {name: 'Henry', position: 'Web开发', show: false}
        ]
    }
  },
  components: {
    'users': Users,
    'app-header': Header,
    'app-footer': Footer
  },
  methods: {
    updateTitle(title) {
      this.title = title;
    }
  },
  created() {
    // 请求网络接口，vue-resource
    this.$http.get('http://jsonplaceholder.typicode.com/users').then((data) => {
      console.log(data);
      this.users = data.body;
    }) 
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
