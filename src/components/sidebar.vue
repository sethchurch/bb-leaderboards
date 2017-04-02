<template>
<aside class='sidebar' >
    <header class="sidebar__header">
        <i @click="closeSidebar" class="material-icons sidebar__close">close</i>
        <img class='sidebar__logo' src="../assets/bblogo.svg" alt="BB Logo">
        <p class='sidebar__header-text' >Leaderboard</p>
    </header>
    <nav class="sidebar__nav">
        <div class="sidebar__nav-item"><i class="material-icons">star</i> Map Leaderboard</div>
        <div class="sidebar__nav-item"><i class="material-icons">person</i> Personal Leaderboard</div>
        <div class="sidebar__nav-item"><i class="material-icons">group</i> Seasonal Leaderboard </div>
    </nav>
    <hr v-if="$route.path == '/' || $route.path.toLowerCase().indexOf('/mapleaderboard') != -1" class="sidebar__divider" />
    <div v-if="$route.path == '/' || $route.path.toLowerCase().indexOf('/mapleaderboard') != -1" class="sidebar__maps">
        <h2 class="sidebar__maps-header" >Maps</h2>
        <div class="sidebar__maps-list">
            <router-link class="sidebar__maps-list-item" v-for="(map, index) in maps" :to="'/mapleaderboard/' + map.name.toLowerCase()" :key="map.name + index">
                {{ map.name }}
            </router-link>
        </div>
    </div>
</aside>
</template>
 
<script>
export default {
name: 'sidebar',
props: ['maps'],
methods: {
    closeSidebar(){
        document.querySelector('.sidebar').style.left = '-100%';
    }
}
};
</script>
 
<style lang='scss' scoped>
@import '../assets/_scss/_sidebar';
</style>