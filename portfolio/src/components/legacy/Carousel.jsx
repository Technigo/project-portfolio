import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const Carousel = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        // modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </>
  );
};

export default Carousel;
