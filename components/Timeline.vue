<template>
    <!-- タイムラインの全体を中央に配置 -->
    <div class="center">
        <!-- タイムラインの線 -->
        <div class="timeline-line">
            <!-- タイムラインの項目をループで表示 -->
            <div v-for="(item, index) in items" :key="index" class="timeline-item">
                <!-- 月を表示 -->
                <div class="timeline-month">{{ item.month }}</div>
                <!-- タイムラインの点 -->
                <div class="timeline-dot">●</div>
                <!-- テキストや画像を表示するコンテナ -->
                <div class="timeline-content">
                    <!-- テキストがある場合に表示 -->
                    <div v-if="item.text" class="timeline-bubble">
                        <div class="timeline-text" v-html="item.text"></div>
                    </div>
                    <!-- 画像がある場合に表示 -->
                    <img v-if="item.image" class="timeline-image" :src="item.image" alt="image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// コンポーネントのプロパティを定義
defineProps({
    // タイムラインのデータを受け取る
    items: {
        type: Array,
        required: true
    }
})
</script>

<style scoped>
/* タイムライン全体を中央に配置 */
.center {
    margin-left: calc(50% - 3rem - 3px - 15rem);
}

@media screen and (max-width: 641px) {
    .center {
        margin-left: calc(50% - 3rem - 3px - 8rem);
    }
}

/* タイムラインの縦の線 */
.timeline-line {
    background-color: var(--custom-color-blue);
    height: 100%;
    margin-left: 4.25rem;
    position: relative;
    margin-top: 1.75rem;
    width: 3px;
    z-index: -1;
}

@media screen and (max-width: 641px) {
    .timeline-line {
        width: 2px;
    }
}

/* タイムラインの各項目 */
.timeline-item {
    width: max-content;
}

/* 月の表示スタイル */
.timeline-month {
    background-color: var(--custom-color-deepBlue);
    color: white;
    padding: 0.125rem 0.25rem 0.25rem 0.25rem;
    font-weight: 700;
    margin-right: 10px;
    position: absolute;
    left: -4rem;
    margin-top: -0.5rem;
    width: 3rem;
}

/* タイムラインの点 */
.timeline-dot {
    position: relative;
    color: var(--custom-color-deepBlue);
    border-radius: 50%;
    height: 1rem;
    margin-right: 10px;
    width: 1rem;
    left: -0.45rem;
    top: -0.25rem;
}

/* 吹き出しのスタイル */
.timeline-bubble {
    border: 1px solid var(--custom-color-deepBlue);
    background-color: var(--custom-color-deepBlue);
    color: white;
    border-radius: 10px;
    padding: 10px;
    position: relative;
    width: 30rem;
    left: 1.25rem;
    top: -2rem;
}

@media screen and (max-width: 641px) {
    .timeline-bubble {
        width: 16rem;
        top: -1.75rem;
    }
}

/* 吹き出しの矢印部分 */
.timeline-bubble::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 10px;
    border-top: 10px solid transparent;
    border-right: 10px solid var(--custom-color-deepBlue);
    border-bottom: 10px solid transparent;
}

/* テキストのスタイル */
.timeline-text {
    margin: 0;
}

/* 画像のスタイル */
.timeline-image {
    object-fit: cover;
    position: relative;
    width: 300px;
    overflow: hidden;
    margin: -0.75rem 0 1.75rem 1rem;
    filter: drop-shadow(0 0 5px var(--custom-color-deepBlue));
    border-radius: 1rem;
}

@media screen and (max-width: 641px) {
    .timeline-image {
        width: 16rem;
        filter: drop-shadow(0 0 7px var(--custom-color-deepBlue));
    }
}
</style>
