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
          <template v-if="username">
            <a href="javascript:;">{{ username }}</a>
            <a href="javascript:;">我的订单</a>
          </template>
          <template v-else>
            <router-link to="/login">登录</router-link>
            <a href="javascript:;">注册</a>
          </template>
          <a href="javascript:;" class="my-cart"
             @click="goToCart"><span class="icon-cart"></span>购物车</a
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
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
              </ul>
            </div>
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
  name: "nav-header",
  data() {
    return {
      username: "",
      phoneList: []
    };
  },
  filters: {
    currency(val) {
      if (!val) {
        return "0.00";
      }
      return `￥${val.toFixed(2)}元`;
    }
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012"
          }
        })
        .then(res => {
          this.phoneList = res.list.slice(0, 6);

          console.log(this.phoneList);
        });
    },
    goToCart(){
      this.$router.push('/cart')
    },
    login(){
      this.$router.push('/login')
    }
  }
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
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            overflow: hidden;
            height: 0;
            opacity: 0;
            border-top: 1px solid #e5e5e5;
            box-shadow: 6px 6px 12px -6px rgba(0, 0, 0, 0.11);
            background-color: #fff;
            transition: all 0.5s;

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
              &:last-child .pro-img:before {
                display: none;
              }

              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
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
