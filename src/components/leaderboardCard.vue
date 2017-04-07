<template>
<div class='leaderboard-card' >
    <div class='leaderboard-card__info'>
        <span class='leaderboard-card__place'>{{ rank + getPlaceSuffix}}</span>
        <a class='leaderboard-card__player' :href="player.url">
                <img class='leaderboard-card__image' :src="player.image"> 
                <span class='leaderboard-card__name'>{{ player.name.length > 20 ? player.name.slice(0,16) + '...' : player.name }}</span>
        </a>
    </div>
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