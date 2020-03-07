<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://vuejs.org/" class="stack" target="_blank">Vue</a>
      <a href="https://router.vuejs.org/" class="stack" target="_blank"
        >Vue-Router</a
      >
      <a href="https://vuex.vuejs.org/" class="stack" target="_blank">Vuex</a>
      <a href="https://element.eleme.cn/#/zh-CN" class="stack" target="_blank"
        >ElementUI</a
      >
      <a href="http://github.com/" target="_blank">Github</a>
      <p>
        Copyright ©2019 mi.futurefe.com All Rights Reserved.
      </p>
    </div>
    <!-- <div class="copyright"></div> -->
  </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    img {
      width: 53px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    margin-top: 31px;
    line-height: 23px;
    a {
      color: #999;
    }
  }
  .stack::after {
    content: "\007C";
    margin: 0 0.5em;
  }
}
</style>
