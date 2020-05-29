import Link from "next/link"

const LinkStyle = {
  marginRight: "15rem",
}

const Header = () => {
  return (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>about</a>
    </Link>
  </div>
  )
}

export default Header