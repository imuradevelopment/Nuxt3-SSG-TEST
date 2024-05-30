<template>
    <div class="step-component">
        <div v-for="(step, index) in steps" :key="index" class="step-item">
            <div class="step-content">
                <div class="step-number">
                    <span>{{ index + 1 }}</span>
                </div>
                <div class="step-description">
                    <h3 class="step-title">{{ step.title }}</h3>
                    <p class="step-details">{{ step.details }}</p>
                </div>
            </div>
            <div v-if="index < steps.length - 1" class="step-line"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        steps: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style scoped>
.step-component {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.step-item {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 1rem;
}

.step-content {
    display: flex;
    align-items: center;
}

.step-number {
    background-color: #4a90e2;
    color: white;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
}

.step-title {
    font-weight: bold;
    margin: 0;
}

.step-details {
    margin: 0;
}

.step-line {
    width: 2px;
    height: 2rem;
    background-color: black;
    margin-left: 1rem;
}
</style>
