import React, { useRef } from 'react';
import styles from './styles.module.css';

import { SubHeading } from '../../components';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import { images } from '../../constants';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsInstagram} from 'react-icons/bs';

const Gallery = () => {
  const scrollRef = useRef(null);

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery01, images.gallery02, images.gallery03, images.gallery04];
  const scroll = (direction)=>{
    let {current} = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 300;
    }else{
      current.scrollLeft +=300;
    }
  }

  return (
  <div className={`section__padding ${styles.app__gallery}`}>
    <div className={`flex__center ${styles.app__gallery_flex}`}>
      <div className={styles.app__gallery_content}>
        <SubHeading title="Instagram" />
        <Heading title="Photo Gallery" />
        <p className={`p__opensans ${styles.app__galleryparagraph}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu. 
        </p>
        <Button btnName="View More"/>
      </div>
      <div className={styles.app__gallery_container}>
        <div className={styles.app__gallery_images} ref={scrollRef}>
          {galleryImages.map((image,index)=>
            <div className={`${styles.app__gallery_card} flex__center`} key={index}>
              <img src={image} alt="gallery" />
              <BsInstagram className={styles.app__gallery_instagram}/>
            </div>
          )}
          
        </div>
        <BsFillArrowLeftCircleFill className={`${styles.app__gallery_scrollbtn} ${styles.app__gallery_scrollbtnleft}`} onClick={()=>scroll('left')}/>
        <BsFillArrowRightCircleFill className={`${styles.app__gallery_scrollbtn} ${styles.app__gallery_scrollbtnright}`} onClick={()=>scroll('right')}/>
      </div>
    </div>
  </div>
)};

export default Gallery;
