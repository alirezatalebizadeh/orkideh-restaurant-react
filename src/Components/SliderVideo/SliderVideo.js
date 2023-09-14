import React from 'react'
// !Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// !Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
//! custom css
import './SliderVideo.css'


// import required modules
import { Navigation } from 'swiper/modules';
// import { Prev } from 'react-bootstrap/esm/PageItem';
// import userEvent from '@testing-library/user-event';



export default function SliderVideo() {

    //Todo  see bottom code and do this

    return (
        <div className='sliderVideo'>

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <video className='video' controls poster="/images/mahestan-bg2.jpg">
                        <source src="video/مهستان.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <video className='video' controls poster="/images/aghdasieh.jpg">
                        <source src="video/اقدسیه.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <video className='video' controls poster="/images/chaloos-bg.jpg">
                        <source src="video/چالوس.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

