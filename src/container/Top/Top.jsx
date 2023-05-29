import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"

const Top = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(()=>{
        const topButtonVisibility = ()=>{
            window.pageYOffset > 500 ? setShowTopBtn(true) : setShowTopBtn(false);
        }
        window.addEventListener('scroll', topButtonVisibility);
    },[]);

    const handleTopHandle = ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    
  return (
    <>
    {showTopBtn &&
        <div className={`${styles.app__top}`} onClick={handleTopHandle}>
            <div className={styles.app__top_btn}>
            <div className={styles.app__top_btnborder} />
            <p className='p__opensans'>TOP</p>
            </div>
        </div>}
    </>
  )
}

export default Top
