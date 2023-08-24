import React from 'react'
import SliderHome from '../../Components/SliderHome/SliderHome'
import MainContentHome from '../../Components/MainContentHome/MainContentHome'
import './Home.css'
import ArticleBox from '../../Components/ArticleBox/ArticleBox'

export default function Home () {
  return (
    <div className='home'>
      <SliderHome />
      <MainContentHome />
      <ArticleBox />
    </div>
  )
}
