import React from 'react';
import styles from "./styles.module.css";
import { images } from '../../constants';
import Button from '../../components/Button/Button';
import { SubHeading} from '../../components';
import Heading from '../../components/Heading/Heading';

const FindUs = () => (
  <div className={`section__padding`}>
    <div className={`flex__center ${styles.app__findus}`}>
      <div className={styles.app__findus_content}>
        <SubHeading title="Contact" />
        <Heading title="Find Us"/>
        <p className={`p__opensans ${styles.app__address}`}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <div className={styles.app__findus_opening}>
          <p className={styles.app__openinghours}>Opening Hours</p>
          <p className={styles.app__openinghours_hours}>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className={styles.app__openinghours_hours}>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <Button btnName="Visit Us"/>
      </div>
      <div className={`app__wrapper_img`}>
        <img src={images.findus} className={styles.app__chef_img} alt="findus image" />
      </div>
    </div>
  </div>
);

export default FindUs;
