import React from 'react'
import styles from "./styles.module.css";

const Heading = ({title}) => {
  return (
    <div>
      <h2 className={styles.app__heading}>{title}</h2>
    </div>
  )
}

export default Heading
