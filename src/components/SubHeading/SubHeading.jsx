import React from 'react';
import images from '../../constants/images';
import styles from './styles.module.css';

const SubHeading = ({title,className}) => (
  <div className={styles.app__subheading}>
    <p className={`p__cormorant`}>{title}</p>
    <img src={images.spoon} alt="subheading spoon" />
  </div>
);

export default SubHeading;
