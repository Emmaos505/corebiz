import React from 'react';
import styles from './styles';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./banner.css";
import bannerCorebizDesktop from '../../Assets/bannerCorebizDesktop.jpg';
import bannerCorebizMobile from '../../Assets/bannerCorebizMobile.png';

const Slider = () => {
    return (
        <styles.Wrapper>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="swipperBanner"
            >
                <SwiperSlide><styles.Image src={bannerCorebizDesktop} /></SwiperSlide>
                <SwiperSlide><styles.Image src={bannerCorebizDesktop} /></SwiperSlide>
                <SwiperSlide><styles.Image src={bannerCorebizDesktop} /></SwiperSlide>
            </Swiper>
        </styles.Wrapper>
    )
}

export default Slider;

