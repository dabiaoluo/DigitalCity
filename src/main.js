import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/Css/publicStyle.scss'
Vue.config.productionTip = false
Vue.prototype.randomString = (e) => {
  e = e || 32;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
