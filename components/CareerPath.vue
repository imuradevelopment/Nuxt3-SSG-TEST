<template>
    <div
        class="flex flex-wrap flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-8 items-center justify-around w-full mx-auto my-5 timeline">
        <div class="sm:ml-4 sm:mt-8 flex flex-col items-center stage stage-1">
            <div
                class="w-20 h-10 border-2 border-custom-lightBlue rounded-tl-2xl rounded-tr-2xl text-center leading-10 font-bold text-white bg-custom-lightBlue arrow arrow-1">
                1年目
            </div>
            <div
                class="block-1 w-52 h-24 flex flex-col justify-center items-center border-2 border-custom-lightGray rounded-lg text-center leading-24 font-bold text-white bg-gray-500 modal">
                研修 OJT
            </div>
        </div>
        <div class="flex flex-col items-center stage stage-2">
            <div
                class="w-20 h-10 border-2 border-custom-lightBlue rounded-tl-2xl rounded-tr-2xl text-center leading-10 font-bold text-white bg-custom-lightBlue arrow arrow-2">
                2年目
            </div>
            <div
                class="block-2 w-52 h-24 flex flex-col justify-center items-center border-2 border-custom-lightGray rounded-lg text-center leading-24 font-bold text-white bg-cyan-800 modal">
                プログラマ
            </div>
        </div>
        <div class="flex flex-col items-center stage stage-3">
            <div
                class="w-20 h-10 border-2 border-custom-lightBlue rounded-tl-2xl rounded-tr-2xl text-center leading-10 font-bold text-white bg-custom-lightBlue arrow arrow-3">
                3年目
            </div>
            <div
                class="block-3 w-52 h-24 flex flex-col justify-center items-center border-2 border-custom-lightGray rounded-lg text-center leading-24 font-bold text-white bg-blue-500 modal">
                システムエンジニア
            </div>
        </div>
        <div class="flex flex-col items-center stage stage-4">
            <div
                class="w-20 h-10 border-2 border-custom-blue rounded-tl-2xl rounded-tr-2xl text-center leading-10 font-bold text-white bg-custom-blue arrow arrow-4">
                5年目
            </div>
            <div
                class="block-4 w-52 h-24 flex flex-col justify-center items-center border-2 border-custom-lightGray rounded-lg text-center leading-24 font-bold text-white bg-indigo-500 modal">
                プロジェクトメンバー
            </div>
        </div>
        <div class="flex flex-col items-center stage stage-5">
            <div
                class="w-20 h-10 border-2 border-custom-blue rounded-tl-2xl rounded-tr-2xl text-center leading-10 font-bold text-white bg-custom-blue arrow arrow-5">
                7年目
            </div>
            <div
                class="block-5 w-52 h-24 flex flex-col justify-center items-center border-2 border-custom-lightGray rounded-lg text-center leading-24 font-bold text-white bg-green-700 modal">
                プロジェクトリーダー
            </div>
        </div>
        <div class="flex flex-col items-center stage stage-6">
            <div
                class="w-20 h-10 border-2 border-custom-deepBlue rounded-tl-2xl rounded-tr-2xl text-center leading-10 font-bold text-white bg-custom-deepBlue arrow arrow-6">
                10年目
            </div>
            <div
                class="block-6 w-52 h-24 flex flex-col justify-center items-center border-2 border-custom-lightGray rounded-lg text-center leading-24 font-bold text-white bg-yellow-500 modal">
                プロジェクトマネージャ<br /><span class="text-xs text-custom-deepBlue">唯一無二のエンジニアに！</span>
            </div>
        </div>
        <div class="flex flex-col items-center stage stage-7">
            <div
                class="w-20 h-10 border-2 border-custom-deepBlue rounded-tl-2xl rounded-tr-2xl text-center leading-10 font-bold text-white bg-custom-deepBlue arrow arrow-7">
                10年目
            </div>
            <div
                class="block-7 w-52 h-24 flex flex-col justify-center items-center border-2 border-custom-lightGray rounded-lg text-center leading-24 font-bold text-white bg-orange-500 modal">
                システムアナリスト<br /><span class="text-xs text-custom-deepBlue">唯一無二のエンジニアに！</span>
            </div>
        </div>
        <div class="flex flex-col items-center stage stage-8">
            <div
                class="w-20 h-10 border-2 border-custom-deepBlue rounded-tl-2xl rounded-tr-2xl text-center leading-10 font-bold text-white bg-custom-deepBlue arrow arrow-8">
                10年目
            </div>
            <div
                class="block-8 w-52 h-24 flex flex-col justify-center items-center border-2 border-custom-lightGray rounded-lg text-center leading-24 font-bold text-white bg-red-500 modal">
                システムコンサルタント<br /><span class="text-xs text-custom-deepBlue">唯一無二のエンジニアに！</span>
            </div>
        </div>
    </div>
