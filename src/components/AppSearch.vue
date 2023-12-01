<script>
import { database } from "../database.js"
import axios from 'axios';


export default {
    name: "AppSearch",
    data() {
        return {
            database
        }
    },
    methods: {
        search() {
            console.log("Cerca: ", this.database.searchString);
            if (this.database.searchString != "") {

                this.database.birreria == [],
                    axios.get(`https://api.openbrewerydb.org/v1/breweries?by_country=ireland&by_city=${this.database.searchString}&per_page=6`).then(risultato => {
                        this.database.birreria = risultato.data;
                        console.log(this.database.birreria);
                    });
            }
            else {
                axios.get(this.database.apiUrl).then(risultato => {
                    this.database.birreria = risultato.data;
                    console.log(this.database.birreria);
                });
            }


        }
    },
    mounted() {
    }
}
</script>

<template>
    <div class="d-flex justify-content-center flex-column align-items-center p-3">

        <p>CERCA LA BIRRERIA</p>
        <div>
            <input placeholder="Inserisci una città" v-model="database.searchString" class="me-3">
            <button @click="search">Cerca</button>
        </div>

    </div>
</template>

<style scoped></style>