import React, { useContext, useEffect, useRef, useState } from 'react'
import MenuFoods from '../MenuFoods/MenuFoods'
import orkidehData from '../../Context/Context'
import ActionFunc from '../MenuFoods/ActionFunc'
// !Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// !Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
//! custom css
import './SliderMenu.css'
// import required modules
import { Navigation, Autoplay } from 'swiper/modules'

export default function SliderMenu() {
  const contextData = useContext(orkidehData)
  const [allData, setAllData] = useState([])

  const changeData = async value => {
    contextData.setPositionRestaurant(value)

    if (value === 'mahestan') {
      await setAllData(prevstate => [contextData.menuItems.mahestan])
    } else if (value === 'chaloos') {
      await setAllData(prevstate => [contextData.menuItems.chaloos])
    } else if (value === 'aghdasieh') {
      await setAllData(prevstate => [contextData.menuItems.aghdasieh])
    } else if (value === 'motelGho') {
      await setAllData(prevstate => [contextData.menuItems.motelGho])
    } else if (value === '-1') {
      await setAllData(prevstate => [])
      alert('لطفا یک شعبه را انتخاب کنید')
    }
  }

  return (
    <>
      <div className='sliderMenu'>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className='mySwiper'
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
        >
          {contextData.menuSliderSrc.map(item => (
            <SwiperSlide key={item.id}>
              <img loading='lazy' src={item.src} alt={item.src} />
              <div className='content'>
                <h3>منوی غذا و نوشیدنی ارکیده</h3>
                <select
                  value={contextData.positionRestaurant}
                  onChange={e => changeData(e.target.value)}
                  className='countrySelect'
                >
                  <option className='option' value='-1'>
                    انتخاب شعبه
                  </option>
                  <option className='option' value='mahestan'>
                    شعبه مهستان
                  </option>
                  <option className='option' value='chaloos'>
                    شعبه جاده چالوس
                  </option>

                  <option className='option' value='motelGho'>
                    شعبه متل قو
                  </option>
                  <option className='option' value='aghdasieh'>
                    شعبه اقدسیه
                  </option>
                </select>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <MenuFoods allData={allData} />
    </>
  )
}
