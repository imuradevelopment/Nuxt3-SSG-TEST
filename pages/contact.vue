<template>
    <section class="py-12 mb-6 flex flex-col justify-center items-center bg-cover bg-[url('/images/contact/001.png')]">
        <h1 id="contact01" class="linkScroll m-4 text-4xl font-bold text-white">お問い合わせ</h1>
        <div class="mr-10 text-lg font-bold text-white">Contact</div>
    </section>

    <section class="mb-4">
        <div class="flex justify-center items-center">
            <div class="mb-4 w-4/6 flex justify-center items-center">
                <h2 class="linkScroll text-4xl font-bold">お問い合わせフォーム</h2>
            </div>
        </div>
        <el-steps class="mb-4" style="max-width: 1280px" :active="active" align-center>
            <el-step title="Step 1" />
            <el-step title="Step 2" />
            <el-step title="Step 3" />
        </el-steps>


        <div class="flex justify-center items-center">
            <div class="w-4/6 flex justify-center items-center">
                <form v-if="active == 1" class="mb-4 w-full">
                    <div class="w-full flex flex-col">
                        <div class="flex w-full">
                            ステップ1
                        </div>
                        <div class="flex w-full justify-center items-center">
                            <!-- <el-button type="primary" @click="next">この内容で確認する</el-button> -->
                            <CustomArrowEventButton color-type="blue-bg-white" arrowType="none" :click-handler="next">
                                <template #buttonText>
                                    この内容で確認する
                                </template>
                            </CustomArrowEventButton>
                        </div>
                    </div>
                </form>
                <form v-if="active == 2" class="mb-4 w-full">
                    <div class="w-full flex flex-col">
                        <div class="flex w-full">
                            ステップ2
                        </div>
                        <div class="flex w-full justify-center items-center">
                            <!-- <el-button type="info" @click="prev">修正する</el-button>
                            <el-button type="primary" @click="next">問い合わせする</el-button> -->
                            <CustomArrowEventButton color-type="yellow" arrowType="none" :click-handler="prev">
                                <template #buttonText>
                                    修正する
                                </template>
                            </CustomArrowEventButton>
                            <CustomArrowEventButton color-type="blue-bg-white" arrowType="none" :click-handler="next">
                                <template #buttonText>
                                    問い合わせする
                                </template>
                            </CustomArrowEventButton>
                        </div>
                    </div>
                </form>
                <form v-if="active == 3" class="mb-4 w-full">
                    <div class="w-full flex flex-col">
                        <div class="flex w-full">
                            ステップ3
                        </div>
                        <div class="flex w-full justify-center items-center">
                            <!-- <el-button type="primary" @click="next">Topに戻る</el-button> -->
                            <CustomArrowEventButton color-type="blue-bg-white" arrowType="none" to="/">
                                <template #buttonText>
                                    Topに戻る
                                </template>
                            </CustomArrowEventButton>
                        </div>
                    </div>
                </form>
                <div v-if="active == 1">
                </div>
                <div v-if="active == 2" class="flex justify-center items-center gap-10">
                </div>
                <div v-if="active == 3">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomArrowEventButton from '~/components/CustomArrowEventButton.vue'
import CustomArrowButton from '~/components/CustomArrowButton.vue'

const active = ref(1)

const startIndex = 1
const finalIndex = 3

const next = () => {
    if (active.value++ >= finalIndex) active.value = startIndex
}

const prev = () => {
    if (active.value-- <= startIndex) active.value = finalIndex
}
</script>
<style scoped></style>