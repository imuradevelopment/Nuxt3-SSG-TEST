import { defineNuxtPlugin } from "#app";

// Nuxtプラグインを定義する
export default defineNuxtPlugin((nuxtApp) => {
    // ページのナビゲーションが終了した後に実行されるフックを設定
   nuxtApp.hook("page:finish", () => {
      // ページナビゲーション後に画面をトップにスクロール
      window.scrollTo({ top: 0, left: 0 });
   });
});
