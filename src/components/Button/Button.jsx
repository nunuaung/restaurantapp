import React from 'react'
import styles from "./styles.module.css";

const Button = ({btnName}) => {
  return (
    <>
      <button type="button" className={styles.app__custom_button}>{btnName}</button>
    </>
  )
}

export default Button
