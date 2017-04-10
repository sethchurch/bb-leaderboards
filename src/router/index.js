import Vue from 'vue'
import Router from 'vue-router'
import MapLeaderboard from '@/components/mapLeaderboard'
import PlayerLeaderboard from '@/components/playerLeaderboard'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: MapLeaderboard,
    },
    {
      path: '/leaderboard/map',
      name: 'Map Leaderboard',
      component: MapLeaderboard,
    },
    {
      path: '/leaderboard/map/:mapid',
      name: 'Map Leaderboard id',
      component: MapLeaderboard,
    },
    {
      path: '/leaderboard/user',
      name: 'Player Leaderboard',
      component: PlayerLeaderboard,
    },
    {
      path: '/leaderboard/user/map/:mapid',
      name: 'Player Map Leaderboard',
      component: PlayerLeaderboard,
    }
  ]
})
