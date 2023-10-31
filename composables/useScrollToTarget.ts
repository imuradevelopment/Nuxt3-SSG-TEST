import { ref } from "vue";

export const useScrollToTarget = () => {
    // target-idを受け取るrefを作成
    const targetId = ref("");

    // スクロールする関数を定義
    const scrollToTarget = (id: string = '') => {
        // 引数で渡されたidをtargetIdに代入
        targetId.value = id;
        // target-idが空の場合
        if (!targetId.value) {
            // トップにスクロール
            window.scrollTo({ top: 0, left: 0, behavior: "smooth", });
        } else {
            // 要素を取得
            const element = document.getElementById(targetId.value);
            // 要素が存在する場合
            if (element) {
                // 要素の位置を取得
                const rect = element.getBoundingClientRect()
                const currentScrolledHeight = window.pageYOffset || document.documentElement.scrollTop
                // スムーズにスクロール
                window.scrollTo({top: rect.top + currentScrolledHeight - 64, behavior: "smooth"})
            }
        }
    };

    // refと関数を返す
    return { targetId, scrollToTarget };
};
