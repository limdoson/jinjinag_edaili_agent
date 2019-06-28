import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入工具类对象
import utils from '@u/index';
Vue.prototype.utils = utils;


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

Vue.config.productionTip = false

import '@ast/css/app.less';

import BackHeader from '@c/BackHeader';
Vue.component('back-header',BackHeader)


import http from '@u/http'
Vue.prototype.http = http;

//引入全局注册组件方法
import vComponent from '@u/reg-components'
Vue.use(vComponent);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
new Vue({
    router,
    store,
    render : h => h(App)
}).$mount('#app')
