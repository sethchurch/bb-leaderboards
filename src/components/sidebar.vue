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
        
        <!--
        <router-link  class="sidebar__nav-item" to="/leaderboard/user">
            <i class="material-icons">person</i> Personal Leaderboard
        </router-link>
        -->
        
        <router-link  class="sidebar__nav-item" to="/leaderboard/seasonal">
            <i class="material-icons">group</i> Seasonal Leaderboard 
        </router-link>
    </nav>
    <hr class="sidebar__divider" />
    <MapList /> 
</aside>
</template>
 
<script>
import MapList from './mapList';
export default {
name: 'sidebar',
methods: {
    toggleSidebar(){
        document.querySelector('.sidebar').classList.toggle('sidebar--active');
    }
},
components: {
    MapList
}
};
</script>
 
<style lang='scss' scoped>
@import '../assets/_scss/_sidebar';
</style>