// 入口文件
import Vue from 'vue';

// 1.1 导入 路由的包
import VueRouter from 'vue-router';
// 1.2 安装路由
Vue.use(VueRouter);
// 1.3 导入自己的 router.js路由模块
import router from './router.js'

import VueResource from 'vue-resource';

Vue.use(VueResource);

// 导入项目根组件
import App from './App.vue';

// 按需导入 Miut-ui 中的组件

import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);




// 导入 mui 文件
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';


var vm = new Vue({
    el: '#app',
    router,  // 1.4 挂载路由对象到 VM 实例上
    render: c => c(App)
})