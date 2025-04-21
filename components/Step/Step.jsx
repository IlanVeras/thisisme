import React from 'react'
import CubeIcon from "../../public/icons/cube.png"
import styles from "../Step/styles.module.css"


export default function Step({mainTxt, secTxt}) {
  return (
    <div className={styles.container}>
      <img src={CubeIcon} width="32px" className={styles.iconImg}/>
      <div className={styles.info}>
          <h2>{mainTxt}</h2>
          <p>{secTxt}</p>
      </div>
      <p className={styles.linkProjetos}>Ver Projetos {">"}</p>
    </div>
  )
}
