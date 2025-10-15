'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Mainslider() {
  return (
    <div className="mt-10 flex justify-center">
      <div className="container mx-auto px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            className="w-full"
          >
            <SwiperSlide>
              <div className="bg-black flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 rounded-2xl">
                {/* النص */}
                <div className="text-white max-w-md md:w-1/2 space-y-6 text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <img src="/apple.png" alt="Apple" className="w-15 h-15" />
                    <span className="text-sm md:text-base">iPhone 14 Series</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold leading-snug">
                    Up to 10% off Voucher
                  </h2>

                  <button className="inline-flex items-center gap-2 text-white border-b border-white hover:text-gray-300 transition">
                    Shop Now →
                  </button>
                </div>

                {/* الصورة */}
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                  <img
                    src="/sliderphone.jpg"
                    alt="Phone"
                    className="w-[300px] md:w-[450px] object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
    </div>
  )
}
