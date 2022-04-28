import React from "react";
import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';

import'swiper/css';
import'swiper/css/navigation';
import'swiper/css/pagination';
import'swiper/css/scrollbar';


const SwiperBanner = () => {
    return(
        <>
        <Swiper
      // install Swiper modules
      className="firstSwiper"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,Mousewheel]}
      mousewheel={true}
      autoHeight={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ 
        dynamicBullets: true,
        type: "progressbar",  
        clickable: true 
        }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <BannerStyle>
            <SwiperSlide><img src="/images/alberta-2297204_640.jpg"/></SwiperSlide>
            <SwiperSlide><img src="/images/avenue-815297_640.jpg"/></SwiperSlide>
            <SwiperSlide><img src="/images/bird-1045954_640.jpg"/></SwiperSlide>
            <SwiperSlide><img src="/images/moon-2762111_640.jpg"/></SwiperSlide>
        </BannerStyle>
    </Swiper>
    </>
    )
}
export default SwiperBanner;

const BannerStyle = styled.div`
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 10rem;
    max-height: 10rem;
    color: #efefef;
`