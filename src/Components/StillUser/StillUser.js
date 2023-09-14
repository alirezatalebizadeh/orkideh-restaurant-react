import React from 'react';
//! Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//! Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './StillUser.css';

//! import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function StillUser() {
    return (
        <div className='stillUser'>
           
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/images/17.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/aghdasieh.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/arjantin.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/jadeh.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/orkideh.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/سعادت-آباد.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/مالک.jpg" />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
