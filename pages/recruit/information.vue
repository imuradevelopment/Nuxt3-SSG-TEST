<template>
    <div>
        <section class="mb-12 md:mb-24 flex bg-cover bg-[url('/images/recruit/information/001.png')]">
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue"
                style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <div class="flex flex-col grow">
                <h1 id="recruit-information01"
                    class="linkScroll self-end mx-8 text-2xl sm:text-4xl font-bold text-white">
                    募集情報
                </h1>
                <p
                    class="pl-28 pr-4 -ml-28 mt-12 text-center mb-4 py-2 text-base md:text-lg font-bold text-white bg-custom-blue/70">
                    新卒採用の募集内容をお伝えします。</p>
            </div>
        </section>
        <section class="h-full w-full px-4 md:pl-0 mb-12 md:mb-24">
            <div class="grid grid-flow-col grid-cols-11 grid-rows-4 md:grid-rows-12 gap-4">
                <div id="recruitInfomation01"
                    class="linkScrollPageHeader col-span-12 row-span-3 md:col-span-8 md:row-span-12">
                    <el-tabs v-model="activeName" type="card" class="tabs" @tab-click="handleClick">
                        <el-tab-pane label="新卒採用" name="first">
                            <section>
                                <BlurGlassCard color="rgba(0, 37, 92, 0.6)" :blur=2 class="text-white">
                                    <div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-y border-custom-deepBlue/30 flex justify-center items-center">
                                                募集情報</div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-y border-custom-deepBlue/30 flex items-center">
                                                オープン系システム開発技術者
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                応募資格</div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                学部・学科やコンピュータに対する知識は問いません。
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                雇用形態
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                <div class="font-bold">
                                                    正社員
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                本社地
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                株式会社ベイル 中目黒本社
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                勤務地
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                都内近郊のお客様先オフィス、又は中目黒本社
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                勤務時間
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                9:00 ~ 18:00（1時間休憩で、実働8時間）
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                休日
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                完全週休2日制（毎週土曜・日曜）、祝日
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                休暇
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                ・祝日、年末年始、特別休暇<br />
                                                ・年次有給休暇（完全消化を推奨しております）
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                給与
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                <span class="contents md:hidden">下記</span><span
                                                    class="hidden md:contents">右記</span>リンクから、リクナビ／マイナビページを参照
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                諸手当
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                【各種手当】<br />
                                                時間外手当（100%保証）、家族手当、住宅手当、通勤手当、など<br />
                                                <!-- <br /> -->
                                                【資格取得推奨励金制度】<br />
                                                情報処理、オラクルマスター、シスコ、など
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                昇給
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                給与改定年1回（4月）
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                賞与
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                賞与年2回（7月・12月）、決算賞与あり
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                福利厚生
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                各種社会保険完備、育児介護休暇制度、退職金制度
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                応募の流れ
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                <div class="font-bold">
                                                    【応募方法】<br />
                                                    新卒採用につきましては、<span class="contents md:hidden">下記</span><span
                                                        class="hidden md:contents">右記</span>リンクからリクナビ、マイナビにてご確認の上エントリーください。
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </BlurGlassCard>
                            </section>
                        </el-tab-pane>
                        <el-tab-pane label="キャリア採用" name="second">
                            <section>
                                <BlurGlassCard color="rgba(0, 37, 92, 0.6)" :blur=2 class="text-white">
                                    <div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-y border-custom-deepBlue/30 flex justify-center items-center">
                                                募集情報</div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-y border-custom-deepBlue/30 flex items-center">
                                                アプリケーションエンジニア、インフラエンジニア
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                応募資格</div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                学歴・職歴不問
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                雇用形態
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                <div class="font-bold">
                                                    正社員
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                本社地
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                株式会社ベイル 中目黒本社
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                勤務地
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                都内近郊のお客様先オフィス、又は中目黒本社
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                勤務時間
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                ・9:00 ~ 18:00（1時間休憩で、実働8時間）<br />
                                                ・8:30 ~ 17:30（1時間休憩で、実働8時間）
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                休日
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                完全週休2日制（毎週土曜・日曜）、祝日
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                休暇
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                ・祝日、年末年始、特別休暇<br />
                                                ・年次有給休暇（完全消化を推奨しております）
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                給与
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                年齢・経験・前職給与・スキル見合い
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                諸手当
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                【各種手当】<br />
                                                時間外手当（100%保証）、家族手当、住宅手当、通勤手当、など<br />
                                                <!-- <br /> -->
                                                【資格取得推奨励金制度】<br />
                                                情報処理、オラクルマスター、シスコ、など
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                昇給
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                給与改定年1回（4月）
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                賞与
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                賞与年2回（7月・12月）、決算賞与あり
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                福利厚生
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                各種社会保険完備、育児介護休暇制度、退職金制度
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                応募の流れ
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                <div class="font-bold">
                                                    【応募方法】<br />
                                                    お問い合わせフォームからご応募ください。<br />
                                                    追ってこちらからご連絡さし上げます。<br />
                                                    <div class="my-2">
                                                        <CustomArrowButton color-type="white" arrowType="transition"
                                                            to="/contact"><template #buttonText>
                                                                <Pointer class="h-6 w-6 inline" />お問い合わせ
                                                            </template></CustomArrowButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </BlurGlassCard>
                            </section>
                        </el-tab-pane>
                        <el-tab-pane label="契約社員採用" name="third">
                            <section>
                                <BlurGlassCard color="rgba(0, 37, 92, 0.6)" :blur=2 class="text-white">
                                    <div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-y border-custom-deepBlue/30 flex justify-center items-center">
                                                募集情報</div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-y border-custom-deepBlue/30 flex items-center">
                                                アプリケーションエンジニア、インフラエンジニア
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                応募資格</div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                学歴・職歴不問
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                雇用形態
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                <div class="font-bold">
                                                    契約社員
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                本社地
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                株式会社ベイル 中目黒本社
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                勤務地
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                都内近郊のお客様先オフィス、又は中目黒本社
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                勤務時間
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                ・9:00 ~ 18:00（1時間休憩で、実働8時間）<br />
                                                ・8:30 ~ 17:30（1時間休憩で、実働8時間）
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                休日
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                完全週休2日制（毎週土曜・日曜）、祝日
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                休暇
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                ・祝日、年末年始、特別休暇<br />
                                                ・年次有給休暇（完全消化を推奨しております）
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                給与
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                年齢・経験・前職給与・スキル見合い
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                福利厚生
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                各種社会保険完備、育児介護休暇制度、退職金制度
                                            </div>
                                        </div>
                                        <div class="flex flex-nowrap">
                                            <div
                                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                                応募の流れ
                                            </div>
                                            <div
                                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                                <div class="font-bold">
                                                    【応募方法】<br />
                                                    お問い合わせフォームからご応募ください。<br />
                                                    追ってこちらからご連絡さし上げます。<br />
                                                    <div class="my-2">
                                                        <CustomArrowButton color-type="white" arrowType="transition"
                                                            to="/contact"><template #buttonText>
                                                                <Pointer class="h-6 w-6 inline" />お問い合わせ
                                                            </template></CustomArrowButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </BlurGlassCard>
                            </section>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <div id="recruitInfomation02"
                    class="linkScrollPageHeader col-span-12 row-span-1 md:col-span-4 md:row-span-12">
                    <div class="flex flex-col gap-4">
                        <p class="self-center text-lg font-bold">エントリーはこちらから</p>
                        <BlurGlassCard class="self-center max-w-xs">
                            <div class="flex flex-col gap-4">
                                <div>
                                    <a href="https://job.rikunabi.com/2025/company/r110010051/" target="_blank"
                                        rel="noopener noreferrer">
                                        <img src="/images/recruit/information/003.png" alt="External Link Image"
                                            class="h-12 w-full bg-white cursor-pointer">
                                    </a>
                                </div>
                                <div>
                                    <a href="https://job.mynavi.jp/25/pc/search/corp267137/outline.html" target="_blank"
                                        rel="noopener noreferrer">
                                        <img src="/images/recruit/information/002.png" alt="External Link Image"
                                            class="h-12 w-full bg-white cursor-pointer">
                                    </a>
                                </div>
                            </div>
                        </BlurGlassCard>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
});

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useTabStore } from '~/stores/tabStore';
import type { TabsPaneContext } from 'element-plus';
import BlurGlassCard from '~/components/BlurGlassCard.vue';
import CustomArrowButton from '~/components/CustomArrowButton.vue';

