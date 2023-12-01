<script>
import AppCard from './AppCard.vue'
import AppSearch from './AppSearch.vue';
export default {
    name: "AppMain",
    components: {
        AppCard,
        AppSearch


    },

}
</script>
<template>
    <AppSearch />
    <div id="main" class="p-5">
        <AppCard />
    </div>
</template>
<style scoped>
#main {
    background-color: rgb(232, 204, 170);
}
</style>