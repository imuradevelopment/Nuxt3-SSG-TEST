<template>
    <div id="hero">
        <div id="text">
            <div class="line">
                <span class="main-message"></span>
                <span class="cursor cursor1"></span>
            </div>
            <div class="line">
                <span class="sub-message1"></span>
                <span class="cursor cursor2"></span>
            </div>
            <div class="line">
                <span class="sub-message2"></span>
                <span class="cursor cursor3"></span>
            </div>
        </div>
        <div id="background"></div>
    </div>
</template>
  
<style scoped>
body {
    margin: 0;
}

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

    background-size: cover;
    background-position: center;
    transform: translateZ(-1px);
}

@keyframes blink {
    background: radial-gradient(circle, black10%, transparent70%);
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
  
<script>
const mainMessage = document.querySelector(".main-message");
const subMessage1 = document.querySelector(".sub-message1");
const subMessage2 = document.querySelector(".sub-message2");
const cursors = document.querySelectorAll(".cursor");

const heroText = {
    main: "Solution & Evolution",
    sub1: "新しい発想と技術とコミュニケーションで問題を解決し、",
    sub2: "より良い方法をご提案させていただきます。",
};

function typeText(element, text, speed) {
    return new Promise((resolve) => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                element.textContent += text[i];
                i++;
            } else {
                clearInterval(typing);
                setTimeout(resolve, speed);
            }
        }, 200);
    });
}

async function typeWithCursor(element, text, cursor) {
    cursor.style.display = "inline-block";
    let i = 0;
    cursor.style.left = "50%";
    for (i; i < text.length; i++) {
        element.textContent += text[i];
        await new Promise((resolve) => setTimeout(resolve, 100));
        cursor.style.left = `calc(50% + ${element.offsetWidth / 2}px + 8px)`;
        cursor.style.height = `${element.offsetHeight * 0.6}px`;
        cursor.style.width = `8px`;
    }
    cursor.style.display = "none";
}

async function startAnimation() {
    await typeWithCursor(mainMessage, heroText.main, cursors[0]);
    await typeWithCursor(subMessage1, heroText.sub1, cursors[1]);
    await typeWithCursor(subMessage2, heroText.sub2, cursors[2]);


    アニメーションが終了したら3秒後に新しいアニメーションを開始
    setTimeout(() => {
        mainMessage.textContent = "";
        subMessage1.textContent = "";
        subMessage2.textContent = "";
        startAnimation();
    }, 3000);

}

startAnimation();
</script>
  