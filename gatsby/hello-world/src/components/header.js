import React from "react"

const Header = (props) => {
  return (
    <h1>{props.headerText} {props.arbitraryPhrase}</h1>
  )
}

export default Header