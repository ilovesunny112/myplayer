<template>
    <div class="progress" @click="updateProgress">
        <div class="progress-percentage" :style='{width:percentage+"%"}'></div>
    </div>
</template>

<script>
    export default {
        props:["percentage"],
        methods:{
            updateProgress(e){
               console.log(e.currentTarget)//e.target 是 事件源的对象  e.currentTarget 是注册了事件处理程序的对象 
               var diff = e.clientX - e.currentTarget.getBoundingClientRect().left,
                    width = e.currentTarget.offsetWidth,
                    progress = (diff/width)*100

                console.log(progress)
                this.$emit("updateprogress",progress)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .progress
        width 100%
        height 3px
        background-color #cecece
        cursor pointer
    .progress-percentage
         
        height 3px
        background-color green
</style>
