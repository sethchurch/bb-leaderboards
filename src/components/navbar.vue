<template>
<nav class='navbar' >
    <div class="wrapper">

        <i @click="toggleSidebar" class="material-icons navbar__toggle">menu</i>

        <router-link  class="navbar__logo" to="/">
            <img src="../assets/bblogo.svg" alt="BB Logo">
        </router-link>
        
        <!-- 
            <span v-if="signedIn" class="navbar__user" ><p class="navbar__greet"> Hey, {{ username }} </p> <router-link to="/leaderboard/user"><PlayerImage className="navbar__user-image"  :steamId="user.steamId"/></router-link> </span>
            <a v-else href="#"  class="navbar__user"><img src='../assets/steamsignin.png'/></a>
        -->
        <span class="navbar__map"> {{ this.mapName }} </span>
        
    </div>
</nav>
</template>
 
<script>
// import PlayerImage from './playerImage';

export default {
    name: 'navbar',
    props: ['user'],
    data() {
        return {
            username: null,
            error: null,
            mapName: ""
        }
    },
    created () {
        // if(this.user) this.fetchUser();
        this.getMapName();
    },
    watch: {
        user: "fetchUser",
        '$route.query.mapid': "getMapName"
    },
    methods: {
        toggleSidebar(){
            document.querySelector('.sidebar').classList.toggle('sidebar--active');
        },
        getMapName() {
            this.mapName = "";
            if(this.$route.query.mapid) {
                let url = 'https://api.bbroleplay.co.uk/v1/games/surf/mapinfo/' + this.$route.query.mapid || 2
                fetch(url,
                { 
                    method: 'post', 
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .catch(err => this.error = err)
                .then(res => {
                    return res.json()
                })
                .then(result => {
                    this.mapName = result.data['map_name'].replace('surf_', '').charAt(0).toUpperCase() + result.data['map_name'].replace('surf_', '').slice(1)
                })
            } else {
                this.mapName = "Boring";
            }
        }
    },
    components: {
        // PlayerImage
    }
};
</script>
 
<style lang='scss' scoped>
    @import '../assets/_scss/_navbar';
</style>