<template>
<nav class='navbar' >
    <div class="wrapper">

        <i @click="openSidebar" class="material-icons navbar__toggle">menu</i>
        <img class="navbar__logo" src="../assets/bblogo.svg" alt="BB Logo">
        <span class="navbar__user" ><p> Hey, {{ user.name }} </p> <router-link to="/user"><img class="navbar__user-image"  :src="user.image"></router-link> </span>

    </div>
</nav>
</template>
 
<script>
export default {
    name: 'navbar',
    props: ['user'],
    methods: {
        openSidebar(){
            document.querySelector('.sidebar').style.left = '0%';
        }
    }
};
</script>
 
<style lang='scss' scoped>
    @import '../assets/_scss/_navbar';
</style>