const route = useRoute();
const tabStore = useTabStore();

const activeName = ref(tabStore.activeTab);

const handleClick = (tab: TabsPaneContext, event: Event) => {
    tabStore.setActiveTab(tab.props.name as string);
};

onMounted(() => {
    const queryTab = route.query.tab as string;
    if (queryTab) {
        activeName.value = queryTab;
        tabStore.setActiveTab(queryTab);
    }
});
</script>

<style>
.el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: none !important;
}

.el-tabs__header {
    margin: 0 0 0 0 !important;
    padding: 0 !important;
    position: relative !important;
}

.el-tabs--card>.el-tabs__header .el-tabs__item:first-child {
    border-left: 1px solid var(--el-border-color-light) !important;
    margin-right: 1rem !important;
}

.el-tabs--card>.el-tabs__header .el-tabs__item:last-child {
    margin-left: 1rem !important;
}

.el-tabs--card>.el-tabs__header .el-tabs__item {
    border-bottom: 1px solid #0000 !important;
    border-left: 1px solid var(--el-border-color-light) !important;
    border-right: 1px solid var(--el-border-color-light) !important;
    border-top: 1px solid var(--el-border-color-light) !important;
    border-top-left-radius: 0.375rem !important;
    border-top-right-radius: 0.375rem !important;
    background-color: var(--cumtom-color-lightIvory);
    transition: color var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier), padding var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier) !important;
    font-size: large;
}

@media screen and (max-width: 768px) {
    .el-tabs--card>.el-tabs__header .el-tabs__item {
        border-bottom: 1px solid #0000 !important;
        border-left: 1px solid var(--el-border-color-light) !important;
        border-right: 1px solid var(--el-border-color-light) !important;
        border-top: 1px solid var(--el-border-color-light) !important;
        border-top-left-radius: 0.375rem !important;
        border-top-right-radius: 0.375rem !important;
        background-color: var(--cumtom-color-lightIvory);
        transition: color var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier), padding var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier) !important;
    }
}

.el-tabs__item.is-active,
.el-tabs__item:hover {
    color: white !important;
    background-color: var(--custom-color-deepBlue) !important;
}
</style>