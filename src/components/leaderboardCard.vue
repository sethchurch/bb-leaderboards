<template>
<div class='leaderboard-card' >
    <span class='leaderboard-card__place'>{{ rank + getPlaceSuffix}}</span> 
    <span class='leaderboard-card__player'>
        <a class='leaderboard-card__link' :href="player.url">
            <img class='leaderboard-card__image' :src="player.image"> 
        </a>
        {{ player.name }}
    </span> 
    <span class='leaderboard-card__time'>{{ player.time + 's'}}</span>
</div>
</template>
 
<script>
export default {
    name: 'leaderboardCard',
    props: ['player', 'rank'],
    computed: {
        getPlaceSuffix() {
            if (this.rank == 1) { return 'st' };
            if (this.rank == 2) { return 'nd' };
            if (this.rank == 3) { return 'rd' };
            return 'th';
        }
    }
};
</script>
 
<style lang='scss' scoped>
    @import '../assets/_scss/_leaderboardCard';
</style>