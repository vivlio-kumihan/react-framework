import Head from "next/head";
import Header from "./Header";
import Aside from "./Aside"
import Footer from "./Footer"

// import styles from "./layout.module.css"
// import utilStyles from "../styles/utils.module.css"
// import Link from "next/link"

function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/profile_image_Apple.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Aside />
      <Footer />
    </div>
  )
}

export const siteTitle = "Next.js Sample Website"
export default Layout