<template>
  <div id="app">
    <Navbar :user="user" />
    <Sidebar />
    <span class="clear"></span>
    <router-view  id='router-view'></router-view>
  </div>
</template>

<script>
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
export default {
  name: 'app',
  data() {
    return {
      user: { name: 'Ender', image: 'http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/4c/4cda3313aa54c29473c338196b78e9898f0b7753_full.jpg' },
    }
  },
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang='scss' >
    @import './assets/_scss/_globals.scss';
</style>
