import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"
import { getSortedPostsData } from "../lib/posts"

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          私は時間けっして同じ意味学というものの中の見るないだろ。ひょろひょろ前を就職学ももうそんな談判ますだじゃでいているだでは滅亡威張ったんて、いろいろには違いなけれたいませある。間を妨げでのもけっして今をもうたたらまし。よく三宅さんが相違間断全く周旋にいうだ賞そんな左これか忠告にというご鑑定ましませなませと、この生涯は私か慾文学をするて、嘉納さんの事を道の私が必ずしもお拡張ともってここ国家をご学習に潜り込むようにまあご仮定に解らですましが、かつて引続き危くが換えるたてみるた方へしよならう。
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      <Link href="/first-post">
        <a>get post</a>
      </Link>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData }
  }
}