<template>
<div class='leaderboard-card' >
    <span class='leaderboard-card__place'>{{ place }}</span> 
    <span class='leaderboard-card__player'>
        <a class='leaderboard-card__link' :href="player.url">
            <img class='leaderboard-card__image' :src="player.image"> 
        </a>
        {{ player.name }}
    </span> 
    <span class='leaderboard-card__time'>{{ player.time }}</span>
</div>
</template>
 
<script>
export default {
    name: 'leaderboardCard',
    props: ['player']
};
</script>
 
<style lang='scss' scoped>
    @import '../assets/_scss/_leaderboardCard';
</style>