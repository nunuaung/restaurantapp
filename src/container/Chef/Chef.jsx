import React from 'react';
import { SubHeading } from '../../components';
import Heading from '../../components/Heading/Heading';
import { images } from '../../constants';

import styles from "./styles.module.css";

const Chef = () => (
  <div className={`section__padding`}>
    <div className={`flex__center ${styles.app__col2_wrap}`}>
      <div className={`app__wrapper_img`}>
        <img src={images.chef} className={styles.app__chef_img} alt="chef image" />
      </div>
      <div className={styles.app__chef_content}>
        <SubHeading title="Chef’s Word" />
        <Heading title="What we believe in"/>
        <div className={styles.app__chef_quotewrap}>
          <div className={styles.app__chef_desc}>
            <img src={images.quote} className={styles.app__chef_quote} alt="chef quote" />
            <p className={`p__opensans ${styles.app__chef_desctext}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
            </p>
          </div>
          <p className={`p__opensans ${styles.app__chef_desctext}`}>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
            Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        </div>
        <div className={styles.app__chef_namegp}>
          <h4 className={styles.app__chef_name}>Kevin Luo</h4>
          <p className={`p__opensans ${styles.app__chef_position}`}>Chef & Founder</p>
        </div>
        <img src={images.sign} className={styles.app__chef_sign} alt="chef sign" />
      </div>
    </div>
  </div>
);

export default Chef;
