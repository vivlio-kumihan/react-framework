import Link from "next/link"
import Header from "../components/Header"


const Index = () => {
  return (
    <div>
      <Header />
      <h1>Hello Next.js</h1>
      <Link href="/about">
        <a>to about page</a>
      </Link>
    </div>
  )
}

export default Index