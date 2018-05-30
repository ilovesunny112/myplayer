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
                			<div class="left-time -col-auto">-{this.state.leftTime}</div>
                			<div class="volume-container">
                				<i class="icon-volume rt" :style={top: "5", left: "-5"}></i>
                				<div class="volume-wrapper">
					              进度条   
                				</div>
                			</div>
                		</div>
                		<div style="height:10px; line-height:10px">
			                <progress-bar :percentage="musicPercentage" @updateprogress="updatePlayerTime"></progress-bar>
                		</div>
                		<div class="mt35 row">
                			<div>
	                			<i class="icon prev" onClick=""></i>
	                			<i class="icon play" onClick=""></i>
	                			<i class="icon next ml20" onClick=""></i>
                			</div>
                			<div class="-col-auto">
                				<i class="icon repeat" onClick=""></i>
                			</div>
                		</div>
                	</div>
                	<div class="-col-auto cover play">
                		<img src="" alt=""/>
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
                musicPercentage:0
            }
        },
        props:[
            "musicitem"
        ],
        methods:{
            updatePlayerTime(progress){ 
             this.musicPercentage = progress
            }
        },
        mounted(){
            // console.log(Jplayer)
            console.log("=================1111111111============")
            console.log(this.$store.state.count)

        }

    }
</script>

 
