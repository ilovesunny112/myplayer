<template>
  <div>
     <player 
      :musicitem="this.$store.state.currentPlayItem" 
      @playTo="playFlag" 
      @toggleplay = "play" 
      @seek="changeProgressHandler" 
      @volumechange="changeVolumeHandler">
    </player>
  </div>
</template>

<script>


import HelloWorld from '../components/HelloWorld.vue'
 
import Player from '../components/player.vue'

import {MUSIC_LIST} from '../config/musiclist'





let duration = null;

const routes = {
  "/":Player,
  "/list":Player
}
export default {
  name: 'app',
  components: {
    HelloWorld, 
    Player
  },
  data(){
    return {
      msg:"hello vue",
           
      musicitem: this.$store.state.currentPlayItem,

      currentMusicItem:{

      },
    }    
  },
  computed:{
    myVolume(){
      
      return this.$store.state.info.volume
    }
  },
  watch:{
    myVolume:function(value){
      console.log(value)
      $("#player").jPlayer("volume", value);
    }
  },
  mounted(){

      console.log("查看一下路由信息")
      console.log(this.$router)
      this.$store.commit("setMusicList",MUSIC_LIST)
      console.log(this.$store)

       
      // window.setInterval(()=>{
      //   this.playNext()
      // },2000)
      
 
    },
    methods:{
      playMusic(item){
        $("#player").jPlayer("setMedia",{
          mp3:item.file
        }).jPlayer("play");
        console.log("已播放")
        this.$store.commit("setCurrentItem",item);
        this.$store.commit("toggleIsPlay",true);
        console.log(this.$store.state.currentPlayItem)
        console.log(this.$store.state.musicList.indexOf(this.$store.state.currentPlayItem))
      },
      playNext(){
        var musicList = this.$store.state.musicList,
            len = musicList.length;
        var index =  musicList.indexOf(this.$store.state.currentPlayItem)
        index = (index + 1)%len;
        console.log("nex index is s%",index);

         
         this.playMusic(this.$store.state.musicList[index])
      },
      playWhenEnd(){
        this.playNext()
      },
      pause(){

      },
      play(){
        console.log("change play")
        if(this.$store.state.isPlay){
          
          $("#player").jPlayer("pause");
        }
        else{
         
          $("#player").jPlayer("play");
        }

        this.$store.commit("toggleIsPlay",!this.$store.state.isPlay)
      },
      playFlag(flag){
        if(flag && typeof flag == 'number'){

          var state = this.$store.state,
              musicList = state.musicList,
              currentPlayItem = state.currentPlayItem,
              index = musicList.indexOf(currentPlayItem),
              len = musicList.length;

          
          
          
          index = (index + flag + len) % len;
          this.playIndex(index);
          
        }
      },
      playIndex(index){
        this.playMusic(this.$store.state.musicList[index])
        this.$store.commit("setCurrentItem",this.$store.state.musicList[index])
      },
      formatTime(time) {
        time = Math.floor(time);
        let miniute = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);

        return miniute + ':' + (seconds < 10 ? '0' + seconds : seconds);
      },
      
      changeProgressHandler(progress){
        progress = progress / 100;
        $("#player").jPlayer("play",duration * progress);
        console.log(progress)
        this.$store.commit("toggleIsPlay",true);
      },
      changeVolumeHandler(volume){
        
        this.$store.commit("setVolume",volume)
      }
      
          
    }
}
</script>

 