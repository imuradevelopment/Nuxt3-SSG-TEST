<template>
    <div class="center">
        <div class="timeline-line">
            <div v-for="(item, index) in items" :key="index" class="timeline-item">
                <div class="timeline-month">{{ item.month }}</div>
                <div class="timeline-dot">●</div>
                <div class="timeline-content">
                    <div class="timeline-bubble">
                        <div class="timeline-text">{{ item.text }}</div>
                    </div>
                    <div v-if="item.image" class="timeline-image">
                        <img :src="item.image" alt="image" />
                    </div>
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
.center {
    margin-left: calc(50% - 3rem - 2px - 15rem);
}
@media screen and (max-width: 641px) {
.center {
    margin-left: calc(50% - 3rem - 2px - 8rem);
}    
}
.timeline-line {
    background-color: #ccc;
    height: 100%;
    margin-left: 4.25rem;
    position: relative;
    margin-top: 1.75rem;
    width: 2px;
    z-index: -1;
}

@media screen and (max-width: 641px) {
  .timeline-line {
    background-color: #ccc;
    height: 100%;
    margin-left: 4.25rem;
    position: relative;
    margin-top: 1.75rem;
    width: 2px;
    z-index: -1;
}
}

.timeline-item {
  /* display: flex;
  align-items: center;
  margin: 20px 0; */
}

.timeline-month {
    font-weight: 700;
    margin-right: 10px;
    position: absolute;
    left: -3rem;
}

.timeline-dot {
position: relative;
    background-color: black;
    border-radius: 50%;
    height: 1rem;
    margin-right: 10px;
    width: 1rem;
    left: calc(-0.5rem);
}

/* .timeline-line {
  width: 2px;
  height: 100%;
  background-color: #ccc;
  position: absolute;
  left: 50%;
  top: 0;
  z-index: -1;
} */

.timeline-content {
  /* display: flex;
  flex-direction: column; */
}

.timeline-bubble {
border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    position: relative;
        width: 30rem;
    left: 1.25rem;
    top: -1.75rem;
}

@media screen and (max-width: 641px) {
  .timeline-bubble {
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 10px;
      position: relative;
      width: 16rem;
      left: 1.25rem;
      top: -1.75rem;
  }
}

.timeline-bubble::before {
  content: "";
  position: absolute;
  left: -10px;
  top: 10px;
  border-top: 10px solid transparent;
  border-right: 10px solid #ccc;
  border-bottom: 10px solid transparent;
}

.timeline-text {
  margin: 0;
}

.timeline-image {
    height: 150px;
    object-fit: cover;
    position: relative;
    width: 300px;
    overflow: hidden;
    margin: -0.75rem 0 1.75rem 1rem;
}
@media screen and (max-width: 641px) {
  .timeline-image {
      height: 150px;
      object-fit: cover;
      position: relative;
      width: 16rem;
      overflow: hidden;
      margin: -0.75rem 0 1.75rem 1rem;
  }
}
</style>
