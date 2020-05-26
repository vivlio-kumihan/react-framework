import React from "react"
import Header from "../components/header"

const About = () => {
  return (
    <div style={{ color: "teal" }}>
      <Header headerText="About Us" />
      <Header headerText="It's pretty cool" />
      <p>Such wow. Very React.</p>
    </div>
  )
}

export default About

// <Header headerText="About Us"
//         arbitraryPhrase="is arbitary"      