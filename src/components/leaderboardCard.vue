<template>
<div class='leaderboard-card' >
    <div class='leaderboard-card__info'>
        <span class='leaderboard-card__place'>{{ rank + getPlaceSuffix }}</span>
        <a class='leaderboard-card__player' :href="'/leaderboard/user/' + player.steamid64">
            <PlayerImage className='leaderboard-card__image' :steamId='player.steamid64'/> 
            <div class='leaderboard-card__name'>
               {{ player.gamename }}
            </div>
        </a>
    </div>
    <span class='leaderboard-card__time'>{{ formatScore(score) }}</span>
</div>
</template>
 
<script>
import PlayerImage from './playerImage';
export default {
    name: 'leaderboardCard',
    props: ['player', 'rank', 'score', 'isTime'],
    methods: {
        formatScore(score) {
            if(this.isTime) {
                return score.toFixed(2) + 's'
            }
            return score;
        }
    },
    computed: {
        getPlaceSuffix() {
            if (this.rank == 1 || (this.rank > 20 && this.rank.toString().charAt(1) == '1')) { return 'st' };
            if (this.rank == 2 || (this.rank > 20 && this.rank.toString().charAt(1) == '2')) { return 'nd' };
            if (this.rank == 3 || (this.rank > 20 && this.rank.toString().charAt(1) == '3')) { return 'rd' };
            return 'th';
        },
    },
    components: {
        PlayerImage
    }
};
</script>
 
<style lang='scss' scoped>
    @import '../assets/_scss/_leaderboardCard';
</style>