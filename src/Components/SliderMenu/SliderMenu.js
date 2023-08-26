import React from 'react'
// !Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// !Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
//! custom css
import './SliderMenu.css'
// import required modules
import { Navigation } from 'swiper/modules'

export default function SliderMenu () {
  return (
    <div className='sliderMenu'>
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
        <SwiperSlide>
          <img loading='lazy' src='/images/bg-classy-restaurant.jpg' alt='' />
          <div class='content'>
            <h3>منوی غذا و نوشیدنی ارکیده</h3>
            <select class='countrySelect'>
              <option class='option'>انتخاب شعبه</option>
              <option class='option' value='مهستان'>
                شعبه مهستان
              </option>
              <option class='option' value='جاده چالوس'>
                شعبه جاده چالوس
              </option>
              <option class='option' value='متل قو'>
                شعبه متل قو
              </option>
              <option class='option' value='اقدسیه'>
                شعبه اقدسیه
              </option>
            </select>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
