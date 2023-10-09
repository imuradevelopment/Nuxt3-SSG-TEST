export default defineNuxtPlugin(() => {
    onNuxtReady(async () => {
        alert('onNuxtReady')
    })
})