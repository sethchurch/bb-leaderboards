<template>
<div class='seasonal-leaderboard' >

    <!-- Map Specific Leaderboard Top 10 -->
    <div class='seasonal-leaderboard__section seasonal-leaderboard__section--map'>
        
        <header class='seasonal-leaderboard__header seasonal-leaderboard__header--map'>
            <h2>Map Leaderboard</h2>
        </header>

        <div v-if="mapRecordsLoading">Loading...</div>

        <LeaderboardCard v-if="mapRecordsReady" 
        class='seasonal-leaderboard__card' v-for="(record, index) in mapRecords" 
        :key="'allTime' + index" 
        :rank="index + 1" 
        :player="record"
        :score="record['time_record']"
        :isTime="true" />

    </div>


    <!-- Overall Seasonal Leaderboard Top 100 -->
    <div class='seasonal-leaderboard__section seasonal-leaderboard__section--overall'>
        
        <header class='seasonal-leaderboard__header seasonal-leaderboard__header--overall'>
            <h2>Seasonal Leaderboard</h2>
        </header>
        
        <div v-if="seasonalRecordsLoading">Loading...</div>

        <div class='seasonal-leaderboard__wrapper seasonal-leaderboard__wrapper--overall'>
            <LeaderboardCard v-if="seasonalReady" 
            class='seasonal-leaderboard__card' v-for="(record, index) in seasonalRecords" 
            :key="'allTime' + index" 
            :rank="index + 1" 
            :player="record"
            :score="record['points_num']" />
        </div>

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
        '$route.query.mapid': 'fetchMapRecords'
    },
    methods: {
        fetchMapRecords() {
            
            this.mapRecords = {};
            this.mapRecordsLoading = true;
            this.mapRecordsReady = false;
            this.mapId = this.$route.query.mapid || 2; // set new route id 
            
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
                this.mapRecords = json.data.slice(0,10);
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
                this.seasonalRecords = json.data.slice(0,100);
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