<template>
    <div class="hidden md:flex" style="height: 450px">
      <div id="overlay-element" style="margin: auto; margin-left: 3rem; flex: 1; margin-right: -17%">
        <h2 class="text-2xl bold mb-2">Solution & Evolution</h2>
        <div class="text-sm bold">
          新しい発想と技術とコミュニケーションで問題を解決し、<br />
          より良い方法をご提案させていただきます。
        </div>
      </div>
      <div id="line-animation" ref="lineAnimation" style="width: 60%; float: right; clip-path: polygon(55% 0%, 100% 0%, 100% 100%, 0% 100%)" />
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  import * as THREE from 'three'
  
  const lineAnimation = ref(null) // ここを変更
  let camera, scene, renderer
  
  onMounted(() => {
    init()
    animate()
  })
  
  onUnmounted(() => {
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
    requestAnimationFrame(animate)
  
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
  </script>
  
  <style scoped>

  </style>
  