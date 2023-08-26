import React, { useRef } from 'react'
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
    const myVideo1 = useRef()
    const myVideo2 = useRef()
    const myVideo3 = useRef()

    //Todo  see bottom code and do this

    return (
        <div className='sliderVideo'>

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <video ref={myVideo1} className='video' controls poster="/images/mahestan-bg2.jpg">
                        <source src="video/مهستان.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <video ref={myVideo2} className='video' controls poster="/images/aghdasieh.jpg">
                        <source src="video/اقدسیه.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <video ref={myVideo3} className='video' controls poster="/images/chaloos-bg.jpg">
                        <source src="video/چالوس.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

// let nxtBtn = document.querySelector('.swiper-button-next')
// let prvBtn = document.querySelector('.swiper-button-prev')
// let videoElems = document.querySelectorAll('#player')



// function pauseVideo() {
//     videoElems.forEach(video => {
//         video.pause();
//     })
// }


// prvBtn.addEventListener('click', pauseVideo)
// nxtBtn.addEventListener('click', pauseVideo)
