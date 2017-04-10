<template>
    <img :class="className" v-if="loading" src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg' alt="Loading...">
    <img :class="className" v-else :src='imgUrl' />
</template>
 
<script>
export default {
    name: 'playerImage',
    props: ['className', 'steamId'],
    data() {
        return {
            loading: true,
            imgUrl: '',
            error: null
        }
    },
    created () {
        this.getPlayerImage(this.steamId);
    },
    methods: {
        getPlayerImage(id) {
            let url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=7BA7B2ACDDBDD5D85F4109CB6FCB30DA&steamids=' + id;
            fetch(url)
            .catch(err => this.error = error)
            .then(res => {
                return res.json();
            })
            .then(results => {
                this.imgUrl = results.response.players['0'].avatarmedium;
                this.loading = false;
            });
        }
    },
};
</script>