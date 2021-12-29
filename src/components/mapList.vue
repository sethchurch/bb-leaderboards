<template>
<div class='map-list' >

    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
        Error: {{ error }}
    </div>

    <h2 class="map-list__header" >Maps</h2>
    
    <div v-if="$apollo.queries.surfmap.loading">Loading...</div>
    <div class="map-list__list" v-else>
        <div class="map-list__list-item" v-for="(map, index) in surfmap" @click="setQuery(map)" :key="map.name + index" append>
            {{ map["name"].replace('surf_', '').charAt(0).toUpperCase() + map["name"].replace('surf_', '').slice(1) }}
        </div>
    </div>
</div>
</template>
 
<script>
import gql from 'graphql-tag';

export default {
    name: 'mapList',
    data () {
        return {
            loading: false,
            error: null,
            mapList: {}
        }
    },
    apollo: {
        surfmap: {
            query: gql`query {
                surfmap {
                    name
                    id
                }
            }`,
            context: { 
                headers: { 
                    "apiKey": process.env.VUE_APP_BB_KEY
                } 
            }
        }
    },
  created () {
    this.fetchData()
  },
  methods: {
    setQuery(map) {
        this.$router.push({ query: { mapid: map['id'] }});
        console.log(this.router)
    },
    fetchData () {
        console.log(process.env.BB_KEY);
        // this.error = null
        // this.loading = true
        // fetch('https://api.bbroleplay.co.uk/v1/games/surf/getmaps', {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // })
        // .catch((err) => {
        //     this.error = err.message;
        // })
        // .then((response) => {
        //     return response.json();
        // })
        // .then((res) => {
        //     this.loading = false;
        //     this.mapList.data = res.data;
        // })
    }
  }
};
</script>
 
<style lang='scss' scoped>
@import '../assets/_scss/_sidebar';
</style>