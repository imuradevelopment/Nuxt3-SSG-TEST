<template>
    <div class="p-4 mx-auto speech-bubble-bottom">
        <slot name="content">

        </slot>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* 下方向の吹き出し */
/* 下方向の吹き出し */
.speech-bubble-bottom {
    position: relative;
    border: var(--border-width) solid var(--border-color);
    padding: 1rem;
    background-color: var(--background-color);
    border-radius: var(--content-radius);
}

.speech-bubble-bottom::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    border: var(--border-width) solid var(--border-color);
    border-width: 0 var(--arrow-size) var(--arrow-size) 0;
    border-color: transparent transparent var(--border-color) transparent;
    transform: translate(-50%, calc(-50% + var(--border-width))) rotate(315deg);
}

.speech-bubble-bottom::after {
    content: "";
    position: absolute;
    top: calc(100% - var(--border-width));
    left: 50%;
    background: white;
    border: var(--border-width) solid var(--background-color);
    border-width: 0 var(--arrow-size) var(--arrow-size) 0;
    border-color: transparent transparent var(--background-color) transparent;
    transform: translate(-50%, calc(-50% + var(--border-width))) rotate(315deg);
}
</style>
