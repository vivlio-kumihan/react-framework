import Link from "next/link"
import styles from "./Header.module.css"


const LinkStyle = {
  marginRight: "15rem",
}

const Header = () => {
  return (
  <div className={styles.header}>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>about</a>
    </Link>
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