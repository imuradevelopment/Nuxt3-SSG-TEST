import { useActiveIndexStore } from "~/stores/activeIndex";

export default defineNuxtRouteMiddleware((to, from) => {
    // アクティブなインデックスを管理するストアを使用
    const activeIndexStore = useActiveIndexStore();
    // ルートが変更されたときに、アクティブなインデックスを更新
    activeIndexStore.activeIndex = to.path;
});
