import React from 'react'
import styles from './styles.module.css'

export default function Button({children,otherStyles,onclick}) {
  return (
    <div className={`${styles.button_wrapper} ${otherStyles} `} onClick={onclick}>{children}</div>
  )
}
