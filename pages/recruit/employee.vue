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
                        src: '/images/recruit/employee/005.jpg',
                        alt: '人物写真T.I.',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>若手エンジニア<br />T.I.<br />文系私立大学卒<br />2023年入社</div></div></div>`,
        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>従来紙ベースで行われていた書類のやり取りを、デジタル化しシステム上で送受信可能にする開発に携わっています。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>プログラミング未経験からの入社でしたが、わからなかったことが少しずつ理解できるようになったり、全然できなかったことが今ではできるようになったりと自分の成長が目に見えて感じられるのが嬉しいです。また、チームでの作業も楽しいです。時には一人では解決できない問題が出てきたとき、チーム全体で協力して解決していくプロセスがとても面白いですし、チームで一つのモノを作り上げていく作業にはやりがいも感じます。一つのプロジェクトを完成させていく過程で、多くのことを学び、成長することができるのも魅力的だと思います。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>それぞれの人にとって、決め手となる要素(会社の仕事内容、環境、雰囲気など)は異なると思います。それを探すためにも、様々な会社（規模、業界、職種など含めて）を見てみることが大切だと考えます。就職活動中は、様々な会社や職種の方とお話することができるまたとない機会なので、説明会やイベントに積極的に参加し、新たな出会いや情報を得ることで、自分に合った道が見えてくるかもしれません。その上で情報を取捨選択していきながら、幅広い選択肢から自分自身が納得できるような結果を見つけていってほしいと思います。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'right top'
                    },
                    {
                        src: '/images/recruit/employee/008.jpg',
                        alt: '人物写真M.F.',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>若手エンジニア<br />M.F.<br />文系私立大学卒<br />2021年入社</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>文書決裁・管理システムの導入プロジェクトにおいて、設計段階からテストフェーズに至るまでの一連の業務を担当しています。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>毎日新しい発見や学びがあることです。プログラムなど技術面についてはもちろん、お客様先の業務についてや、専門用語など、普段生活していてなかなか触れ合うことのない分野について学ぶことができます。また、コミュニケーションの取り方について学ぶことも多いです。どんな言い回しをしたら相手に伝わりやすいか、作業を円滑に進めるための連携の取り方など、先輩、同期、後輩、周りの人から日々新たな発見や学びを得ています。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>自分の軸が決められなくて悩んでいる人は、業界業種を絞りきらず、少しでも気になる会社にエントリーして面接を受けてみてください。エントリーシートを書いている内に自分の考えがまとまったり、面接を受けてみてそこで初めて気づく自分の譲れないポイント、軸が見つかるかもしれません。沢山面接受けて、沢山お祈りメールをもらっても落ち込まずに、たまたま自分に合わない会社だったんだなと思ってください！お祈りされた分、自分の経験に繋がっているはずです！周りと比べて焦ったりすることがあるかもしれませんが、あまり気負い過ぎず、ストレスの無い程度に頑張ってください！</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'center top'
                    },
                    {
                        src: '/images/recruit/employee/007.jpg',
                        alt: '人物写真T.H.',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>若手エンジニア<br />T.H.<br />文系私立大学卒<br />2023年入社</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>私は現在、完成したアプリケーションのソースコードを参考にしながら、詳細な設計書を作成するプロセスに携わっています。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>私がこの仕事で好きな所は、ソースコードの理解に関するチャレンジです。初めて目にする複雑なコードや技術的な問題に直面するとき、先輩や同期とコミュニケーションをとることで、理解を深める手助けをしてもらえることが素晴らしいと感じます。チームメンバーとのコミュニケーションによって、自分の知識を補完し、新たな発見をすることができます。そして、ソースコードを理解し、問題を解決するための方法を考え出す過程で、自分の成長を実感することができます。このような経験を通じて、自分の技術力やコミュニケーション能力が向上していることを実感できることが、私にとってこの仕事の魅力の一つです。チームと協力しながら、共に成長していくことが、私の仕事におけるやりがいです。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>私が就職活動中に取り組んでよかったと思うことは、自己分析と大学のキャリアセンターの活用です。自己分析を行うことで自分の強みや興味、将来のキャリア目標を明確にすることができます。これは面接での応答でとても役に立ちます。またキャリアセンターの活用は、就職活動の不安の相談や自己分析の手伝い、優良企業の紹介などをしてくれるため就職活動中に困ったことがあれば、キャリアセンターを活用することをお勧めします。一人で就職活動を行うよりも頼れる人や環境はすべて利用し焦らずに行動することで良い就職活動ができると思います。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'center'
                    },
                    {
                        src: '/images/recruit/employee/010.jpg',
                        alt: '人物写真M.K.',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>若手エンジニア<br />M.K.<br />文系私立大学卒<br />2022年入社</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>リリース済みシステムの保守開発時に修正箇所をスムーズに特定できるよう、データの整理や品質の確保・向上に努めたり、後期に開始される追加案件のための資料作成などに携わっています。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>システムエンジニアとしての仕事の魅力はチームでの共同作業の機会が多い点です。システムの開発においてチームメンバーと協力し、一つの目標に向かって努力することで、個人では得られない達成感が味わえます。また、自分たちが開発したシステムが実際に世の中で活用され、自分の努力が形となって社会に貢献しているという実感はこの仕事をしているうえでとても魅力を感じることができます。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>就職活動の際には、給料やキャリアパスなどももちろん重要ですが、その仕事が自分の価値観や人生の目標とどれだけ一致しているのかを考慮するとよいと思います。仕事が人生に占める割合は思いのほか大きいので、自分がやりがいを感じることができる仕事、社会貢献や個人の成長につながる仕事を選ぶことで長期的な満足感を得られるはずです。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'right'
                    },
                    {
                        src: '/images/recruit/employee/006.jpg',
                        alt: '人物写真T.S.',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>若手エンジニア<br />T.S.<br />情報系専門卒<br />2023年入社</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>私はお客様の業務効率化を目指し、管理システムの導入支援や新システムへのデータ移行に関する調査業務を行っています。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>様々な人とコミュニケーションを取り、チームでお客様の抱えている問題や悩みを解決することが、私の仕事の中で最も好きな部分です。ITエンジニアは一人で黙々とプログラミングをしているイメージを持たれがちですが、実際には仕事の中で人と話す機会がたくさんあります。例えば、プロジェクトの初期段階ではお客様やプロジェクトマネージャーとの要件定義や設計に関するコミュニケーションは不可欠です。その他にも、プログラミングが終了したあとのテスト工程でバグが発生した際には、チームメンバーや関係者の方々と協力して解決策を見つける必要があります。このように、時には一人で黙々と作業に取り組むことも求められますが、プロジェクトや日々業務を進行させるためにはコミュニケーションが欠かせません。私はチームメンバーと協力して問題解決に取り組むことが好きです。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>就職活動の中でも自己分析には特に時間を割くことをオススメします。就職活動の序盤で必ず誰しもが取り組む作業ですが、序盤だけでなくインターン・説明会・面接中など様々なタイミングで私は取り組んでいました。繰り返し自己分析を行うことで、自身に対する理解度や仕事に対する考え方が確立されていくので、就職活動だけでなく今後の社会人生活へも役立てる事ができます。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'right top'
                    },
                    {
                        src: '/images/recruit/employee/009.jpg',
                        alt: '人物写真A.M.',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>若手エンジニア<br />A.M.<br />文系私立大学卒<br />2022年入社</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>現在、私はリリース済みのシステムに関する詳細設計書の作成と、新規プロジェクトの資料作成を主に担当しています。未経験から始め、当初は膨大な知識が必要な環境に苦しいこともありました。日々の学習の積み重ねにより、スキルが身についている実感を感じられることが私にとって大きな挑戦と同時にとても価値あるものとなりました。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>日々の仕事を通して、成長を感じられることはこの仕事の大きな魅力の一つだと感じます。また、キャリアの選択肢が多い点も魅力の一つです。新たな挑戦の機会が豊富に用意されているため、自信の成長を通じてどんなふうになりたいかを常に考えて仕事に励んでいます。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>私の中で就職活動は人生で一番苦労したと共に、自分自身のことを知る一番の機会となりました。自分の得意・不得意、好きなこと・嫌いなことすべてを見つめ返して自分を客観的に観察できる良い機会となります。その経験がこれからの人生にきっと役立ので、自分を信じて突き進んでください！</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'right top'
                    },
                    {
                        src: '/images/recruit/employee/004.jpg',
                        alt: '人物写真R.T.',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full w-auto bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-1 md:p-4 text-xs md:text-2xl font-bold leading-5 md:leading-loose text-center'>若手エンジニア<br />R.T.<br />理系私立大学卒<br />2023年入社</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>私は、納品予定のシステムにバグや不具合がないかを検証する結合テストの工程を担当しています。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>テストを一つ消化する毎に、システムの信頼性が高まっていくのを感じられるのが今の業務の好きな部分です。お客様が安心してシステムを運用できることを一つずつ確認していくテスト工程は、大変なところもありますが大きなやりがいを感じます。また、テストを通じてシステムやプログラムの深い部分に触れられるもこの仕事の魅力だと思います。テスト工程でバグや不具合が見つかった際は、どのように対応するかを個人、またはチームで考えていきます。原因や対処方法を探って実践していく工程は、エンジニアとしてのスキルアップを目指せるとてもいい機会になります。やりがいと成長をどちらも感じられる点が、この仕事の好きな所です。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>私が就職活動中に取り組んでよかったと思うことは、自分のアピールポイントの洗い出しを重点的に行ったことです。自己分析を行う中で、経験してきたことや勉強してきたことを些細なことでもいいのでどんどん列挙してみてください。自分では強みにならないと思っているような小さなことでも、周りから見れば立派なアピールポイントだったりもします。また、強みを自覚することは就職活動に対する自信にも繋がるので、自己分析はアピールポイントの洗い出しを強く意識して行うことを私はお勧めします。就職活動中は上手くいかなかったり焦ったりすることもあるかもしれませんが、そういう時だからこそ自分を大切にすることを忘れないでください。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'center'
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