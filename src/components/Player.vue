<template>
            <div class="player-page">
                <h1 class="caption">
                    <!-- <Link to="/list">我的私人音乐坊 &gt;</Link> -->
                </h1>
                <div class="mt20 row">
                	<div class="controll-wrapper">
                		<h2 class="music-title">{{musicitem.title}}</h2>
                		<h3 class="music-artist mt10">{{musicitem.artist}}</h3>
                		<div class="row mt20">
                			<div class="left-time -col-auto">-{{this.$store.state.info.leftTime}}</div>
                			<div class="volume-container">
                				<i class="icon-volume rt" :style="{top:'5px', left:'-5px'}"></i>
                				<div class="volume-wrapper">
					              <progress-bar :percentage="this.$store.state.info.volume*100" @updateprogress="updatePlayerVolume"></progress-bar>   
                				</div>
                			</div>
                		</div>
                		<div style="height:10px; line-height:10px">
			                <progress-bar :percentage="this.$store.state.info.progress" @updateprogress="updatePlayerTime"></progress-bar>
                		</div>
                		<div class="mt35 row">
                			<div>
	                			<i class="icon prev" @click="playPrev"></i>
	                			<i class="icon ml20" :class="[this.$store.state.isPlay?'pause':'play']" @click="togglePlay"></i>
	                			<i class="icon next ml20" @click="playNext"></i>
                			</div>
                			<div class="-col-auto">
                				<i class="icon repeat-cycle" onClick=""></i>
                			</div>
                		</div>
                	</div>
                	<div class="-col-auto cover" :class="[this.$store.state.isPlay?'play':'pause']">
                		<img :src="musicitem.cover" alt=""/>
                	</div>
                </div>
            </div>
</template>

<script>
    import '../styles/player.less'
    import ProgressBar from './progress.vue'
     
     


    export default {
        components:{
            ProgressBar
        },
        data(){
            return {
                musicPercentage:0,
                
            }
        },
        computed:{
            currentIndex(){
                return this.$store.state.musicList.indexOf(this.$store.state.currentPlayItem)
            }
        },
        props:[
            "musicitem"
        ],
        methods:{
            updatePlayerTime(progress){ 
                this.musicPercentage = progress
                this.$emit("seek",progress)

            },
            updatePlayerVolume(volume){
                this.$emit("volumechange",volume/100)
            },
            togglePlay(){
                console.log("emit toggleplay")
                this.$emit("toggleplay")
            },
            playNext(){
                this.$emit("playTo",1)
            },
            playPrev(){
                this.$emit("playTo",-1)
            }
        },
        mounted(){
            // console.log(Jplayer)
            console.log("=================1111111111============")
            console.log(this.$store.state.count)
        }

    }
</script>

 
