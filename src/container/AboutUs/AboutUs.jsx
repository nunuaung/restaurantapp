import React from 'react';

import styles from "./styles.module.css"
import images from '../../constants/images';
import SubHeading from '../../components/SubHeading/SubHeading';
import Button from '../../components/Button/Button';

const AboutUs = () => (
  <div className={`section__padding app__bg ${styles.app__aboutus}`}>
    <div className={`flex__center ${styles.app__aboutus_overlay}`}>
      <img src={images.G} className={styles.app__aboutus_overlayimage} alt="aboutus G" />
    </div>
    <div className={`flex__center ${styles.app__aboutus_wrapper}`}>
      <div className={styles.app__aboutus_about}>
        <h2 className={`headtext__cormorant`}>About Us</h2>
        <p className={`p__opensans ${styles.app__aboutus_desc}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <Button btnName="Know More" />
      </div>
      <div className={`flex__center ${styles.app__aboutus_image}`}>
        <img src={images.knife} className={styles.app__aboutus_knife}alt="aboutus knife" />
      </div>
      <div className={styles.app__aboutus_history}>
        <h2 className={`headtext__cormorant`}>Our History</h2>
        <p className={`p__opensans ${styles.app__aboutus_desc}`}>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <Button btnName="Know More" />
      </div>
    </div>
  </div>
);

export default AboutUs;
