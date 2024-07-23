import { defineStore } from "pinia";

export const useTabStore = defineStore("tab", {
    state: () => ({
        activeTab: "first",
    }),
    actions: {
        setActiveTab(tab: string) {
            this.activeTab = tab;
        },
    },
});
