import React, { useRef } from 'react'
//typeWriter library
import { Typewriter } from 'react-simple-typewriter'

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
          delay: 7000,
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
            <h1 className='title'>
              <Typewriter
                loop
                cursor
                cursorStyle='.'
                typeSpeed={40}
                deleteSpeed={50}
                delaySpeed={1000}
                words={[
                  'رستوران زنجیره ای ارکیده',
                  'بهترین رستوران ایران',
                  'بهترین کافه ها'
                ]}
                onLoop={loopCount =>
                  console.log(`Just completed loop ${loopCount}`)
                }
              />
            </h1>
            <h4>طعم و کیفیت واقعی غذا را با ما تجربه کنید</h4>
          </div>
          <img src='images/1.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <div class='info'>
            <h1 className='title'>
              <Typewriter
                loop
                cursor
                cursorStyle='.'
                typeSpeed={30}
                deleteSpeed={60}
                delaySpeed={1000}
                words={[
                  'رستوران زنجیره ای ارکیده',
                  'بهترین رستوران ایران',
                  'بهترین کافه ها'
                ]}
                onLoop={loopCount =>
                  console.log(`Just completed loop ${loopCount}`)
                }
              />
            </h1>
            <h4> پذیرای قدم های گرم شما هستیم</h4>
          </div>
          <img src='images/arjantin.jpg' alt='' />
        </SwiperSlide>

        <div className='autoplay-progress' slot='container-end'>
          <svg viewBox='0 0 48 48' ref={progressCircle}>
            <circle cx='25' cy='25' r='20'></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}
