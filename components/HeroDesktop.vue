<template>
  <div class="hidden md:flex" style="height: 450px">
    <div id="overlay-element" style="margin: auto; margin-left: 3rem; flex: 1; margin-right: -14%">
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
      </div>
    </div>
    <div id="line-animation" ref="lineAnimation"
      style="width: 60%; float: right; clip-path: polygon(55% 0%, 100% 0%, 100% 100%, 0% 100%)" />
  </div>
</template>
  
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

const lineAnimation = ref(null)
let camera, scene, renderer, resizeObserver, animationTimer // animationTimerを追加

onMounted(() => {
  startAnimation()
  init()
  animationTimer = animate() // animationTimerに代入
  // ResizeObserverを作成
  resizeObserver = new ResizeObserver(onResize) // コードに置き換え
  // lineAnimation要素にResizeObserverを適用
  resizeObserver.observe(lineAnimation.value) // コードに置き換え
})

onUnmounted(() => {
  // ResizeObserverを解除
  if(lineAnimation.value){
    resizeObserver.unobserve(lineAnimation.value) // コードに置き換え
  }
  if (animationTimer) {
    clearTimeout(animationTimer)
  }
  if(animationTimer2){
    clearTimeout(animationTimer2)
  }
  renderer.dispose()
})

function init() {
  // コンテナのサイズを取得
  const width = lineAnimation.value.clientWidth // ここを変更
  const height = lineAnimation.value.clientHeight // ここを変更

  // カメラを作成
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 5
  camera.lookAt(0, 0, 0)

  // シーンを作成
  scene = new THREE.Scene()

  // レンダラーを作成
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  lineAnimation.value.appendChild(renderer.domElement) // ここを変更

  // ラインを作成
  const numLines = 300
  const lines = []
  const colors = [
    '#0F5474',
    '#5E7C85',
    '#5E7C85',
    '#475189',
    '#243250',
    '#1A4472',
    '#0067C0',
    '#23274F',
  ]
  for (let i = 0; i < numLines; i++) {
    const lineGeometry = new THREE.BufferGeometry()
    const length = Math.random() * 4 + 1
    const positions = new Float32Array([
      Math.random() * 4 - 2,
      Math.random() * 4 - 2,
      Math.random() * 4 - 2,
      Math.random() * 4 - 2,
      Math.random() * 4 - 2,
      Math.random() * 4 - 2,
    ])
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const hue = Math.random() * 0.3 + 0.6
    const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)])
    const opacity = Math.random() * 0.5 + 0.3
    const lineMaterial = new THREE.LineBasicMaterial({
      color: color,
      transparent: true,
      opacity: opacity,
    })
    const line = new THREE.Line(lineGeometry, lineMaterial)
    line.length = length
    scene.add(line)
    lines.push(line)
  }
}

function animate() {
  animationTimer = requestAnimationFrame(animate) // animationTimerに代入

  // ラインを回転させる
  for (let i = 0; i < scene.children.length; i++) {
    scene.children[i].rotation.x += 0.005
    scene.children[i].rotation.y += 0.005
    scene.children[i].rotation.z += 0.005
    if (scene.children[i].rotation.x > 2 * Math.PI) {
      scene.children[i].rotation.x = 0
    }
    if (scene.children[i].rotation.y > 2 * Math.PI) {
      scene.children[i].rotation.y = 0
    }
    if (scene.children[i].rotation.z > 2 * Math.PI) {
      scene.children[i].rotation.z = 0
    }
  }

  // レンダリングする
  renderer.render(scene, camera)
}


// リサイズ時のコールバック関数
function onResize() {
  // lineAnimationがnullでないことをチェック
  if (lineAnimation.value) {
    // コンテナのサイズを取得
    const width = lineAnimation.value.clientWidth
    const height = lineAnimation.value.clientHeight
    // カメラのアスペクト比を更新
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    // レンダラーのサイズを更新
    renderer.setSize(width, height)
    // アニメーションをリセット
    for (let i = 0; i < scene.children.length; i++) {
      scene.children[i].rotation.x = 0
      scene.children[i].rotation.y = 0
      scene.children[i].rotation.z = 0
    }
  }
}


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
    cursor.style.left = "0%"
    for (i; i < text.length; i++) {
        element.textContent += text[i]
        await new Promise((resolve) => setTimeout(resolve, 100))
        cursor.style.left = `calc(0% + ${element.offsetWidth}px + 8px)`
        cursor.style.height = `${element.offsetHeight * 0.6}px`
        cursor.style.width = `8px`
    }
    cursor.style.display = "none"
}

let animationTimer2 = null

async function startAnimation() {
    await typeWithCursor(mainMessage.value, heroText.main, cursor1.value)
    await typeWithCursor(subMessage1.value, heroText.sub1, cursor2.value)
    await typeWithCursor(subMessage2.value, heroText.sub2, cursor3.value)

    // アニメーションが終了したら3秒後に新しいアニメーションを開始
    animationTimer2 = setTimeout(() => {
        mainMessage.value.textContent = ""
        subMessage1.value.textContent = ""
        subMessage2.value.textContent = ""
        startAnimation()
    }, 3000)
}
</script>
  
<style scoped>
#hero {
  width: 100%;
  background-color: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

#text {
  /* text-align: center; */
  font-family: "Montserrat", sans-serif;
  color: black;
  position: relative;
  z-index: 1;
}

.line {
  /* margin-bottom: 10px; */
  position: relative;
}

.main-message {
  display: inline-block;
  position: relative;
  font-size: 33px;
  font-weight: 700;
}

.sub-message1,
.sub-message2 {
  display: inline-block;
  position: relative;
  font-size: 12px;
  font-weight: 500;
}

.cursor {
  width: 15px;
  height: 30px;
  background-color: black;
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
  