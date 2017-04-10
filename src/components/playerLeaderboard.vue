<template>
<div class='player-leaderboard' >
    <div class='player-leaderboard__header'><span>Rank</span><span>Time</span></div>
    <span class='clear-me'></span>
    <div class='player-leaderboard__container'>
        <userCard v-if="recordsReady" v-for="(score, index) in playerRecords" :key="'user' + index" :rank="index + 1" :time="score['time_record']" class='player-leaderboard__card' />
        <div v-else>Loading...</div>
    </div>
</div>
</template>
 
<script>
import userCard from './userCard';

export default {
    name: 'playerLeaderboard',
    props: ['user'],
    data() {
        return {
            mapId: this.$route.params.mapid || 2,
            loading: true,
            error: null,
            recordsReady: false,
            playerRecords: [],
            internalId: null
        }
    },
    created () {
        if(this.user.steamId) this.getinternalId();
    },
    watch: {
        internalId: 'fetchUserRecords',
        '$route': 'fetchUserRecords'
    },
    methods: {
        fetchUserRecords() {
            this.mapId = this.$route.params.mapid || 2,
            this.playerRecords = [];
            this.loading = true;
            this.recordsReady = false;

            fetch(`https://api.bbroleplay.co.uk/v1/games/surf/records/user/map/${this.internalId}/${this.mapId}`, { 
                method: 'post', 
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .catch(err => this.error = err)
            .then(res => {
                return res.json();
            })
            .then(result => {
                this.playerRecords = result.data;
                console.log(result)
                this.recordsReady = true;
            })
        },
        getinternalId() {
            fetch('https://api.bbroleplay.co.uk/v1/account/accountid/' + this.user.steamId, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .catch(err => this.error = error)
            .then(res => {
                return res.json();
            })
            .then(json => {
                this.internalId = json.data['account_id'];
            });
        }
    },
    components:{
        userCard
    }
};
</script>
 
<style lang='scss' scoped>
    @import '../assets/_scss/_playerLeaderboard';
</style>