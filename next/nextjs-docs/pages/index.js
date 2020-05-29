import Layout from "../components/Layout"
import Head from "next/head";

// import Link from "next/link"
// import Header from "../components/Header"
// import Aside from "../components/Aside"


function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Takahiro Kumihan WebSite</title>
      </Head>
      <h1>Welcome to Next.js!</h1>
      <h2>Welcome to Next.js!</h2>
      <h3>Welcome to Next.js!</h3>
      <h4>Welcome to Next.js!</h4>
      <h5>Welcome to Next.js!</h5>
      <h1>日本語でご挨拶すると<br />こんな感じ。</h1>
      <h2>日本語でご挨拶すると<br />こんな感じ。</h2>
      <h3>日本語でご挨拶すると<br />こんな感じ。</h3>
      <h4>日本語でご挨拶すると<br />こんな感じ。</h4>
      <h5>日本語でご挨拶すると<br />こんな感じ。</h5>
    </Layout>
  )  
}

export default HomePage