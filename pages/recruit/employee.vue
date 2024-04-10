<template>
    <div>

        <section class="mb-12 md:mb-24 flex bg-cover bg-[url('/images/recruit/employee/001.png')]">
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue"
                style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <div class="flex flex-col grow">
                <h1 id="recruit-employee01" class="linkScroll self-end mx-8 text-2xl sm:text-4xl font-bold text-white">
                    社員紹介
                </h1>
                <p
                    class="pl-28 pr-4 -ml-28 mt-12 text-center mb-4 py-2 text-base md:text-lg font-bold text-white bg-custom-blue/70">
                    ベイルの先輩社員から貰った<br class="inline-block md:hidden" />コメントを紹介します。</p>
            </div>
        </section>

        <section class="mb-12 md:mb-24">
            <h2 id="recruit-employee02 mb-4"
                class="pl-16 pr-8 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">
                インタビュー</h2>
            <div class=" mx-4">
                <CarouselEmployee :pics="[
                    {
                        src: '/images/recruit/employee/003.png',
                        alt: '人物写真Y.K',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>システムエンジニア<br />Y.K<br />システム部<br />東京理科大学<br />理工学部情報学科出身</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>リリース済システムの保守開発の検証、及びシステムの提案書作成やデータ活用の一環として、企業内に存在するデータ品質の確保・向上に携わっています。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>システム開発は、ものづくりです。さまざまな工程がありますが、どの工程もとても大事な作業です。例えば、テスト工程で想定と違う結果となってしまったとき、その問題解析や修正などを素早く対応しなければなりません。1人でわからなければチーム全体で協力して取り組み、修正後に再度テストを実施して正しい結果が出力されることを確認します。このような一つひとつの小さな作業の積み重ねによりシステムが完成し、お客様に納品することができたその時の達成感は、とても印象的です。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>就職活動の際には自分が持っている軸を大事にしてください。入社してから思っていたのとは違うなというのはとてももったいないです。私の場合は同じ企業でも面接毎に自分のやりたいことが本当にできるのか面接担当者に聞きました。選んだ会社が本当に自分とあっているのか、これでもかというくらい調べて納得のいく結果を得られるよう頑張ってください。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'center'
                    },
                    {
                        src: '/images/recruit/employee/004.jpg',
                        alt: '人物写真Y.K',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>システムエンジニア<br />Y.K<br />システム部<br />東京理科大学<br />理工学部情報学科出身</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>リリース済システムの保守開発の検証、及びシステムの提案書作成やデータ活用の一環として、企業内に存在するデータ品質の確保・向上に携わっています。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>システム開発は、ものづくりです。さまざまな工程がありますが、どの工程もとても大事な作業です。例えば、テスト工程で想定と違う結果となってしまったとき、その問題解析や修正などを素早く対応しなければなりません。1人でわからなければチーム全体で協力して取り組み、修正後に再度テストを実施して正しい結果が出力されることを確認します。このような一つひとつの小さな作業の積み重ねによりシステムが完成し、お客様に納品することができたその時の達成感は、とても印象的です。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>就職活動の際には自分が持っている軸を大事にしてください。入社してから思っていたのとは違うなというのはとてももったいないです。私の場合は同じ企業でも面接毎に自分のやりたいことが本当にできるのか面接担当者に聞きました。選んだ会社が本当に自分とあっているのか、これでもかというくらい調べて納得のいく結果を得られるよう頑張ってください。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'center'
                    },
                    {
                        src: '/images/recruit/employee/005.jpg',
                        alt: '人物写真Y.K',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>システムエンジニア<br />Y.K<br />システム部<br />東京理科大学<br />理工学部情報学科出身</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>リリース済システムの保守開発の検証、及びシステムの提案書作成やデータ活用の一環として、企業内に存在するデータ品質の確保・向上に携わっています。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>システム開発は、ものづくりです。さまざまな工程がありますが、どの工程もとても大事な作業です。例えば、テスト工程で想定と違う結果となってしまったとき、その問題解析や修正などを素早く対応しなければなりません。1人でわからなければチーム全体で協力して取り組み、修正後に再度テストを実施して正しい結果が出力されることを確認します。このような一つひとつの小さな作業の積み重ねによりシステムが完成し、お客様に納品することができたその時の達成感は、とても印象的です。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>就職活動の際には自分が持っている軸を大事にしてください。入社してから思っていたのとは違うなというのはとてももったいないです。私の場合は同じ企業でも面接毎に自分のやりたいことが本当にできるのか面接担当者に聞きました。選んだ会社が本当に自分とあっているのか、これでもかというくらい調べて納得のいく結果を得られるよう頑張ってください。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'right top'
                    },
                    {
                        src: '/images/recruit/employee/006.jpg',
                        alt: '人物写真Y.K',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>システムエンジニア<br />Y.K<br />システム部<br />東京理科大学<br />理工学部情報学科出身</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>リリース済システムの保守開発の検証、及びシステムの提案書作成やデータ活用の一環として、企業内に存在するデータ品質の確保・向上に携わっています。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>システム開発は、ものづくりです。さまざまな工程がありますが、どの工程もとても大事な作業です。例えば、テスト工程で想定と違う結果となってしまったとき、その問題解析や修正などを素早く対応しなければなりません。1人でわからなければチーム全体で協力して取り組み、修正後に再度テストを実施して正しい結果が出力されることを確認します。このような一つひとつの小さな作業の積み重ねによりシステムが完成し、お客様に納品することができたその時の達成感は、とても印象的です。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>就職活動の際には自分が持っている軸を大事にしてください。入社してから思っていたのとは違うなというのはとてももったいないです。私の場合は同じ企業でも面接毎に自分のやりたいことが本当にできるのか面接担当者に聞きました。選んだ会社が本当に自分とあっているのか、これでもかというくらい調べて納得のいく結果を得られるよう頑張ってください。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'right top'
                    },
                    {
                        src: '/images/recruit/employee/007.jpg',
                        alt: '人物写真Y.K',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>システムエンジニア<br />Y.K<br />システム部<br />東京理科大学<br />理工学部情報学科出身</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>リリース済システムの保守開発の検証、及びシステムの提案書作成やデータ活用の一環として、企業内に存在するデータ品質の確保・向上に携わっています。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>システム開発は、ものづくりです。さまざまな工程がありますが、どの工程もとても大事な作業です。例えば、テスト工程で想定と違う結果となってしまったとき、その問題解析や修正などを素早く対応しなければなりません。1人でわからなければチーム全体で協力して取り組み、修正後に再度テストを実施して正しい結果が出力されることを確認します。このような一つひとつの小さな作業の積み重ねによりシステムが完成し、お客様に納品することができたその時の達成感は、とても印象的です。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>就職活動の際には自分が持っている軸を大事にしてください。入社してから思っていたのとは違うなというのはとてももったいないです。私の場合は同じ企業でも面接毎に自分のやりたいことが本当にできるのか面接担当者に聞きました。選んだ会社が本当に自分とあっているのか、これでもかというくらい調べて納得のいく結果を得られるよう頑張ってください。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'center'
                    },
                    {
                        src: '/images/recruit/employee/008.jpg',
                        alt: '人物写真Y.K',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>システムエンジニア<br />Y.K<br />システム部<br />東京理科大学<br />理工学部情報学科出身</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>リリース済システムの保守開発の検証、及びシステムの提案書作成やデータ活用の一環として、企業内に存在するデータ品質の確保・向上に携わっています。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>システム開発は、ものづくりです。さまざまな工程がありますが、どの工程もとても大事な作業です。例えば、テスト工程で想定と違う結果となってしまったとき、その問題解析や修正などを素早く対応しなければなりません。1人でわからなければチーム全体で協力して取り組み、修正後に再度テストを実施して正しい結果が出力されることを確認します。このような一つひとつの小さな作業の積み重ねによりシステムが完成し、お客様に納品することができたその時の達成感は、とても印象的です。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>就職活動の際には自分が持っている軸を大事にしてください。入社してから思っていたのとは違うなというのはとてももったいないです。私の場合は同じ企業でも面接毎に自分のやりたいことが本当にできるのか面接担当者に聞きました。選んだ会社が本当に自分とあっているのか、これでもかというくらい調べて納得のいく結果を得られるよう頑張ってください。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'center top'
                    },
                    {
                        src: '/images/recruit/employee/009.jpg',
                        alt: '人物写真Y.K',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>システムエンジニア<br />Y.K<br />システム部<br />東京理科大学<br />理工学部情報学科出身</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>リリース済システムの保守開発の検証、及びシステムの提案書作成やデータ活用の一環として、企業内に存在するデータ品質の確保・向上に携わっています。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>システム開発は、ものづくりです。さまざまな工程がありますが、どの工程もとても大事な作業です。例えば、テスト工程で想定と違う結果となってしまったとき、その問題解析や修正などを素早く対応しなければなりません。1人でわからなければチーム全体で協力して取り組み、修正後に再度テストを実施して正しい結果が出力されることを確認します。このような一つひとつの小さな作業の積み重ねによりシステムが完成し、お客様に納品することができたその時の達成感は、とても印象的です。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>就職活動の際には自分が持っている軸を大事にしてください。入社してから思っていたのとは違うなというのはとてももったいないです。私の場合は同じ企業でも面接毎に自分のやりたいことが本当にできるのか面接担当者に聞きました。選んだ会社が本当に自分とあっているのか、これでもかというくらい調べて納得のいく結果を得られるよう頑張ってください。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'right top'
                    },
                    {
                        src: '/images/recruit/employee/010.jpg',
                        alt: '人物写真Y.K',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>システムエンジニア<br />Y.K<br />システム部<br />東京理科大学<br />理工学部情報学科出身</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>リリース済システムの保守開発の検証、及びシステムの提案書作成やデータ活用の一環として、企業内に存在するデータ品質の確保・向上に携わっています。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>システム開発は、ものづくりです。さまざまな工程がありますが、どの工程もとても大事な作業です。例えば、テスト工程で想定と違う結果となってしまったとき、その問題解析や修正などを素早く対応しなければなりません。1人でわからなければチーム全体で協力して取り組み、修正後に再度テストを実施して正しい結果が出力されることを確認します。このような一つひとつの小さな作業の積み重ねによりシステムが完成し、お客様に納品することができたその時の達成感は、とても印象的です。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>就職活動の際には自分が持っている軸を大事にしてください。入社してから思っていたのとは違うなというのはとてももったいないです。私の場合は同じ企業でも面接毎に自分のやりたいことが本当にできるのか面接担当者に聞きました。選んだ会社が本当に自分とあっているのか、これでもかというくらい調べて納得のいく結果を得られるよう頑張ってください。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'right'
                    },
                    // 他の画像オブジェクト...
                ]"></CarouselEmployee>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import CarouselEmployee from '~/components/CarouselEmployee.vue'
</script>

<style scoped></style>