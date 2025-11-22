"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type MySwiperProps = {
  imagesList: string[];
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: boolean;
  delay?: number;
  imgHeight?: string;
  imgWidth?: string;
};

export default function MySwiper({
  imagesList,
  slidesPerView = 1,
  spaceBetween = 10,
  autoplay = true,
  delay = 3000,
  imgHeight = "h-[470px]",
  imgWidth = "w-full",
}: MySwiperProps) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      modules={[Autoplay]}
      autoplay={
        autoplay
          ? {
              delay,
              disableOnInteraction: false,
            }
          : false
      }
      loop={true}
      className="w-full"
    >
      {imagesList.map((src) => (
        <SwiperSlide key={src}>
          <img
            className={`${imgWidth} ${imgHeight} object-cover rounded-xl shadow-md`}
            src={src}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
