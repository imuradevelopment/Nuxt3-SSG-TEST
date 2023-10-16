import { useActiveIndexStore } from '~/stores/activeIndex'
export default defineNuxtRouteMiddleware((to, from) => {
    const activeIndexStore = useActiveIndexStore()
    activeIndexStore.activeIndex = to.path
  })