</template>
  
<script setup>
// Composition APIをインポートします。
import { ref, reactive, onMounted } from "vue";

// コンポーネントがマウントされたときに、ブロックの要素を取得してホバーイベントを設定します。
onMounted(() => {

    // // ブロックの説明を格納するオブジェクトを作ります。
    // const descriptions: { [key: string]: string } = {
    //     "block-1": "研修 OJT: 入社後、基礎的なスキルや知識を身につけるための研修や実務を行います。",
    //     "block-2": "プログラマ: システムの開発に必要なプログラムを作成します。言語やフレームワークなどの技術を習得します。",
    //     "block-3":
    //         "システムエンジニア: システムの設計や開発、テスト、運用などの工程を担当します。要件定義や仕様書作成などのドキュメント作成も行います。",
    //     "block-4":
    //         "プロジェクトメンバー: システム開発プロジェクトに参加し、チームで協力して作業を進めます。プロジェクトの進捗や品質を管理します。",
    //     "block-5":
    //         "プロジェクトリーダー: プロジェクトのメンバーを率いて、システム開発を指揮します。クライアントや上司との折衝や報告も行います。",
    //     "block-6":
    //         "プロジェクトマネージャ: 複数のプロジェクトを統括し、予算やスケジュール、人員などのリソースを管理します。プロジェクトの成果や問題点を分析します。",
    //     "block-7":
    //         "システムアナリスト: システムの要件や仕様を分析し、最適なソリューションを提案します。システムの改善や新規開発の提案も行います。",
    //     "block-8":
    //         "システムコンサルタント: システムの導入や運用に関するコンサルティングを行います。クライアントのビジネスや課題を理解し、効果的なアドバイスを行います。",
    // };

    // // ブロックの要素を取得するためのrefを作成します。
    // const blocks = ref<NodeListOf<Element>>([] as any);


    // // 説明を表示する要素を作成します。
    // const description = reactive({
    //     element: document.createElement("div"),
    //     text: "",
    //     top: 0,
    //     left: 0,
    //     display: "none",
    // });

    // // 説明を表示する要素のスタイルを設定します。
    // description.element.classList.add("description");
    // description.element.style.position = "absolute";
    // // description.element.style.position = "fixed";
    // description.element.style.width = "13rem";
    // description.element.style.height = "auto";
    // description.element.style.padding = "10px";
    // description.element.style.border = "2px solid black";
    // description.element.style.borderRadius = "10px";
    // description.element.style.backgroundColor = "white";

    // // 説明を表示する要素をbodyに追加します。
    // document.body.appendChild(description.element);

    // // ブロックにホバーイベントを設定する関数を定義します。
    // const setHoverEvent = (block: HTMLElement) => {
    //     block.addEventListener("mouseover", (event) => {
    //         // event.targetをHTMLElementにキャストする
    //         const target = event.target as HTMLElement;
    //         // targetをHTMLElementとして扱う
    //         const id = target.classList[0];
    //         // ブロックの説明を取得します。
    //         const text = descriptions[id] as string;
    //         // 説明文がない場合は処理を終了する
    //         if (!text) {
    //             return;
    //         }
    //         // 説明を表示する要素にテキストをセットします。
    //         description.text = text;
    //         // 説明を表示する要素の位置をブロックの下に合わせます。
    //         description.top = target.offsetTop + target.offsetHeight;
    //         description.left = target.offsetLeft;
    //         // 説明を表示する要素を表示します。
    //         description.display = "block";
    //     });
    //     block.addEventListener("mouseout", (event) => {
    //         // 説明を表示する要素を非表示にします。
    //         description.display = "none";
    //     });
    // };

    // blocks.value = document.querySelectorAll(".modal");
    // blocks.value.forEach((block) => {
    //     // blockをHTMLElementにキャストする
    //     setHoverEvent(block as HTMLElement);
    // });

    // ブロックの説明を格納するオブジェクトを作ります。
    const descriptions = {
        "block-1": "研修 OJT: 入社後、基礎的なスキルや知識を身につけるための研修や実務を行います。",
        "block-2": "プログラマ: システムの開発に必要なプログラムを作成します。言語やフレームワークなどの技術を習得します。",
        "block-3":
            "システムエンジニア: システムの設計や開発、テスト、運用などの工程を担当します。要件定義や仕様書作成などのドキュメント作成も行います。",
        "block-4":
            "プロジェクトメンバー: システム開発プロジェクトに参加し、チームで協力して作業を進めます。プロジェクトの進捗や品質を管理します。",
        "block-5":
            "プロジェクトリーダー: プロジェクトのメンバーを率いて、システム開発を指揮します。クライアントや上司との折衝や報告も行います。",
        "block-6":
            "プロジェクトマネージャ: 複数のプロジェクトを統括し、予算やスケジュール、人員などのリソースを管理します。プロジェクトの成果や問題点を分析します。",
        "block-7":
            "システムアナリスト: システムの要件や仕様を分析し、最適なソリューションを提案します。システムの改善や新規開発の提案も行います。",
        "block-8":
            "システムコンサルタント: システムの導入や運用に関するコンサルティングを行います。クライアントのビジネスや課題を理解し、効果的なアドバイスを行います。",
    };

    // ブロックの要素を取得します。
    const blocks = document.querySelectorAll(".modal");

    // 説明を表示する要素を作成します。
    const description = document.createElement("div");
    description.classList.add("description");
    description.style.position = "absolute";
    // description.style.position = "fixed";
    description.style.top = "0";
    description.style.left = "0";
    description.style.width = "13rem";
    description.style.height = "auto";
    description.style.padding = "10px";
    description.style.border = "2px solid black";
    description.style.borderRadius = "10px";
    description.style.backgroundColor = "white";
    description.style.display = "none";

    // 説明を表示する要素をbodyに追加します。
    document.body.appendChild(description);

    // ブロックにホバーイベントを設定します。
    blocks.forEach((block) => {
        block.addEventListener("mouseover", (event) => {
            // ブロックのIDを取得します。
            const id = event.target.classList[0];
            // ブロックの説明を取得します。
            const text = descriptions[id];
            // 説明文がない場合は処理を終了する
            if (!text) {
                return;
            }
            // 説明を表示する要素にテキストをセットします。
            description.textContent = text;
            // 説明を表示する要素の位置をブロックの下に合わせます。
            description.style.top = event.target.offsetTop + event.target.offsetHeight + "px";
            description.style.left = event.target.offsetLeft + "px";
            // 説明を表示する要素を表示します。
            description.style.display = "block";
        });
        block.addEventListener("mouseout", (event) => {
            // 説明を表示する要素を非表示にします。
            description.style.display = "none";
        });
    });
});
</script>

  
<style scoped></style>
  