import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Swiper, SwiperSlide } from "swiper/react";
import useDevices from '../../hooks/useDevices';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./banner.css";
import bannerCorebizDesktop from '../../Assets/bannerCorebizDesktop.jpg';
import bannerCorebizMobile from '../../Assets/bannerCorebizMobile.png';

const Slider = () => {

    const device = useDevices();
    const { width } = device;
    const isPhone = width < 800;
    const srcBanner = isPhone ? bannerCorebizMobile : bannerCorebizDesktop;

    return (
        <styles.Wrapper>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="swipperBanner"
            >
                <SwiperSlide><styles.Image src={srcBanner} alt='banner' /></SwiperSlide>
                <SwiperSlide><styles.Image src={srcBanner} alt='banner' /></SwiperSlide>
                <SwiperSlide><styles.Image src={srcBanner} alt='banner' /></SwiperSlide>
            </Swiper>
        </styles.Wrapper>
    )
}

export default Slider;

