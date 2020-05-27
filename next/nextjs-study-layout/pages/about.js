import Link from "next/link"
import Header from "../components/Header"

const About = () => {
  return (
    <div>
      <Header />
      <h1>Here is About Page.</h1>
      <Link href="/index">
        <a>to index page</a>
      </Link>
    </div>
  )
}

export default About