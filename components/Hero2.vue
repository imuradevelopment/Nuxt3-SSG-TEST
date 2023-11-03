<template>
    <div style="display: flex; height: 450px">
        <div
            id="OverlayElement"
            style="
                margin: auto;
                margin-left: 3rem;
                flex: 1;
                margin-right: -17%;
            "
        >
            <h2>Solution & Evolution</h2>
            <div>
                新しい発想と技術とコミュニケーションで問題を解決し、<br />
                より良い方法をご提案させていただきます.
            </div>
        </div>
        <!-- 右側にアニメーションを表示するための要素 -->
        <div id="LineAnimation" style="width: 60%; float: right"></div>
    </div>
</template>
  
<script setup>
import { onMounted, ref } from 'vue'
const { default: THREE } = import.meta.globEagerImport('./node_modules/three/build/three.module.js')
const { document } = useBrowser()

// 線の数を定義する
const numLines = 300

// 線のオブジェクトを格納する配列を作成する
const lines = ref([])

// ランダムな青系統の色の配列
const colors = [
    "#0F5474", "#5E7C85", "#5E7C85", "#475189", "#243250", "#1A4472", "#0067C0", "#23274F", 
];

// シーンを作成する
const scene = new THREE.Scene()

// カメラを作成する
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)

// レンダラーを作成する
const renderer = new THREE.WebGLRenderer({ antialias: true })

// コンポーネントがマウントされたときに実行される関数を定義する
onMounted(() => {
    // アニメーションを表示する要素を取得する
    let animationCanvas = document.getElementById("LineAnimation")

    // 要素の幅と高さを取得する
    let width = animationCanvas.offsetWidth
    let height = animationCanvas.offsetHeight

    // カメラの位置と向きを設定する
    camera.position.set(0, 0, 5)
    camera.lookAt(0, 0, 0)

    // レンダラーのサイズと要素への追加を行う
    renderer.setSize(width, height)
    animationCanvas.appendChild(renderer.domElement)

    // ウィンドウがリサイズされたときに実行される関数を登録する
    window.addEventListener("resize", () => {
        // 要素の幅と高さとカメラのアスペクト比とレンダラーのサイズを更新する
        width = animationCanvas.offsetWidth
        height = animationCanvas.offsetHeight
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
    })

    // 線の数だけ繰り返す
    for (let i = 0; i < numLines; i++) {
        // 線の形状と座標と色相と色と不透明度と材質とオブジェクトと長さを定義する
        const lineGeometry = new THREE.BufferGeometry()
        const length = Math.random() * 4 + 1
        const positions = new Float32Array([
            Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2,
            Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 4 - 2
        ])
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const hue = Math.random() * 0.3 + 0.6
        const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)])
        const opacity = Math.random() * 0.5 + 0.3
        const lineMaterial = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: opacity })
        const line = new THREE.Line(lineGeometry, lineMaterial)
        line.length = length

        // シーンに線を追加する
        scene.add(line)

        // 配列に線を追加する
        lines.value.push(line)
    }

    // アニメーションを実行する関数を呼び出す
    animate()
})

// アニメーションを実行する関数を定義する
const animate = () => {
    // 次のフレームで再びこの関数を呼び出すように登録する
    requestAnimationFrame(animate)

    // 配列に格納された線ごとに繰り返す
    lines.value.forEach(line => {
        // 線を回転させる
        line.rotation.x += 0.005
        line.rotation.y += 0.005
        line.rotation.z += 0.005

        // 回転角度が大きくなると、線が見えなくなる可能性がある
        // その場合は、回転角度を0に戻す
        if (line.rotation.x > 2 * Math.PI) {
            line.rotation.x = 0
        }
        if (line.rotation.y > 2 * Math.PI) {
            line.rotation.y = 0
        }
        if (line.rotation.z > 2 * Math.PI) {
            line.rotation.z = 0
        }
    })

    // レンダラーでシーンとカメラから画像を生成する
    renderer.render(scene, camera)
}
</script>
  
<style>
#LineAnimation {
    clip-path: polygon(55% 0%, 100% 0%, 100% 100%, 0% 100%);
}
</style>
  