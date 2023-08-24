import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
//custom css
import './SliderHome.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function SliderHome () {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }

  return (
    <div className='Home_slider'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 12500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='mySwiper'
      >
        <SwiperSlide>
          <div class='info'>
            <h1 id='title'>رستوران زنجیره ای ارکیده</h1>
            <h4>طعم و کیفیت واقعی غذا را با ما تجربه کنید</h4>
          </div>
          <img loading='lazy' src='images/1.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <div class='info'>
            <h1 id='title'>رستوران زنجیره ای ارکیده</h1>
            <h4>طعم و کیفیت واقعی غذا را با ما تجربه کنید</h4>
          </div>
          <img loading='lazy' src='images/arjantin.jpg' alt='' />
        </SwiperSlide>

        <div className='autoplay-progress' slot='container-end'>
          <svg viewBox='0 0 48 48' ref={progressCircle}>
            <circle cx='24' cy='24' r='20'></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}

// <div class="swiper mySwiper">
//     <div class="swiper-wrapper">
//       <div class="swiper-slide">
//         <div class="info">
//           <h1 id="title">رستوران زنجیره ای ارکیده</h1>
//           <h4>طعم و کیفیت واقعی غذا را با ما تجربه کنید</h4>
//         </div>
//         <img loading="lazy" src="/images/1.jpg" alt="" />
//       </div>

//       <div class="swiper-slide">
//         <div class="info">
//           <h1 id="title">رستوران زنجیره ای ارکیده</h1>
//           <h4>طعم و کیفیت واقعی غذا را با ما تجربه کنید</h4>
//         </div>
//         <img loading="lazy" src="/images/arjantin.jpg" alt="" />
//       </div>
//     </div>
//     <div class="swiper-button-next"></div>
//     <div class="swiper-button-prev"></div>
//     <div class="swiper-pagination"></div>
//     <div class="autoplay-progress">
//       <svg viewBox="0 0 48 48">
//         <circle cx="24" cy="24" r="20"></circle>
//       </svg>
//       <span></span>
//     </div>
//   </div>
