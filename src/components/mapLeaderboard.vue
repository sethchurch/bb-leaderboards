<template>
<div class='mapLeaderboard' >
    <LeaderboardCard></LeaderboardCard>
</div>
</template>
 
<script>
import LeaderboardCard from './leaderboardCard';

export default {
    name: 'mapLeaderboard',
    props: ['mapData'],
    components: {
        LeaderboardCard
    }
};
</script>
 
<style lang='scss' scoped>
    @import '../assets/_scss/_mapLeaderboard';
</style>