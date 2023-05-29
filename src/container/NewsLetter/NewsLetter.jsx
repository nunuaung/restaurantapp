import React from 'react'
import { SubHeading } from '../../components'
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';

import styles from "./styles.module.css"

const NewsLetter = () => {
  return (
    <div className={`section__padding ${styles.app__newsletter}`}>
      <div className={styles.app__footer_newsletter}>
        <SubHeading title="Newsletter" />
        <Heading title="Subscribe to Our Newsletter" /> 
        <p className={`p__opensans ${styles.app__newsletter_update}`}>And never miss latest Updates!</p>
        <div className={`flex__center ${styles.app__footer_inputgp}`}>
          <input type="text" name="email" className={`${styles.app__footer_input}`} placeholder="Email Address"/>
          <Button btnName="Subscribe" />
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
