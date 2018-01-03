// 入口文件
import Vue from 'vue';

// 导入项目根组件
import App from './App.vue';

// 按需导入 Miut-ui 中的组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

// 导入 mui 文件
import './lib/mui/css/mui.css';


var vm = new Vue({
    el: '#app',
    render: c => c(App)
})