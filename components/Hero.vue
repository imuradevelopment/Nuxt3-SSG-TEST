<template>
    <div id="hero">
        <div id="text">
            <div class="line">
                <span class="main-message" ref="mainMessage"></span>
                <span class="cursor cursor1" ref="cursor1"></span>
            </div>
            <div class="line">
                <span class="sub-message1" ref="subMessage1"></span>
                <span class="cursor cursor2" ref="cursor2"></span>
            </div>
            <div class="line">
                <span class="sub-message2" ref="subMessage2"></span>
                <span class="cursor cursor3" ref="cursor3"></span>
            </div>
        </div>
        <div id="background"></div>
    </div>
</template>

<style scoped>
#hero {
    width: 100%;
    max-width: 1280px;
    height: 450px;
    background-color: #005FB5;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

#text {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: #00bfff;
    position: relative;
    z-index: 1;
}

.line {
    margin-bottom: 10px;
    position: relative;
}

.main-message {
    display: inline-block;
    position: relative;
    font-size: 72px;
}

.sub-message1,
.sub-message2 {
    display: inline-block;
    position: relative;
    font-size: 24px;
}

.cursor {
    width: 15px;
    height: 30px;
    background-color: #00bfff;
    animation: blink 1s infinite;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    display: none;
}

.cursor1 {
    left: 50%;
}

.cursor2 {
    left: 50%;
}

.cursor3 {
    left: 50%;
}

#background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: radial-gradient(circle, black 10%, transparent 80%);
    background-size: cover;
    background-position: center;
    transform: translateZ(-1px);
}

@keyframes blink {
    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}
</style>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const mainMessage = ref(null)
const subMessage1 = ref(null)
const subMessage2 = ref(null)
const cursor1 = ref(null)
const cursor2 = ref(null)
const cursor3 = ref(null)

const heroText = {
    main: "Solution & Evolution",
    sub1: "新しい発想と技術とコミュニケーションで問題を解決し、",
    sub2: "より良い方法をご提案させていただきます。",
}

function typeText(element, text, speed) {
    return new Promise((resolve) => {
        let i = 0
        const typing = setInterval(() => {
            if (i < text.length) {
                element.textContent += text[i]
                i++
            } else {
                clearInterval(typing)
                setTimeout(resolve, speed)
            }
        }, 200)
    })
}

async function typeWithCursor(element, text, cursor) {
    cursor.style.display = "inline-block"
    let i = 0
    cursor.style.left = "50%"
    for (i; i < text.length; i++) {
        element.textContent += text[i]
        await new Promise((resolve) => setTimeout(resolve, 100))
        cursor.style.left = `calc(50% + ${element.offsetWidth / 2}px + 8px)`
        cursor.style.height = `${element.offsetHeight * 0.6}px`
        cursor.style.width = `8px`
    }
    cursor.style.display = "none"
}

let animationTimer = null

async function startAnimation() {
    await typeWithCursor(mainMessage.value, heroText.main, cursor1.value)
    await typeWithCursor(subMessage1.value, heroText.sub1, cursor2.value)
    await typeWithCursor(subMessage2.value, heroText.sub2, cursor3.value)

    // アニメーションが終了したら3秒後に新しいアニメーションを開始
    animationTimer = setTimeout(() => {
        mainMessage.value.textContent = ""
        subMessage1.value.textContent = ""
        subMessage2.value.textContent = ""
        startAnimation()
    }, 3000)
}

onMounted(() => {
    startAnimation()
})

onUnmounted(() => {
    if (animationTimer) {
        clearTimeout(animationTimer)
    }
})
</script>
