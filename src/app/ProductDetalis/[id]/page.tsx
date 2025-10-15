import { getSpecifiedProducts } from '@/lib/services/ProductsServices'
import { TbTruckDelivery } from "react-icons/tb";

type ProductsDetalisProps = {
  params: { id: string }
}
export default async function ProductsDetalis({ params }: ProductsDetalisProps) {

  const object = await getSpecifiedProducts(params.id)

  console.log(object)

  return (

    <div className="grid grid-cols-4 gap-6 font-bold p-6 items-center justify-center">
      {/* صورة المنتج */}
      <div className="col-span-1 flex items-center justify-center">
        <img
          src={object?.imageCover}
          className="w-full rounded-lg shadow-sm ml-24"
          alt={object?.title}
        />
      </div>

      {/* تفاصيل المنتج */}
      <div className="col-span-3 flex flex-col gap-4 items-center justify-center text-center">
        <h2 className="text-3xl">{object?.title}</h2>
        <p className="text-gray-600 font-normal">{object?.description}</p>
        <h5 className="text-xl text-red-600">${object?.price}</h5>
        <h6>Category: {object?.category?.name}</h6>
        <h6>Brand: {object?.brand?.name}</h6>


        {/* الكمية + زرار */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center border rounded">
            <button className="px-3 py-1">-</button>
            <button className="px-3 py-1">+</button>
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
            Buy Now
          </button>
        </div>

        {/* معلومات إضافية */}
        <div className="mt-5 border w-[332px] h-[100px] px-15 py-4 rounded shadow-md">
          <p className="flex items-center gap-2 text-gray-500 border-b pb-1 mb-2">
            <TbTruckDelivery className="text-4xl" />
            Free Delivery
          </p>
          <p className="flex items-center gap-2  text-black">
            ↩️ Free 30 Days Return
          </p>
        </div>
      </div>
    </div>







  )
}

