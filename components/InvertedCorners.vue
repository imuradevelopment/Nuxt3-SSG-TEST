<template>
    <div class="wrapper_inverted-corners">
        <div class="inverted-corners">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
:root {
    --inverted-corners-background: #d1d5db;
    --inverted-corners-size: 2rem;
    --inverted-border-width: 1px;
}

.wrapper_inverted-corners {
    position: relative;
    border-bottom: solid var(--inverted-border-width) var(--inverted-corners-background);
    border-bottom-right-radius: calc(var(--inverted-corners-size)/4);
    margin-bottom: var(--inverted-corners-size);
    padding-bottom: calc(-1 * var(--inverted-corners-size));
    border: solid var(--inverted-border-width) var(--inverted-corners-background);
    border-radius: calc(var(--inverted-corners-size)/4) calc(var(--inverted-corners-size)/4) calc(var(--inverted-corners-size)/4) 0;
    /* 上の角を丸める */
}

.inverted-corners::after {
    content: '';
    position: absolute;
    bottom: calc(-1 * var(--inverted-border-width));
    left: 0px;
    border-bottom: var(--inverted-border-width) solid white;
    width: calc(var(--inverted-corners-size));
    transform: translate(-0.175px, 0px);

}

.inverted-corners {
    width: 100%;
    height: 100%;
    padding: 1rem;
    position: relative;

}

.wrapper_inverted-corners::before {
    content: '';
    top: 100%;
    left: calc(-1 * var(--inverted-border-width));
    position: absolute;
    z-index: 10;
    height: var(--inverted-corners-size);
    width: calc(var(--inverted-corners-size) + var(--inverted-border-width));
    background-color: transparent;
    border-top-left-radius: var(--inverted-corners-size);
    border-left: solid var(--inverted-border-width) var(--inverted-corners-background);
    border-top: solid var(--inverted-border-width) var(--inverted-corners-background);
}

.wrapper_inverted-corners::after {
    content: '';
    top: 100%;
    left: calc(-1 * var(--inverted-border-width));
    ;
    position: absolute;
    height: var(--inverted-corners-size);
    width: var(--inverted-corners-size);
    background-color: transparent;
    border-left: solid var(--inverted-border-width) var(--inverted-corners-background);
}</style>