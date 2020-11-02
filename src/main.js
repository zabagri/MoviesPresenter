import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VueApexCharts from 'vue-apexcharts'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('apexchart', VueApexCharts);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
