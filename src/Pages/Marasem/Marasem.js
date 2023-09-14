import React, {  useEffect, useRef } from 'react'
import ContentMarasem from '../../Components/ContentMaresem/ContentMarasem'
import './Marasem.css'

export default function Marasem () {
  const myVideo = useRef()
  useEffect(() => {
    myVideo.current.play()
  }, [])

  return (
    <div className='marasem'>
      {/* video in backGround */}
      <video ref={myVideo} autoPlay muted loop id='bg-video'>
        <source src='video/gfp-astro-timelapse.mp4' type='video/mp4' />
      </video>

      <ContentMarasem />
    </div>
  )
}
