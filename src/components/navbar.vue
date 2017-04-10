<template>
<nav class='navbar' >
    <div class="wrapper">

        <i @click="toggleSidebar" class="material-icons navbar__toggle">menu</i>

        <router-link  class="navbar__logo" to="/">
            <img src="../assets/bblogo.svg" alt="BB Logo">
        </router-link>
        
        <span v-if="signedIn" class="navbar__user" ><p class="navbar__greet"> Hey, {{ username }} </p> <router-link to="/leaderboard/user"><PlayerImage className="navbar__user-image"  :steamId="user.steamId"/></router-link> </span>
        <a v-else href="#"  class="navbar__user"><img src='../assets/steamsignin.png'/></a>
    </div>
</nav>
</template>
 
<script>
import PlayerImage from './playerImage';

export default {
    name: 'navbar',
    props: ['user'],
    data() {
        return {
            signedIn: false,
            username: null,
            error: null,
        }
    },
    created () {
        if(this.user) this.fetchUser()
    },
    watch: {
        user: "fetchUser"
    },
    methods: {
        toggleSidebar(){
            document.querySelector('.sidebar').classList.toggle('sidebar--active');
        },
        fetchUser() {
            let url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=7BA7B2ACDDBDD5D85F4109CB6FCB30DA&steamids=' + this.user.steamId;
            fetch(url)
            .catch(err => this.error = error)
            .then(res => {
                return res.json();
            })
            .then(results => {
                this.username = results.response.players['0'].personaname;
                this.signedIn = true;
            });
        },
    },
    components: {
        PlayerImage
    }
};
</script>
 
<style lang='scss' scoped>
    @import '../assets/_scss/_navbar';
</style>