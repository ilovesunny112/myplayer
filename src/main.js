import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false

var root = document.getElementById("root")

new Vue({
  render: (h) => h(App)
}).$mount(root)
