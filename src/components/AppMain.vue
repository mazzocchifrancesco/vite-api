<script>
import AppCard from './AppCard.vue'

export default {
    name: "AppMain",
    components: {
        AppCard

    },

}
</script>
<template>
    <div id="main" class="p-5">
        <AppCard />
    </div>
</template>
<style scoped>
#main {
    background-color: rgb(232, 204, 170);
}
</style>