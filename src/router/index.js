import Vue from 'vue'
import Router from 'vue-router'
import MapLeaderboard from '@/components/mapLeaderboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: MapLeaderboard
    },
    {
      path: '/leaderboard/map',
      name: 'Map Leaderboard',
      component: MapLeaderboard
    },
    {
      path: '/leaderboard/map/:mapname',
      name: 'Map Leaderboard',
      component: MapLeaderboard,
      props: { mapData: require('../placeholder-data/surf_boring-leaderboard-data') }
    }
  ]
})
