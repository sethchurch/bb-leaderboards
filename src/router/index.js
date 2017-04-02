import Vue from 'vue'
import Router from 'vue-router'
import MapLeaderboard from '@/components/mapLeaderboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map Leaderboard',
      component: MapLeaderboard
    }
  ]
})
