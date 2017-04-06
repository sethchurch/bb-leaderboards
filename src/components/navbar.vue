<template>
<nav class='navbar' >
    <div class="wrapper">

        <i @click="toggleSidebar" class="material-icons navbar__toggle">menu</i>
        <router-link  class="navbar__logo" to="/">
            <img src="../assets/bblogo.svg" alt="BB Logo">
        </router-link>
        <span class="navbar__user" ><p> Hey, {{ user.name }} </p> <router-link to="/leaderboard/user"><img class="navbar__user-image"  :src="user.image"></router-link> </span>

    </div>
</nav>
</template>
 
<script>
export default {
    name: 'navbar',
    props: ['user'],
    methods: {
        toggleSidebar(){
            document.querySelector('.sidebar').classList.toggle('sidebar--active');
        }
    }
};
</script>
 
<style lang='scss' scoped>
    @import '../assets/_scss/_navbar';
</style>