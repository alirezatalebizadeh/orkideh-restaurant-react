import React from 'react'
// !Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// !Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
//! custom css style
import './GallerySlider.css'



export default function GallerySlider() {
    return (
        <div className="Gallery_slider">
            <img src='/images/jaDEH.JPG' loading='lazy' className='bag_container' />
            <Swiper
                navigation={true}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    500: {
                        slidesPerView: 1,
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
                    },
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
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
