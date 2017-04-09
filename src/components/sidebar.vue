<template>
<aside class='sidebar' >
    <header class="sidebar__header">
        <i @click="toggleSidebar" class="material-icons sidebar__close">close</i>
        <img class='sidebar__logo' src="../assets/bblogo.svg" alt="BB Logo">
        <p class='sidebar__header-text' >Leaderboard</p>
    </header>
    <nav class="sidebar__nav">
        <router-link class="sidebar__nav-item" to="/leaderboard/map">
            <i class="material-icons">star</i> Map Leaderboard
        </router-link>
        <router-link class="sidebar__nav-item" to="/leaderboard/user">
            <i class="material-icons">person</i> Personal Leaderboard
        </router-link>
        <router-link class="sidebar__nav-item" to="/leaderboard/seasonal">
            <i class="material-icons">group</i> Seasonal Leaderboard 
        </router-link>
    </nav>
    <hr v-if="$route.path == '/' || $route.path.toLowerCase().indexOf('/leaderboard/map') != -1" class="sidebar__divider" />
    <div v-if="$route.path == '/' || $route.path.toLowerCase().indexOf('/leaderboard/map') != -1" class="sidebar__maps">
        <h2 class="sidebar__maps-header" >Maps</h2>
        <div class="sidebar__maps-list">
            <router-link class="sidebar__maps-list-item" v-for="(map, index) in mapList.data" :to="'/leaderboard/map/' + map['map_name'].toLowerCase()" :key="map.name + index">
                {{ map["map_name"].replace('surf_', '').charAt(0).toUpperCase() + map["map_name"].replace('surf_', '').slice(1) }}
            </router-link>
        </div>
    </div>
</aside>
</template>
 
<script>
export default {
name: 'sidebar',
methods: {
    toggleSidebar(){
        document.querySelector('.sidebar').classList.toggle('sidebar--active');
    }
},
computed: {
    mapList() {
        let maps = {};
        fetch('https://api.bbroleplay.co.uk/v1/games/surf/getmaps', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            maps.data = result.data;
        })
        console.log(maps);
        return maps;
    }
}
};
</script>
 
<style lang='scss' scoped>
@import '../assets/_scss/_sidebar';
</style>