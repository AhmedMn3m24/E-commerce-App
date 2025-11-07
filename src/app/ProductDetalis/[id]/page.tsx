import AddProductBtn from '@/app/_Component/AddProductBtn/AddProductBtn';
import { Button } from '@/components/ui/button';
import { getSpecifiedProducts } from '@/lib/services/ProductsServices'

type ProductsDetalisProps = {
  params: { id: string }
}
export default async function ProductsDetalis({ params }: ProductsDetalisProps) {

  const object = await getSpecifiedProducts(params.id)

  console.log(object)

  if (!object) {
    return null;
  }
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">

    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //     {/* صورة المنتج */}
    //     <div className="col-span-1 flex items-center justify-center">
    //       <img
    //         src={object?.imageCover}
    //         className="w-full rounded-lg shadow-sm ml-24"
    //         alt={object?.title}
    //       />
    //     </div>

    //     {/* تفاصيل المنتج */}
    //     <div className="col-span-3 flex flex-col gap-4 items-center justify-center text-center">
    //       <h2 className="text-2xl font-medium ml-5">{object?.title}</h2>
    //       <p className="ml-10">{object?.description}</p>
    //       <h5 className="text-xl text-red-600 font-bold">${object?.price}</h5>
    //       <h6>Category: {(object?.category?.name as any)}</h6>
    //       <h6>Brand: {(object?.category?.name as any)}</h6>


    //       {/* الكمية + زرار */}
    //       <div className="flex items-center gap-4 mt-4">
    //         <div className="flex items-center border rounded">
    //           <button className="px-3 py-1">-</button>
    //           <button className="px-3 py-1">+</button>
    //         </div>
    //         <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
    //           Buy Now
    //         </button>

    //       </div>

    //       <AddProductBtn id={object.id} className="w-1/2 mt-5 mx-auto cursor-pointer" />


    //     </div>

    //   </div >
    // </div>
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-10">
      {/* صورة المنتج */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={object?.imageCover}
          alt={object?.title}
          className="w-full h-50 lg:h-[500px] object-contain rounded-xl "
        />
      </div>

      {/* تفاصيل المنتج */}
      <div className="flex-1 flex flex-col gap-4 text-center lg:text-left">
        <h2 className="text-3xl font-bold">{object?.title}</h2>
        <p className="text-gray-700">{object?.description}</p>
        <h5 className="text-2xl text-red-600 font-bold">${object?.price}</h5>
        <h6>Category: {(object?.category?.name as any)}</h6>
        <h6>Brand: {(object?.category?.name as any)}</h6>

        {/* الكمية + زرار */}
        <div className="flex items-center gap-4 mt-4 justify-center lg:justify-start">
          <div className="flex items-center border rounded">
            <button className="px-3 py-1">-</button>
            <button className="px-3 py-1">+</button>
          </div>
          <Button className="bg-black text-white px-6 py-2 rounded hover:bg-black">
            Buy Now
          </Button>
        </div>

        <AddProductBtn id={object.id} className="w-1/2 mt-5 mx-auto lg:mx-0 cursor-pointer" />
      </div>
    </div>


  )
}


