<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"
            ><span class="icon-cart"></span>购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米C99</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米C99</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米C99</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米C99</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米C99</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米C99</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:'"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header"
};
</script>

<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex(space-between, center);
      a {
        color: #b0b0b0;
        margin-right: 17px;
        display: inline-block;
        &.my-cart {
          width: 110px;
          background-color: #ff6600;
          text-align: center;
          margin-right: 0;
          color: #fff;
          // 这里十分奇怪，如果加上这句，那么这个部分会整体下移一点点，我还是对vertical-align不熟悉啊.
          // vertical-align: middle;
          .icon-cart {
            display: inline-block;
            width: 16px;
            height: 12px;
            margin-right: 4px;
            @include bgImg("/imgs/icon-cart-checked.png");
            vertical-align: -1px;
          }
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      position: relative;
      @include flex(space-between, center);
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        overflow: hidden;
        a {
          display: inline-block;
          width: 110px;
          font-size: 0;
          background-color: #ff6600;
          transition: all 0.2s linear;
          &::before {
            content: "";
            display: inline-block;
            width: 55px;
            height: 55px;
            @include bgImg("../../public/imgs/mi-logo.png");
          }
          &::after {
            content: "";
            display: inline-block;
            width: 55px;
            height: 55px;
            @include bgImg("../../public/imgs/mi-home.png");
          }
          &:hover {
            margin-left: -55px;
            // transform: translate(-100%);
            transition: all 0.2s linear;
          }
        }
      }
      .header-menu {
        display: inline-block;
        margin-left: 209px;
        flex-grow: 1;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 16px;
          span {
            cursor: pointer;
          }
          &:hover {
            span {
              color: $colorA;
            }
            .children {
              height: 220px;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            border-top: 1px solid #e5e5e5;
            box-shadow: 6px 6px 12px -6px rgba(0, 0, 0, 0.11);
            background-color: #fff;

            ul::after {
              content: "";
              display: block;
              clear: both;
            }
            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              // position: relative;

              a {
                display: inline-block;
                padding-top: 26px;
              }
              img {
                height: 111px;
              }
              .pro-img {
                position: relative;
                // height: 137px;
                // margin-top: 26px;
                &:before {
                  content: "";
                  position: absolute;
                  top: 0;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100%;
                  width: 1px;
                }
              }

              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            text-align: center;
            flex-grow: 1;
            &::before {
              content: "";
              display: inline-block;
              width: 18px;
              height: 18px;
              @include bgImg("/imgs/icon-search.png");
            }
          }
        }
      }
    }
  }
}
</style>
