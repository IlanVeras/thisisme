import  Button  from 'react-bootstrap/Button'
import React from 'react'
import styles from "../AboutMe/styles.module.css"
import profile from "../../public/pictures/ilan-veras-profile.png"
import ButtonClean from '../ButtonClean/ButtonClean'

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>Ilan Veras</h1>
        <p>Bacharel em Ciência da Computação, com experiência em desenvolvimento web full stack utilizando HTML, CSS, JavaScript, React.js, Node.js, MongoDB e Bootstrap.</p>
        <div>
            <ButtonClean txt="Ver Projetos"/>
        </div>
      </div>
      <div className={styles.containerImg}>
        <img src={profile}></img>
      </div>
    </div>
  )
}
