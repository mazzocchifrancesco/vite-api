<script>
import { database } from "./database.js"
import axios from 'axios';

export default {
    name: "AppCard",
    components: {

    },
    data() {
        return {
            database
        }
    },
    mounted() {
        this.getBeer()
    },
    methods: {

        getBeer() {
            axios.get(this.database.apiUrl).then(risultato => {
                this.database.birreria = risultato.data;
                console.log(this.database.birreria);
            });
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="row gap-2 justify-content-center">

            <div id="card" v-for="birreria in this.database.birreria" class="d-flex flex-column col-3 p-3 ">
                <h5>{{ birreria.name }}</h5>
                <p><strong>città:</strong> {{ birreria.city }}</p>
                <p><strong>tipologia di birra:</strong> {{ birreria.brewery_type }}</p>
                <p><strong>sito web:</strong> {{ birreria.website_url }}</p>

            </div>
        </div>
    </div>
</template>
<style scoped>
#card {
    aspect-ratio: 1;
    background-color: white;
}
</style>