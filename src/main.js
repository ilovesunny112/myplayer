import Vue from 'vue'
import App from './App.vue'
 
import Vuex from 'vuex'
// Vue.config.productionTip = false

Vue.use(Vuex);

 

const store = new Vuex.Store({
  state:{
    count:0,
    musicList:[]
  },
  mutations:{
    increament(state){
      state.count++
    },
    setMusicList(state,list){
      state.musicList = list
    }
  }
})


var root = document.getElementById("root")

new Vue({
  render: (h) => h(App),
  store
}).$mount(root)
