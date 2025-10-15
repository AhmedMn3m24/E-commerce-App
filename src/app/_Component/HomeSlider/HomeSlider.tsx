import img1 from '@images/slider-image-1.jpeg'
import img2 from '@images/slider-image-2.jpeg'
import img3 from '@images/slider-image-3.jpeg'
import imgBlog1 from '@images/blog-img-1.jpeg'
import imgBlog2 from '@images/blog-img-2.jpeg'
import Image from 'next/image';
import MySwiper from '../MySwiper/MySwiper'

export default function HomeSlider() {
    return (
        <div className=' mt-2 px10 flex'>
            <MySwiper imagesList={[img1.src, img2.src, img3.src]} />


            <div className='w-1/4'>
                <Image
                    src={imgBlog1.src}
                    alt='blog1'
                    width={1000}
                    height={200}
                    className='w-full h-[200px] object-fit-contain'
                />
                <Image
                    src={imgBlog2.src}
                    alt='blog2'
                    width={1000}
                    height={200}
                    className='w-full h-[200px] object-fit-contain'
                />
            </div>
        </div>

    )
}

