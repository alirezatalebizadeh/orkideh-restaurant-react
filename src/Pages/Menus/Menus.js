import React from 'react'
import SliderMenu from '../../Components/SliderMenu/SliderMenu'
import './Menus.css'
import MenuFoods from '../../Components/MenuFoods/MenuFoods'
export default function Menus () {
  return (
    <div className='Menus'>
      <SliderMenu />
      <MenuFoods />
    </div>
  )
}
