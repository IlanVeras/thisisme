import React from 'react'
import styles from "../ButtonClean/ButtonClean.module.css"

export default function ButtonClean({txt}) {
  return (
    <button className={styles.btn}>
      {txt}
    </button>
  )
}
