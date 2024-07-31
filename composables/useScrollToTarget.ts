import { ref } from "vue";

export const useScrollToTarget = () => {
    // targetIdを管理するrefを作成
    const targetId = ref("");

    // スクロール処理を行う関数を定義
    const scrollToTarget = (id: string = "") => {
        // 引数で渡されたidをtargetIdに代入
        targetId.value = id;

        // targetIdが空の場合はトップにスクロール
        if (!targetId.value) {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        } else {
            // targetIdが指定されている場合は該当の要素にスクロール
            const element = document.getElementById(targetId.value);
            if (element) {
                // 要素の位置を取得
                const rect = element.getBoundingClientRect();
                const currentScrolledHeight = window.pageYOffset || document.documentElement.scrollTop;

                // スムーズにスクロール
                window.scrollTo({ top: rect.top + currentScrolledHeight - 64, behavior: "smooth" });
            }
        }
    };

    // targetIdとscrollToTarget関数を返す
    return { targetId, scrollToTarget };
};
