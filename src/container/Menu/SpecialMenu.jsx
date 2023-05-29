import React from 'react';
import { MenuItem, SubHeading } from '../../components';
import {data, images} from '../../constants';
import Heading from '../../components/Heading/Heading';

import styles from "./styles.module.css";

const SpecialMenu = () => (
  <div className={`section__padding ${styles.app__specialmenu}`}>
    <SubHeading title="Menu that fits you palatte"/>
    <Heading title="Today’s Special" />
    <div className={`flex__center ${styles.app_specialmenu_menu}`}>
      <div className={` ${styles.app__specialmenu_items}`}>
        <h3 className={styles.app__specialmenu_itemheader}>Wine & Beer</h3>
          <div className={styles.app__specialmenu_itemgp}>
            {data.wines.map((item,index)=>(
              <MenuItem key={`item.title${index}`} item={item}/>
            ))}
          </div>
      </div>
      <div className={styles.app__specialmenu_imagewrap}>
        <img src={images.menu} className={styles.app__specialmenu_image} alt="specialmenu menu" />
      </div>
      <div className={` ${styles.app__specialmenu_items}`}>
        <h3 className={styles.app__specialmenu_itemheader}>Cocktails</h3>
          <div className={styles.app__specialmenu_itemgp}>
            {data.cocktails.map((item,index)=>(
              <MenuItem key={`item.title${index}`} item={item}/>
            ))}
          </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
