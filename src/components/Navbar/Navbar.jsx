import React from 'react';
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';

import styles from './styles.module.css';

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const toggleMenu = ()=>{
    setShowOverlay(!showOverlay);
  }
  return(
  <nav className={styles.app__navbar}>
    <div >
      <img src={images.gericht} className={styles.app__navbar_logo} alt="app logo" />
    </div>
    <ul className={`${styles.app__navbar_links} ${styles.app__navbar_linkspc}`}>
      <li className={`p__opensans ${styles.app__navbar_link}`} ><a href='#home'>Home</a></li>
      <li className={`p__opensans ${styles.app__navbar_link}`}><a href='#about'>About</a></li>
      <li className={`p__opensans ${styles.app__navbar_link}`}><a href='#menu'>Menu</a></li>
      <li className={`p__opensans ${styles.app__navbar_link}`}><a href='#awards'>Awards</a></li>
      <li className={`p__opensans ${styles.app__navbar_link}`}><a href='#contact'>Contact</a></li>
    </ul>
    <div className={styles.app__navbar_login}>
      <a href='#' className={`p__opensans ${styles.app__navbar_link}`}>Login </a>
      <div className={styles.app__navbar_loginborder}/>
      <a href='#' className={`p__opensans ${styles.app__navbar_link} ${styles.app__navbar_book}`} >Book Table</a>
    </div>
    <div className={styles.app__navbar_smallscreen}>
      <GiHamburgerMenu fontSize={24} onClick={toggleMenu} className={styles.app__navbar_hambuger}/>
      {showOverlay && 
        <div className={styles['app__navbar_overlay']} >
            <MdOutlineRestaurantMenu fontSize={24} onClick={toggleMenu} className={styles.app__navbar_overlayclose}/>
            <ul className={`${styles.app__navbar_links} ${styles.app__navbar_linksmobile}`}>
            <li className={`p__opensans ${styles.app__navbar_link}`} ><a href='#home'>Home</a></li>
            <li className={`p__opensans ${styles.app__navbar_link}`}><a href='#about'>About</a></li>
            <li className={`p__opensans ${styles.app__navbar_link}`}><a href='#menu'>Menu</a></li>
            <li className={`p__opensans ${styles.app__navbar_link}`}><a href='#awards'>Awards</a></li>
            <li className={`p__opensans ${styles.app__navbar_link}`}><a href='#contact'>Contact</a></li>
          </ul>
          
        </div>
      }
      
    </div>
  </nav>
);
}

export default Navbar;
