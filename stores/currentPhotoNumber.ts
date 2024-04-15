import { defineStore } from "pinia";

export const useCurrentPhotoNumberStore = defineStore("currentPhotoNumberStore", {
    state: () => {
        return {
            currentPhotoNumber: 0,
        };
    },
    persist: true,
});
