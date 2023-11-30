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
        <div class="row">

            <div v-for="birreria in this.database.birreria" class="d-flex flex-column col-3">
                <h3>{{ birreria.name }}</h3>
                <p>{{ birreria.city }}</p>
                <p></p>

            </div>
        </div>
    </div>
</template>
<style scoped></style>