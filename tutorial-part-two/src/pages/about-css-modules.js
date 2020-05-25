import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

// console.log(styles)

const User = (props) => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

const About = () => {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Moudles are so Cool!</p>
      <User
        username="Nobuyuki Takahiro"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Takahiro. a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
      <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
    </Container>
  )
}

export default About