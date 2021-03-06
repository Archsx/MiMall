import Vue from "vue";
import axios from "axios";
import router from "./router";
import VueAxios from 'vue-axios'
import App from "./App.vue";



// mock 开关
const mock = false

if(mock){
  require ('./mock/api')
}

// import env from './env'

// 根据前端的跨域方式做调整 /a/b  : /api/a/b => /a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000


// 根据环境变量获取不同的请求地址

// axios.defaults.baseURL = env.baseURL

//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
})


Vue.use(VueAxios,axios)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
