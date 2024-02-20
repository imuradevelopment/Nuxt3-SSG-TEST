<template>
    <div class="container">
        <div class="row">
            <div v-for="event in events" :key="event.id" class="col-4">
                <div class="card mb-3">
                    <div class="card-header">
                        <h5 class="card-title">{{ event.month }}月</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{ event.title }}</p>
                        <p class="card-text">{{ event.description }}</p>
                        <img v-if="event.image" :src="event.image" class="card-img-top" alt="イベント画像">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// イベントのデータは仮のものです。実際にはAPIやストアから取得することができます。
const events = [
    {
        id: 1,
        month: 4,
        title: "プログラミング初級者講座（4日間）",
        description: "4日間でプログラミングの基本、Javaを中心としたプログラミングの基礎を学びます。JavaScript、HTML、CSS、データベースについても学びます。実際の企業には欠かせないプロジェクトの進め方やチーム開発に役立ちます。",
        image: null
    },
    {
        id: 2,
        month: 8,
        title: "イベント一次審査会",
        description: "社会人技術者向けのイベントランキングに参加して頂き、一次審査を通過した方には賞金や特典があります。審査基準は技術力、創造性、オリジナリティなどです。",
        image: null
    },
    {
        id: 3,
        month: 9,
        title: "Nuxt3ハンズオン",
        description: "Nuxt3の新機能や使い方を実際に体験してみましょう。Nuxt3のエキスパートが丁寧に指導します。Vueの基本知識がある方が対象です。",
        image: "[4](https://57code.gitee.io/nuxt3-docs-zh/directory-structure/components.html)"
    },
    {
        id: 4,
        month: 10,
        title: "ハロウィンパーティー",
        description: "仮装して楽しく盛り上がりましょう。仮装コンテストやゲームなどのイベントもあります。参加費は無料ですが、事前に申し込みが必要です。",
        image: null
    },
    {
        id: 5,
        month: 11,
        title: "AIチャレンジ",
        description: "AIを使って面白いものや役に立つものを作ってみましょう。テーマは自由です。優秀な作品には賞金や表彰があります。",
        image: null
    },
    {
        id: 6,
        month: 12,
        title: "忘年会",
        description: "今年一年の成果を振り返りながら、仲間と楽しく飲みましょう。食事や飲み物は無料です。参加者にはプレゼントもあります。",
        image: null
    },
    {
        id: 7,
        month: 3,
        title: "卒業式",
        description: "卒業生の皆さん、おめでとうございます。卒業証書授与やスピーチなどの式典の後、懇親会もあります。卒業生以外の方も参加できます。",
        image: "/images/recruit/induction/002.png"
    }
]
</script>

<style scoped>
.card {
    background-color: #2196f3;
    color: white;
}

.card-title {
    font-weight: bold;
}

.card-text {
    font-size: 14px;
}
</style>
