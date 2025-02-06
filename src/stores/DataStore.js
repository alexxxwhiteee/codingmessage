import { defineStore } from "pinia";

export const useDataStore = defineStore('dataStore', {
    state: () => ({
        number: 0,
        text: '',
    })
})