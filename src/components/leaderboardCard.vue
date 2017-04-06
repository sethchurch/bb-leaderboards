<template>
<div class='leaderboard-card' >
    <span class='leaderboard-card__place'>{{ rank + getPlaceSuffix}}</span>
    <a class='leaderboard-card__player' :href="player.url">
            <img class='leaderboard-card__image' :src="player.image"> 
        {{ player.name }}
    </a>
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