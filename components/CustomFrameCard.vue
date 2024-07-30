<template>
    <div class="wrapper">
        <h3
            class="title">
            <slot name="title"></slot>
        </h3>
        <p
            class="content">
            <slot name="content"></slot>
        </p>
    </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.title {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    font-weight: bold;
    overflow-wrap: break-word;
    text-align: center;
    color: var(--custom-color-gray);
    border-radius: 0.25rem;
    border: 1px solid var(--custom-color-gray);
    width: max-content;
    transform: translateY(50%);
    background-color: white;

    @media (min-width: 768px) {
        font-size: 1.125rem;
    }


}

.content {
    max-width: 48rem;
    width: 100%;
    padding: 1rem;
    padding-top: 2rem;
    line-height: 1.75rem;
    font-size: 0.875rem;
    white-space: pre-line;
    overflow-wrap: break-word;
    word-break: keep-all;
    text-align: center;
    border-radius: 0.25rem;
    border: 1px solid var(--custom-color-gray);

    @media (min-width: 768px) {
        line-height: 2rem;
        font-size: 1rem;
    }
}
</style>