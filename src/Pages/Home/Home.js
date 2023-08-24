import React from 'react'
import SliderHome from '../../Components/SliderHome/SliderHome'
import MainContentHome from '../../Components/MainContentHome/MainContentHome'
import './Home.css'

export default function Home () {
  return (
    <div className='home'>
      <SliderHome />
      <MainContentHome />
    </div>
  )
}
