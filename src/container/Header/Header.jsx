import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import styles from "./styles.module.css";
import images from '../../constants/images';
import Button from '../../components/Button/Button';

const Header = () => (
  <div className={`app__wrapper section__padding ${styles.app__header}`}>
    <div className='app__wrapper_info'>
      <SubHeading  title="Chase the new Flavour" className="subHeading2"/>
      <h1 className={styles.app__header_title}>The key to Fine dining</h1>
      <p className={`p__opensans ${styles.app__header_content}`}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
      <Button btnName="Explore Menu" /> 
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header welcome" />
    </div>
  </div>
);

export default Header;
