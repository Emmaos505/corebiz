import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "../ProductCard";
import "./slider.css";

const Slider = ({ products }) => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
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
