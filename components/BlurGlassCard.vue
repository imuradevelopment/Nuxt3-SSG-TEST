<template>
    <div class="card">
        <p class="card-text"><slot>ガラスの上に表示するコンテンツ</slot></p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* カードのスタイル */
.card {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    backdrop-filter: saturate(180%) blur(7px);
    border: 1px solid rgba(255, 255, 255, 0.4); /* カードの縁 */
    border-radius: 10px; /* カードの角の丸み */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* カードの影 */
}

/* カード内のテキストのスタイル */
.card-text {
    padding: 20px;
}
</style>