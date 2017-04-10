<template>
<div class='user-card' >
    <h3 class='user-card__map'>{{ score.map }}</h3>
    <!-- <div class='user-card__ranking'>
        <i v-if='score.ranking.weekly' class="material-icons user-card__ranking--weekly">star</i>
        <i v-if='score.ranking.monthly' class="material-icons user-card__ranking--monthly">star</i>
        <i v-if='score.ranking.allTime' class="material-icons user-card__ranking--all-time">star</i>
    </div> -->
    <h4 class='user-card__time'>{{ score.time + 's' }}</h4>
</div>
</template>
 
<script>
export default {
    name: 'userCard',
    props: ['score']
};
</script>
 
<style lang='scss' scoped>
@import '../assets/_scss/_userCard';
</style>