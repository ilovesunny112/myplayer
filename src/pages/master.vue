<template>
    <div>
    <player-header></player-header>
    <router-link to="/">Go to RootPage</router-link>
    <router-link to="/list">Go to ListPage</router-link>
        <transition name="fade"  mode="out-in">
            <router-view></router-view>
        </transition>
     
    </div>
</template>

<script>
    import RootPage from './master2.vue'
import ListPage from './listpage.vue'
import PlayerHeader from '../components/Header.vue'
import '../styles/reset.styl'
import '../styles/comman.styl'
import {
    MUSIC_LIST
} from '../config/musiclist'

let duration = null;


export default {
    data() {
        return {

        }
    },
    components: {
        PlayerHeader
    },
    computed: {
        myVolume() {
            return this.$store.state.info.volume
        }
    },
    watch: {
        myVolume: function (value) {
            console.log(value)
            $("#player").jPlayer("volume", value);
        }
    },
    methods: {
        playMusic(item) {
            $("#player").jPlayer("setMedia", {
                mp3: item.file
            }).jPlayer("play");
            console.log("已播放")
            this.$store.commit("setCurrentItem", item);
            this.$store.commit("toggleIsPlay", true);
            console.log(this.$store.state.currentPlayItem)
            console.log(this.$store.state.musicList.indexOf(this.$store.state.currentPlayItem))
        },
        formatTime(time) {
            time = Math.floor(time);
            let miniute = Math.floor(time / 60);
            let seconds = Math.floor(time % 60);

            return miniute + ':' + (seconds < 10 ? '0' + seconds : seconds);
         },
    },
    mounted() {
        this.$store.commit("setMusicList", MUSIC_LIST)
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


        $("#player").bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration;
            // this.setState({
            // 	progress: e.jPlayer.status.currentPercentAbsolute,
            // 	volume: e.jPlayer.options.volume * 100,
            // 	leftTime: this.formatTime(duration * (1 - e.jPlayer.status.currentPercentAbsolute / 100))
            // });
            this.$store.commit("setMusicInfo", {
                progress: e.jPlayer.status.currentPercentAbsolute,
                volume: e.jPlayer.options.volume,
                leftTime: this.formatTime(duration * (1 - e.jPlayer.status.currentPercentAbsolute / 100))
            })
        });
    }
} 
</script>

<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

 