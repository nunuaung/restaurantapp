import React from 'react'
import styles from "./styles.module.css"
import { images } from '../../constants'
import { SubHeading } from '../../components'
import Heading from '../../components/Heading/Heading'
import { data } from '../../constants'

const AwardCard = ({award})=>{
  return(
    <div className={styles.app__lurels_awardscard}>
      <img src={award.imgUrl} className={styles.app__lurels_awardscardimge} alt={award.title} />
      <div className={styles.app__lurels_awarddesc}>
        <p className='p__cormorant'>{award.title}</p>
        <p className='p__opensans'>{award.subtitle}</p>
      </div>
    </div>
  )
}
const Laurels = () => {
  return (
    <div className={`section__padding ${styles.app__laurels}`}>
      <div className={`flex__center ${styles.app__laurels_wrap}`}>
        <div className={styles.app__lurels_content}>
          <SubHeading title="Awards & recognition" />
          <Heading title="Our Laurels" />
          <div className={styles.app__lurels_awards}>
            {data.awards.map((award,index)=><AwardCard key={index} award={award}/>)}
          </div>
        </div>
        <div className={`app__wrapper_img ${styles.app__lurels_image}`}>
          <img src={images.laurels} className={styles.app__lurels_img} alt="lurels" />
        </div>
      </div>
      <img src={images.logo} className={styles.app__laurelslogo} alt="laurels logo" />
    </div>
  )
}

export default Laurels
