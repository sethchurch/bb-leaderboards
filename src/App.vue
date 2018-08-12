<template>
  <div id="app">
    <Navbar :user="user" />
    <Sidebar />
    <span class="clear"></span>
    <router-view  :user="user" id='router-view'></router-view>
  </div>
</template>

<script>
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
export default {
  name: 'app',
  data() {
    return {
      user: { steamId: '76561197988039164' }, // temporary static ID currently set to Kaiden's
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
