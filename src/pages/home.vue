<template>
  <div class="wrapper">
    <nav-header></nav-header>
    <div class="contentBox">
      <router-view></router-view>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import NavFooter from "../components/NavFooter";
export default {
  data() {
    return {};
  },
  name: "nav-home",
  components: {
    NavHeader,
    NavFooter
  }
};
</script>

<style lang="scss" scoped>
  .wrapper{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .contentBox{
    flex-grow: 1;
  }

</style>
