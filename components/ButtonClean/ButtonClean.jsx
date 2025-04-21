import React from 'react'
import styles from "../ButtonClean/ButtonClean.module.css"

export default function ButtonClean({txt,dark}) {
  return (
    <button className={`${styles.btn} ${dark ? styles.dark : ''}`}>
      {txt}
    </button>
  )
}
