import React from 'react';

import styles from "./styles.module.css";

const MenuItem = ({item}) => (
  <div className={styles.app__menuitem}>
    <div className={styles.app__menuitemgp}>
      <p className={`p__cormorant ${styles.app__menuitem_title}`}>{item.title}</p>
      <div className={styles.app__menuitem_dash} />
      <p className={`p__cormorant ${styles.app__menuitem_price}`}>{item.price}</p>
    </div>
    <div className={styles.app__menuitem_tagwrap}>
      <p className={`p__opensans ${styles.app__menuitem_tags}`}>{item.tags}</p>
    </div>
  </div>
);

export default MenuItem;
