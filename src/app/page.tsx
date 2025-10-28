import { ProductType } from '@/lib/interfaces/Category';
import ProductCard from './_Component/ProductCard/ProductCard';
import { getAllProducts } from '@/lib/services/ProductsServices';
import HomeSlider from './_Component/HomeSlider/HomeSlider';
import CatrgorySlider from './_Component/CatrgorySlider/CatrgorySlider';
import { lazy, Suspense } from 'react';
import { Loader } from 'lucide-react';
import Loading from './_Component/Loading';


const categorySlider = lazy(() => import('./_Component/CatrgorySlider/CatrgorySlider'))



export default async function Home() {


  const allProducts = await getAllProducts();



  return (
    <>

      <div className=' flex flex-col gap-3'>
        <HomeSlider />

        <div className="px-10">
          <Suspense fallback={<Loading />}>
            <CatrgorySlider />
          </Suspense>
        </div>
      </div >
      <h1 className='text-4xl mt-12 ml-10 font-bold  '>Products</h1>
      <div className='grid grid-cols-4 w-3/4 gap-5 mx-auto mt-10 mb-20'>

        {allProducts?.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  )
}

