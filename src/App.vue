<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import util from "./storage";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {},
  mounted() {
    // util.setItem('user',{
    //   name:'me',
    //   info:{
    //     age:24,
    //     gender:'male'
    //   }
    // })
    // util.clear("age")
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
