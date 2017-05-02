<template>
<div class='map-list' >

    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
        Error: {{ error }}
    </div>

    <h2 v-if="mapList.data" class="map-list__header" >Maps</h2>
    <div v-if="mapList.data" class="map-list__list">
        <router-link class="map-list__list-item" v-for="(map, index) in mapList.data" :to="getLink + map['map_id']" :key="map.name + index">
            {{ map["map_name"].replace('surf_', '').charAt(0).toUpperCase() + map["map_name"].replace('surf_', '').slice(1) }}
        </router-link>
    </div>
</div>
</template>
 
<script>
export default {
name: 'mapList',
    data () {
        return {
            loading: false,
            error: null,
            mapList: {}
        }
  },
  props: ['routeType'],
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
        this.error = null
        this.loading = true
        fetch('https://api.bbroleplay.co.uk/v1/games/surf/getmaps', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .catch((err) => {
            this.error = err;
        })
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            this.loading = false;
            this.mapList.data = res.data;
        })
    }
  },
  computed: {
      getLink () {
          switch(this.routeType) {
              case 0:
                return '/leaderboard/map/';
                break;
              case 1:
                return '/leaderboard/user/map/';
                break;
              case 2:
                return '/leaderboard/seasonal/map/';
                break;
              default:
                return '/leaderboard/map/';
          }
      }
  }
};
</script>
 
<style lang='scss' scoped>
@import '../assets/_scss/_sidebar';
</style>