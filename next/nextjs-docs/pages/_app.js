import "../styles/reset.css"
import "../styles/global.css"

// // 『_app.js』で『グローバルCSS』を追加する。
// // 実際のファイルは『stylesデレクトリ』へ。
// // ブラウザに依存しているcssを一旦リセットしてから
// // 文字組を中心に全体のスタイリングをする。

// export default function App({ Component, pageProps }) {
//   return (
//     <Component {...pageProps} />
//   )
// }

// pages/_app.js
import React from 'react';
import App from 'next/app';
import MainLayout from '../components/layouts/main';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}

export default MyApp;