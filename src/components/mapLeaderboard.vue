<template>
<div class='map-leaderboard' >
    <div class='map-leaderboard__weekly map-leaderboard__category'>
        <header class='map-leaderboard__weekly--header'>
            <h1>Weekly</h1>
        </header>
        <LeaderboardCard class='map-leaderboard__weekly--card' v-for="(player, index) in mapData.weekly" :key="'allTime' + index" :rank="index + 1" :player="player" />
    </div>
    <div class='map-leaderboard__all-time map-leaderboard__category'>
        <header class='map-leaderboard__all-time--header'>
            <h1>All-Time</h1>
        </header>
        <LeaderboardCard class='map-leaderboard__all-time--card' v-for="(player, index) in mapData.allTime" :key="'allTime' + index" :rank="index + 1" :player="player" />
    </div>
    <div class='map-leaderboard__monthly map-leaderboard__category'>
        <header class='map-leaderboard__monthly--header'>
            <h1>Monthly</h1>
        </header>
        <LeaderboardCard class='map-leaderboard__monthly--card' v-for="(player, index) in mapData.monthly" :key="'allTime' + index" :rank="index + 1" :player="player" />
    </div>
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