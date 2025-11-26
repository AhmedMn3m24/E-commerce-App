import AddProductBtn from "@/app/_Component/AddProductBtn/AddProductBtn";
import { Button } from "@/components/ui/button";
import { getSpecifiedProducts } from "@/lib/services/ProductsServices";

type ProductsDetalisProps = {
  params: Promise<{ id: string }>;
};
export default async function ProductsDetalis({
  params,
}: ProductsDetalisProps) {
  const id = (await params).id;
  const object = await getSpecifiedProducts(id);

  console.log(object);

  if (!object) {
    return null;
  }
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-10">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={object?.imageCover}
          alt={object?.title}
          className="w-full h-50 lg:h-[500px] object-contain rounded-xl "
        />
      </div>

      <div className="flex-1 flex flex-col gap-4 text-center lg:text-left">
        <h2 className="text-3xl font-bold">{object?.title}</h2>
        <p className="font-bold">{object?.description}</p>
        <h5 className="text-2xl text-red-600 font-bold">${object?.price}</h5>
        <h6 className="font-bold">
          Category: {object?.category?.name as string}
        </h6>
        <h6 className="font-bold">Brand: {object?.category?.name as string}</h6>
      </div>
    </div>
  );
}
