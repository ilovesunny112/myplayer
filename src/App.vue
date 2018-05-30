<template>
  <div id="app">
    <player-header></player-header>
    <!-- {{msg}}
    <hello-world msg="你怎么@"></hello-world> -->
    <player :musicitem="musicitem"></player>
  </div>
</template>

<script>


import './styles/reset.styl'
import './styles/comman.styl'
import HelloWorld from './components/HelloWorld.vue'
import PlayerHeader from './components/Header.vue'
import Player from './components/player.vue'

import {MUSIC_LIST} from './config/musiclist'


export default {
  name: 'app',
  components: {
    HelloWorld,
    PlayerHeader,
    Player
  },
  data(){
    return {
      msg:"hello vue",
           
      musicitem: {
          id: 4,
          title: '我要你',
          artist: '任素汐',
          file: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.mp3',
          cover: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.jpg'
      }
    }    
  },
  mounted(){
      this.$store.commit("setMusicList",MUSIC_LIST)
      console.log(this.$store)

      $("#player").jPlayer({
        supplied: "mp3",
        wmode: "window",
        useStateClassSkin: true
		  });

  		this.playMusic(this.$store.state.musicList[0]);
		
      $("#player").bind($.jPlayer.event.ended, (e) => {
        this.playWhenEnd();
      });
    },
    methods:{
      playMusic(item){
        $("#player").jPlayer("setMedia",{
          mp3:item.file
        }).jPlayer("play")
        
      },
      playNext(){

      },
      playWhenEnd(){

      },
      
    }
}
</script>

<style type="text/css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
