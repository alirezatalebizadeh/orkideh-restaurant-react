import React, { useContext } from 'react'
import orkidehData from '../../Context/Context'
// !Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// !Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
//! custom css
import './SliderMenu.css'
// import required modules
import { Navigation, Autoplay } from 'swiper/modules'

export default function SliderMenu () {
  const contextData = useContext(orkidehData)

  return (
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
              <select className='countrySelect'>
                <option className='option'>انتخاب شعبه</option>
                <option className='option' value='مهستان'>
                  شعبه مهستان
                </option>
                <option className='option' value='جاده چالوس'>
                  شعبه جاده چالوس
                </option>
                <option className='option' value='متل قو'>
                  شعبه متل قو
                </option>
                <option className='option' value='اقدسیه'>
                  شعبه اقدسیه
                </option>
              </select>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
