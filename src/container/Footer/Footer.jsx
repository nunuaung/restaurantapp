import React from 'react'
import { SubHeading } from '../../components'
import Button from '../../components/Button/Button'
import Heading from '../../components/Heading/Heading'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { images } from '../../constants';

import styles from "./styles.module.css"

const Footer = () => {
  return (
    <div className={`section__padding app__bg ${styles.app__footer}`}>
      <div className={`${styles.app__footer_foot}`}>
        <div className={`${styles.app__footer_contact} ${styles.app__footer_flexcenter}`}>
          <h3 className={styles.app__footer_tit}>
          Contact Us
          </h3>
          <p className={`p__opensans ${styles.app__footer_address}`}>9 W 53rd St, New York, NY 10019, USA</p>
          <div className={styles.app__footer_phone}>
            <a className={styles.app__footer_phonenumber} href="tel:+1 212-344-1230">+1 212-344-1230</a> 
            <a className={styles.app__footer_phonenumber} href="tel:+1 212-555-1230">+1 212-555-1230</a> 
          </div>
        </div>
        <div className={`${styles.app__footer_socialgp} ${styles.app__footer_flexcenter}`}>
          <img className={styles.app__footer_logogericht} src={images.gericht} alt="footer gericht"/>
          <p className={`p__opensans ${styles.app__footer_way}`}>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img className={styles.app__footer_logo} src={images.spoon} alt="footer spoon" />
          <div className={styles.app__footer_social}>
            <a><FaTwitter className={styles.app__footer_socialicons}/></a>
            <a><FaFacebookF className={styles.app__footer_socialicons}/></a>
            <a><FaInstagram className={styles.app__footer_socialicons}/></a>
          </div>
        </div>
        <div className={`${styles.app__footer_workinghours} ${styles.app__footer_flexcenter}`}>
          <h3 className={styles.app__footer_tit}>
            Working Hours
            </h3>
          <p className={`p__opensans ${styles.app__footer_hours}`}>Monday-Friday:<br/> 08:00 am -12:00 am</p>
          <p className={`p__opensans ${styles.app__footer_hours}`}>Saturday-Sunday:<br/> 07:00am -11:00 pm</p>
        </div>
      </div>
      <div className={styles.app__footer_copyright}><p className={`p__opensans ${styles.app__footer_copyrighttext}`}>2021 Gerícht. All Rights reserved.</p></div>
    </div>
  )
}

export default Footer
