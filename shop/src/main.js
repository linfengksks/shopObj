import Vue from 'vue'
import App from './App.vue'
// 引入 element
import ElementUI from 'element-ui';
import './icons';
import 'element-ui/lib/theme-chalk/index.css';

// 使用插件
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
