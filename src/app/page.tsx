import { ProductType } from '@/lib/interfaces/Category';
import ProductCard from './_Component/ProductCard/ProductCard';
import { getAllProducts } from '@/lib/services/ProductsServices';
import HomeSlider from './_Component/HomeSlider/HomeSlider';
import CatrgorySlider from './_Component/CatrgorySlider/CatrgorySlider';
import { lazy, Suspense } from 'react';
import { Loader } from 'lucide-react';
import Loading from './_Component/Loading';
import { Button } from '@/components/ui/button';


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
      <h1 className='text-3xl mt-12 font-bold text-center'>Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 md:px-8 lg:px-10 mt-10 mb-20">
        {allProducts?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

