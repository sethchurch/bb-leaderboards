<template>
    <div class='player-search'>
        <form>
            <input type="text" id="playerID">
            <!-- <router-link to='/{{ playerIDVal }}'><button>Lookup</button></router-link> -->
        </form>
    </div>
</template>
 
<script>
export default {
    name: 'sidebar',
    computed: {
        playerIDVal() {
            return document.querySelector('#playerID').value;
        }
    }
};
</script>
 
<style lang='scss' scoped>
@import '../assets/_scss/_playerSearch';
</style>