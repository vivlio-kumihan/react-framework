import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
// import Contact from "./contact"

const Home = () => {
  return (
      <div style={{
                    color:"purple",
                    fontWeight: "bold"
                  }}>
        <Link to="/contact/">Contact</Link>
        <Header headerText="Hello Gatsby!" />
        <p>Now I start to learn.</p>
        <img src="https://source.unsplash.com/romdom/400X200" width="600px" alt="" />
      </div>
  )
}

export default Home




// クラス定義にはコツがあるようだ。現状では不可。

// import React, { Component } from "react"

// class Home extends Component {
//   render() {
//     return (
//     )
//   }
// }


// export default Home