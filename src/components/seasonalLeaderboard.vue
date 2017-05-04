<template>
<div class='seasonal-leaderboard' >

    <div class='seasonal-leaderboard__map'>
        <header class='seasonal-leaderboard__header seasonal-leaderboard__header--map'>
            <h2>Map Leaderboard</h2>
        </header>
        <div v-if="loading">Loading...</div>
        <LeaderboardCard v-if="seasonalReady"  class='seasonal-leaderboard__card' v-for="(record, index) in mapRecords" :key="'allTime' + index" :rank="index + 1" :player="record" />
    </div>

    <div class='seasonal-leaderboard__overall'>
        <header class='seasonal-leaderboard__header seasonal-leaderboard__header--seasonal'>
            <h2>Seasonal Leaderboard</h2>
        </header>
        <div v-if="loading">Loading...</div>
        <LeaderboardCard v-if="mapRecordsReady"  class='seasonal-leaderboard__card' v-for="(record, index) in seasonalRecords" :key="'allTime' + index" :rank="index + 1" :player="record" />
    </div>

</div>
</template>
 
<script>
import LeaderboardCard from './leaderboardCard';

export default {
    name: 'seasonalLeaderboard',
    data () {
        return {
            // Seasonal Data
            seasonalError: null,
            seasonalRecordsLoading: true,
            seasonalReady: false,
            seasonalRecords: {},

            // Map Specific Data 
            mapError: null,
            mapRecordsLoading: true,
            mapRecordsReady: false,
            mapRecords: {}
        }
    },
    created () {
        this.fetchMapRecords()
        this.fetchSeasonalRecords()
    },
    watch: {
        '$route': 'fetchMapRecords'
    },
    methods: {
        fetchMapRecords() {
            
            this.mapRecords = {};
            this.mapRecordsLoading = true;
            this.mapRecordsReady = false;
            this.mapId = this.$route.params.mapid || 2; // set new route id 
            
            fetch(`https://api.bbroleplay.co.uk/v1/games/surf/records/season/map/${this.mapId}`, { 
                method: 'post', 
                headers: {
                    'Content-Type': 'application/json'
                },
            }).catch((err) => {
                this.mapError = err;
            }).then((blob) => {
                return blob.json();
            }).then((json) => {
                this.mapRecordsLoading = false;
                this.mapRecords = json.data;
                this.mapRecordsReady = true;
            })
        },
        fetchSeasonalRecords() {
            
            this.seasonalRecords = {};
            this.seasonalRecordsLoading = true;
            this.seasonalReady = false;
            this.mapId = this.$route.params.mapid || 2; // set new route id 
            
            fetch(`https://api.bbroleplay.co.uk/v1/games/surf/records/seasonrankings`, { 
                method: 'post', 
                headers: {
                    'Content-Type': 'application/json'
                },
            }).catch((err) => {
                this.seasonalError = err;
            }).then((blob) => {
                return blob.json();
            }).then((json) => {
                this.seasonalRecordsLoading = false;
                this.seasonalRecords = json.data;
                this.seasonalReady = true;
            })
        }
    },
    components: {
        LeaderboardCard
    }
};
</script>
 
<style lang='scss' scoped>
@import '../assets/_scss/_seasonalLeaderboard';
</style>