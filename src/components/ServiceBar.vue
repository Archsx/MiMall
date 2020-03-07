<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>7天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "service-bar"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
.service {
  .container {
    padding: 32px 0;
    color: #666666;
    font-size: 16px;
    li {
      display: inline-block;
      width: 24.9%;
      text-align: center;
      border-right: 1px solid #e5e5e5;
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 8px;
        &:before {
          content: "\3000";
        }
      }
      .icon-setting {
        @include bgImg("/imgs/icon-setting.png");
      }
      .icon-7day {
        @include bgImg("/imgs/icon-7day.png");
      }
      .icon-15day {
        @include bgImg("/imgs/icon-15day.png");
      }
      .icon-post {
        @include bgImg("/imgs/icon-post.png");
      }

    }
  }
}
</style>
