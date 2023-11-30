import { reactive } from 'vue'

export const database = reactive({
    apiUrl: "https://api.openbrewerydb.org/v1/breweries?by_country=ireland&per_page=10",
    birreria: [],
})