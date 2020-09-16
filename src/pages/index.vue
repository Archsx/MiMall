<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="`/#/product/${sub.id}`"
                      ><img :src="sub.img" alt="" />{{ sub.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in slideList" :key="item.id">
            <router-link :to="`/product/${item.id}`">
              <img :src="item.img" alt="" />
            </router-link>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          :href="`/#/product/${item.id}`"
          v-for="item in adsList"
          :key="item.id"
        >
          <img :src="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" alt="" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img src="/imgs/mix-alpha.jpg" alt="" />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" :key="i">
              <div class="item" v-for="(item, index) in arr" :key="index">
                <span :class="{ 'new-pro': index % 2 == 0 }">新品</span>
                <div class="item-img">
                  <img :src="item.mainImage" alt="" />
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p class="price">{{ item.price }}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar> </service-bar>
    <modal
      title="提示"
      confirmText="查看购物车"
      btnType="1"
      modalType="middle"
      :showModal="showModal"
    >
    <template v-slot:body>
        <p>商品添加成功！</p>
    </template>
    
    
    </modal>
  </div>
</template>

<script>
import ServiceBar from "../components/ServiceBar";
import Modal from "../components/Modal";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: {
    ServiceBar,
    swiper,
    swiperSlide,
    Modal,
  },
  data() {
    return {
      showModal: true,
      swiperOption: {
        // autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
        effect: "cube",
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      phoneList: [
        [1, 1, 1, 1],
        [2, 2, 2, 2],
      ],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14,
          },
        })
        .then((res) => {
          this.phoneList = [res.list.slice(6, 10), res.list.slice(10)];
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: rgba(85, 88, 90, 0.5);
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          & > a {
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
            display: block;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              right: 30px;
              top: 17.5px;
              display: inline-block;
              width: 10px;
              height: 15px;
              @include bgImg("/imgs/icon-arrow.png");
              // vertical-align: middle;
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              // z-index: 999;
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex-grow: 1;
                padding-left: 23px;
                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
                a {
                  color: $colorB;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    display: flex;
    margin: 14px -7px 31px -7px;
    a {
      // flex-shrink:1;
      padding: 0 7px;
      img {
        max-width: 100%;
      }
    }
  }
  .banner {
    margin-bottom: 50px;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    img {
      max-width: 100%;
    }
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px 0;
    h2 {
      font-size: $fontF;
      line-height: 22px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        flex-grow: 1;
        // display: flex;
        // flex-direction: column;
        // justify-content: space-between;
        .list {
          display: flex;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          justify-content: space-between;
          .item {
            width: 236px;
            height: 302px;
            background-color: #fff;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              color: #fff;
              line-height: 24px;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 195px;
                width: 100%;
              }
            }
            .item-info {
              h3 {
                font-size: 14px;
                color: #333;
                line-height: 14px;
                font-weight: bold;
              }
              p {
                color: #999;
                line-height: 14px;
                margin: 6px 0 14px 0;
              }
              .price {
                color: #f20a0a;
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  content: "";
                  display: inline-block;
                  width: 22px;
                  height: 22px;
                  @include bgImg("/imgs/icon-cart-hover.png");
                  vertical-align: -5px;
                  margin-left: 5px;
                }
              }
            }
            //  flex-basis:25%;
          }
        }
      }
    }
  }
}
</style>
