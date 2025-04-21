// import  Button  from 'bootstrap'
import React from 'react'
import styles from "../AboutMe/styles.module.css"

export default function AboutMe() {
  return (
    <div>
      <div>
        <h1>Bem vindo ao Ilan Veras portifólio</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iste repellat quis est molestiae, nam officiis aliquam in nulla, a provident repudiandae. Impedit corporis repudiandae nihil dolorem voluptatem ratione provident.</p>
        <div>
            {/* <Button>Ver Projetos</Button> */}
        </div>
      </div>
      <div className={styles.containerImg}>
        <img></img>
      </div>
    </div>
  )
}
