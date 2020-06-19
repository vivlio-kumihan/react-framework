import Head from "next/head";
import Header from "./Header";
import Aside from "./Aside"
import Footer from "./Footer"
import styles from "./Layout.module.css"

function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/profile_image_Apple.ico" />
        <title>Editorial by HTML5 UP</title>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js" />
        <meta name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Layout className={styles.wrapper}>
        <Header />
        <div className="main">{children}</div>
        <Aside />
        <Footer />
      </Layout>
      <style jsx>{`
        .main {
          grid-area: main;
          background-color: red;
        }
      `}</style>
    </div>
  )
}


export const siteTitle = "Next.js Sample Website"
export default Layout