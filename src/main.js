import Vue from 'vue'
import App from './App.vue'
import Master from './pages/master.vue'
 
import Vuex from 'vuex'
// Vue.config.productionTip = false
import VueRouter from 'vue-router';
import RootPage from './pages/master2.vue'
import ListPage from './pages/listpage.vue'

Vue.use(Vuex);
Vue.use(VueRouter)


const routes = [
  {
    path:"/",
    component:RootPage
  },
  {
    path:"/list",
    component:ListPage
  }

]

const router = new VueRouter({
  routes,
  mode:"history"
})



const store = new Vuex.Store({
  state:{
    count:0,
    musicList:[],
    currentPlayItem:{},
    isPlay:false,
    info:{
      progress:0,
      volume:0.2,
      leftTime:0
    }
  },
  mutations:{
    increament(state){
      state.count++
    },
    setMusicList(state,list){
      state.musicList = list
    },
    setCurrentItem(state,item){
      state.currentPlayItem = item
    },
    toggleIsPlay(state,flag){
      state.isPlay = flag
    },
    setMusicInfo(state,info){
      state.info = info
    },
    setVolume(state,value){
      state.info.volume = value
    }
  }
})


var root = document.getElementById("root")

new Vue({
  render: (h) => h(Master),
  store,
  router
}).$mount(root)
