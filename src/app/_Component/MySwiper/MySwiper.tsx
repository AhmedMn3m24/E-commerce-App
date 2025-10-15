// 'use client'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css';

// export default function MySwiper({ imagesList, spaceBetween = 10, slidesPerView = 1 }:
//     {
//         imagesList: string[],
//         spaceBetween?: number,
//         slidesPerView?: number
//         autoplay?: boolean; // ✅ أضف دي
//         delay?: number;     // ✅ وأضف دي
//     }) {

//     return (
//         <Swiper
//             spaceBetween={spaceBetween}
//             slidesPerView={slidesPerView}
//             modules={[Navigation, Pagination, Autoplay]}
//             className='w-full'
//             slidesPerView={slidesPerView}
//             spaceBetween={spaceBetween}
//             modules={[Autoplay]}
//             autoplay={
//                 Autoplay
//                     ? {
//                         delay,
//                         disableOnInteraction: false,
//                     }
//                     : false
//             }
//             loop={true}
//         >

//             {imagesList.map(src =>

//                 <SwiperSlide key={src}>
//                     <img className='w-full h-[400px]' src={src} />


//                 </SwiperSlide>)}

//         </Swiper>
//     );

// };
'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

type MySwiperProps = {
    imagesList: string[];
    spaceBetween?: number;
    slidesPerView?: number;
    autoplay?: boolean;
    delay?: number;

};

export default function MySwiper({
    imagesList,
    spaceBetween = 10,
    slidesPerView = 1,
    autoplay = false,
    delay = 2000,

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
                        className="w-full h-[400px] object-cover rounded-xl shadow-md"
                        src={src}
                        alt=""
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

