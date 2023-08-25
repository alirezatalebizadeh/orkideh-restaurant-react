import React from 'react'
import { AiOutlineHeart, AiOutlineLine } from 'react-icons/ai'

// !Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// !Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation, Autoplay } from 'swiper/modules'
//! custom css style
import './GallerySlider.css'

export default function GallerySlider () {
  return (
    <div className='Gallery_slider'>
      {/* // !image of backGround */}
      <img src='/images/jaDEH.JPG' loading='lazy' className='bag_container' />

      <div className='info text-center'>
        <h3 className='title'>گالری</h3>
        <h1 className='sub_title'>مجموعه رستوران زنجیره ای ارکیده</h1>
        <span>
          <AiOutlineLine className='line' />{' '}
          <AiOutlineHeart className='heart' />{' '}
          <AiOutlineLine className='line' />
        </span>
      </div>

      <Swiper
        navigation={true}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        breakpoints={{
          500: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }}
        modules={[Navigation, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src='/images/gallery.jpg' alt='picture' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/gallery2.jpg' alt='picture' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/gallery3.jpg' alt='picture' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/gallery4.jpg' alt='picture' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/gallery5.jpg' alt='picture' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/gallery6.jpg' alt='picture' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/gallery3.jpg' alt='picture' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/gallery4.jpg' alt='picture' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/gallery5.jpg' alt='picture' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/gallery6.jpg' alt='picture' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
