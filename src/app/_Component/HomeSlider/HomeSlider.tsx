import img1 from '@images/slider-image-1.jpeg'
import img2 from '@images/slider-image-2.jpeg'
import img3 from '@images/slider-image-3.jpeg'
import Image from 'next/image';
import MySwiper from '../MySwiper/MySwiper'

export default function HomeSlider() {
    return (
        <div className="container mx-auto mt-10 px-4">
            <MySwiper imagesList={[img1.src, img2.src, img3.src]} />
        </div>


    )
}

