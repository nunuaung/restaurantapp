import React, { useRef, useState } from 'react'
import {BsFillPlayFill, BsPauseFill} from "react-icons/bs";
import styles from "./styles.module.css"

import { meal } from '../../constants'

const Intro = () => {
  const vidref = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const videoHandler = ()=>{
    setPlayVideo((prev)=>!prev);

    playVideo ? vidref.current.pause() : vidref.current.play()
  }
  return (
    <div className={styles.app__intro_wrapper}>
      <div className={styles.app__intro_videowrap}>
        <video src={meal}
          controls={false}
          type="video/mp4"
          loop
          muted
          ref={vidref}
          className={styles.app__intro_video}
        />
        <div className={`flex__center ${styles.app__video_overlay}`}>
          <div className={styles.app__video_circle} onClick={videoHandler}>
            {playVideo ? <BsPauseFill className={styles.app__video_icon}/> : <BsFillPlayFill className={styles.app__video_icon}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
