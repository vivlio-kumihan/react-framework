import "../styles/reset.css"
import "../styles/global.css"

// 『_app.js』で『グローバルCSS』を追加する。
// 実際のファイルは『stylesデレクトリ』へ。
// ブラウザに依存しているcssを一旦リセットしてから
// 文字組を中心に全体のスタイリングをする。

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}