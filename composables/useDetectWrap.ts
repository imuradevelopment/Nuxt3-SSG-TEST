// フレックス要素内でwrapしているものにwrappedを付与するコンポーザブルな関数
// import { ref, onMounted, watch } from '#app'
import { useResizeObserver } from "@vueuse/core";

export default function useDetectWrap(flex: Ref<HTMLElement | null>) {
    // wrapしているものにwrappedを付与する関数
    const addWrappedClass = () => {
        // flex.valueがnullまたはundefinedでないことをチェックする
        if (flex.value) {
            // フレックス要素の子要素を取得する
            const children = flex.value.children;
            // フレックス要素の最初の子要素の位置を取得する
            const firstTop = children[0].getBoundingClientRect().top;
            // フレックス要素の子要素の数だけループする
            for (let i = 0; i < children.length; i++) {
                // フレックス要素の子要素の位置を取得する
                const top = children[i].getBoundingClientRect().top;
                // フレックス要素の子要素の位置が最初の子要素と異なる場合は、wrapしていると判断する
                if (top !== firstTop) {
                    // フレックス要素の子要素にwrappedクラスを付与する
                    children[i].classList.add("wrapped");
                } else {
                    // フレックス要素の子要素からwrappedクラスを削除する
                    children[i].classList.remove("wrapped");
                }
            }
        }
    };

    // ページ読み込み時にwrapしているものにwrappedを付与する
    onMounted(() => {
        addWrappedClass();
    });

    // ウィンドウのサイズが変更されたときにwrapしているものにwrappedを付与する
    // watch(
    //     () => flex.value?.offsetWidth,
    //     () => {
    //         addWrappedClass();
    //     }
    // );

    useResizeObserver(flex, (entry) => {
        addWrappedClass();
    });
    // wrapしているものにwrappedを付与する関数を返す
    return { addWrappedClass };
}
