<template>
<div class='map-leaderboard' >
    <div v-if="loading">Loading...</div>
    <div v-if="recordsReady" class='map-leaderboard__weekly map-leaderboard__category'>
        <header class='map-leaderboard__weekly--header map-leaderboard__category-header'>
            <h1>Weekly</h1>
        </header>
        <LeaderboardCard class='map-leaderboard__weekly--card' v-for="(record, index) in mapRecords.weekly" :key="'allTime' + index" :rank="index + 1" :player="record" />
    </div>
    <div v-if="recordsReady" class='map-leaderboard__all-time map-leaderboard__category'>
        <header class='map-leaderboard__all-time--header map-leaderboard__category-header'>
            <h1>All-Time</h1>
        </header>
        <LeaderboardCard class='map-leaderboard__all-time--card' v-for="(record, index) in mapRecords.allTime" :key="'allTime' + index" :rank="index + 1" :player="record" />
    </div>
    <div v-if="recordsReady" class='map-leaderboard__monthly map-leaderboard__category'>
        <header class='map-leaderboard__monthly--header map-leaderboard__category-header'>
            <h1>Monthly</h1>
        </header>
        <LeaderboardCard class='map-leaderboard__monthly--card' v-for="(record, index) in mapRecords.monthly" :key="'allTime' + index" :rank="index + 1" :player="record" />
    </div>
</div>
</template>
 
<script>
import LeaderboardCard from './leaderboardCard';

export default {
    name: 'mapLeaderboard',
    data() {
        return {
            mapId: this.$route.params.mapid || 2,
            mapRecords: {},
            loading: true,
            error: null,
            recordsReady: false
        }
    },
    created () {
        this.fetchRecords()
    },
    watch: {
        '$route': 'fetchRecords'
    },
    methods: {
        fetchRecords() {
            
            this.mapRecords = {};
            this.loading = true;
            this.recordsReady = false;
            this.mapId = this.$route.params.mapid || 2; // set new route id 

            let categories = ['alltime', 'monthly', 'weekly'];

            const getRecords = (type, id) => fetch(`https://api.bbroleplay.co.uk/v1/games/surf/records/${type}/map/${id}`, { 
                    method: 'post', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
            
            Promise
            .all(categories.map(type => getRecords(type, this.mapId))) // map over categories and return array of promises
            .then(promises => {
                Promise.all(promises.map(prom => { // take the array from last Promise.all and get the json value of those
                    return prom.json();
                })).then(values => {
                    this.mapRecords.allTime = values[0].data.slice(0,10);
                    this.mapRecords.monthly = values[1].data.slice(0,10); // assign first 10 values to records Object
                    this.mapRecords.weekly = values[2].data.slice(0,10);
                    this.loading = false;
                    this.recordsReady = true;
                })
            });
        }
    },
    components: {
        LeaderboardCard
    }
};
</script>
 
<style lang='scss' scoped>
    @import '../assets/_scss/_mapLeaderboard';
</style>