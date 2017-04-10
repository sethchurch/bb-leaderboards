<template>
<div class='user-card' >
    <h3 class='user-card__map'>{{ rank + getPlaceSuffix}}</h3>
    <h4 class='user-card__time'>{{ time.toFixed(2) + 's' }}</h4>
</div>
</template>
 
<script>
export default {
    name: 'userCard',
    props: ['rank', 'time'],
    computed: {
        getPlaceSuffix() {
            if (this.rank == 1 || (this.rank > 20 && this.rank.toString().charAt(1) == '1')) { return 'st' };
            if (this.rank == 2 || (this.rank > 20 && this.rank.toString().charAt(1) == '2')) { return 'nd' };
            if (this.rank == 3 || (this.rank > 20 && this.rank.toString().charAt(1) == '3')) { return 'rd' };
            return 'th';
        },
    },
};
</script>
 
<style lang='scss' scoped>
@import '../assets/_scss/_userCard';
</style>