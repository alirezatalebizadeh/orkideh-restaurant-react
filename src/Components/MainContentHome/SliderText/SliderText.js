import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './SliderText.css'
// import required modules
import { Autoplay, EffectFlip } from 'swiper/modules'

export default function SliderText (props) {
  return (
    <Swiper
      effect={'flip'}
      grabCursor={true}
      modules={[EffectFlip, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      className='mySwiper'
    >
      <SwiperSlide>
        <img src={props.img1} alt='picture' loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={props.img2} alt='picture' loading='lazy' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={props.img3} alt='picture' loading='lazy' />
      </SwiperSlide>
    </Swiper>
  )
}
