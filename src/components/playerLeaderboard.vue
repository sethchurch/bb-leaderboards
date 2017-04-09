<template>
<div class='player-leaderboard' >
    <div class='player-leaderboard__header'><span>Map</span><span>Time</span></div>
    <span class='clear-me'></span>
    <div class='player-leaderboard__container'>
        <userCard v-for="(score, index) in  playerData" :key="pbscore + index" :score="score" class='player-leaderboard__card' />
    </div>
</div>
</template>
 
<script>
import userCard from './userCard';

export default {
    name: 'playerLeaderboard',
    props: ['playerData'],
    components:{
        userCard
    }
};
</script>
 
<style lang='scss' scoped>
    @import '../assets/_scss/_playerLeaderboard';
</style>