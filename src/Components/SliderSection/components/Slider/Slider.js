import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import useDevices from '../../../../hooks/useDevices';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "../ProductCard";
import "./slider.css";

const Slider = ({ products }) => {

    const device = useDevices();
    const { width } = device;
    const isPhone = width < 800;


    return (
        <>
            <Swiper
                slidesPerView={isPhone ? 2 : 4}
                spaceBetween={20}
                slidesPerGroup={isPhone ? 2 : 4}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={isPhone ? false : true}
                pagination={isPhone ? {
                    clickable: true,
                    dynamicBullets: true,
                } : false}
                modules={[Pagination, Navigation]}
                className="sliderProducts"
            >
                {
                    products.map((product, idx) => (
                        <SwiperSlide key={idx} >
                            <ProductCard {...product} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default Slider;
