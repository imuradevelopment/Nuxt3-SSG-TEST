import { defineStore } from "pinia";

export const useActiveIndexStore = defineStore('activeIndexStore', {
    state: () => {
        return {
            'activeIndex': "0"
        }
    }
})