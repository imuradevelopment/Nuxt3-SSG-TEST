<template>
    <div class="glass-container"> <!-- ガラスの板を表すdiv要素 -->
        <div class="glass-text">
            <slot name="content">ガラスの上に表示するコンテンツ</slot>
        </div> <!-- ガラスの上に表示するテキスト -->
    </div>
  </template>
  
  <style>
  .glass-container {
    margin: auto; /* ガラスの板のマージン */
    background-color: rgba(0, 0, 0, 0.2); /* ガラスの板の背景色を半透明にする */
    /* backdrop-filter: blur(5px); ガラスの板の背後にあるコンテンツをぼかす */
    /* box-shadow: inset 0 0 100px white; ガラスの板の内側に白い影をつける */
    /* filter: brightness(1.2); ガラスの板の明るさを上げる */
    /* transform: rotateX(30deg); ガラスの板をX軸方向に30度回転させる */
    /* perspective: 500px; ガラスの板に遠近感をつける */
    border-radius: 1rem; /* ガラスの板の角を丸くする */
    /* border: 2px solid rgba(16, 16, 16, 0.5); ガラスの板の枠線を半透明にする */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* ガラスの板の外側に黒い影をつける */
    padding: 1rem;
  }
  </style>
  