import { createRouter, createWebHistory } from 'vue-router'


import MapLeaderboard from '@/components/mapLeaderboard';
import PlayerLeaderboard from '@/components/playerLeaderboard';
import SeasonalLeaderboard from '@/components/seasonalLeaderboard';
import PlayerSearch from '@/components/playerSearch';


const routes = [
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
    // {
    //   path: '/leaderboard/map/:mapid',
    //   name: 'Map Leaderboard id',
    //   component: MapLeaderboard,
    // },
    {
        path: '/leaderboard/user',
        name: 'Search User',
        component: PlayerSearch,
    },
    {
        path: '/leaderboard/user/:userid',
        name: 'Player Leaderboard',
        component: PlayerLeaderboard,
    },
    //{
    //   path: '/leaderboard/user/map/:mapid',
    //   name: 'Player Map Leaderboard',
    //   component: PlayerLeaderboard,
    // },
    {
        path: '/leaderboard/seasonal',
        name: 'Seasonal Leaderboard',
        component: SeasonalLeaderboard,
    },
    // {
    //   path: '/leaderboard/seasonal/map/:mapid',
    //   name: 'Seasonal Map Leaderboard',
    //   component: SeasonalLeaderboard,
    // }
];

const router = createRouter({ history: createWebHistory('/'), routes });


export default router;