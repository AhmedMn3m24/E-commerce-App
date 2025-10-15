// import { getAllCategories } from '@/lib/services/CategoriesServices'
// import React from 'react'
// import MySwiper from '../MySwiper/MySwiper';
// import { CategoryType } from '@/lib/interfaces/Category';
// import { Autoplay } from "swiper/modules";

// type MySwiperProps = {
//     slidesPerView?: number;
//     spaceBetween?: number;
//     imagesList: string[];
//     autoplay?: boolean;
//     delay?: number;
// };

// export default async function CatrgorySlider() {
//     const allCategories = await getAllCategories();
//     console.log("allCategories", allCategories);

//     if (allCategories == null) {
//         return;
//     }

//     return (
//         <div className="max-w-6xl mx-auto px-4"> {/* container زي bootstrap */}
//             <h2 className="font-bold text-center italic text-2xl mb-4">Categories</h2>

//             <MySwiper
//                 slidesPerView={4}
//                 spaceBetween={20}
//                 imagesList={allCategories.map(
//                     (category: CategoryType) => category.image
//                 )}
//                 Autoplay={true} // أضف السطر ده
//                 delay={2000}    // وسرعة التحريك (كل 2 ثانية)
//             />
//         </div>
//     );

// }


import { getAllCategories } from '@/lib/services/CategoriesServices'
import React from 'react'
import MySwiper from '../MySwiper/MySwiper';
import { CategoryType } from '@/lib/interfaces/Category';

export default async function CategorySlider() {
    const allCategories = await getAllCategories();
    console.log("allCategories", allCategories);

    if (!allCategories) {
        return null;
    }

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-bold text-center italic text-2xl mb-4">Categories</h2>

            <MySwiper
                slidesPerView={4}
                spaceBetween={20}
                imagesList={allCategories.map(
                    (category: CategoryType) => category.image
                )}
                autoplay={true}
                delay={1000}

            />
        </div>
    );
}
