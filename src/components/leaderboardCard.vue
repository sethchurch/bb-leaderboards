<template>
<div class='leaderboard-card' >
    <div class='leaderboard-card__info'>
        <span class='leaderboard-card__place'>{{ rank + getPlaceSuffix}}</span>
        <a class='leaderboard-card__player' :href="'http://steamcommunity.com/profiles/' + player.steamid64">
            <img class='leaderboard-card__image' :src="getPlayerImage"> 
            <div class='leaderboard-card__name'>
               {{player.gamename}}
            </div>
        </a>
    </div>
    <span class='leaderboard-card__time'>{{ player['time_record'].toFixed(2) + 's'}}</span>
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
        },
        getPlayerImage() {
            return '';
        }
    }
};
</script>
 
<style lang='scss' scoped>
    @import '../assets/_scss/_leaderboardCard';
</style>