<template>
    <div class="flex items-center justify-center flex-col">
        <h3
            class="ml-4 md:ml-0 py-2 px-4 text-base md:text-lg font-bold break-keep text-center text-custom-gray rounded border border-custom-gray w-fit translate-y-1/2 bg-white">
            <slot name="title"></slot>
        </h3>
        <p class="max-w-3xl w-full p-4 pt-8 text-sm md:text-base leading-7 md:leading-8 break-keep text-center rounded border border-custom-gray">
            <slot name="content"></slot>
        </p>
    </div>
</template>