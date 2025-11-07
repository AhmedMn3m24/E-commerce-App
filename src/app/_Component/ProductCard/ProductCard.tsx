import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import AddProductBtn from "../AddProductBtn/AddProductBtn";
import { Heart } from "lucide-react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


export default function ProductCard({ product }: { product: any }) {


  return (
    <div className="mt-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 cursor-pointer border border-gray-200 bg-white hover:scale-[1.02]">
      <Link href={`/ProductDetalis/${product.id}`}>
        <img
          src={product.imageCover}
          alt={product.title}
          className="w-full h-70 object-cover rounded-lg bg-gray-100"
        />

        <h2 className="text-blue-700 font-semibold text-base mt-3 hover:underline">
          {product.title.split(" ").slice(0, 2).join(" ")}
        </h2>

        <p className="text-gray-500 text-sm">Women's Fashion</p>
        <p className="text-gray-600 text-sm mb-1">{product.brand?.name || "DeFacto"}</p>

        <div className="flex justify-between items-center mt-1">
          <span className="text-green-600 font-semibold">{product.price} EGP</span>
          <div className="flex items-center text-yellow-400 text-sm">

            <span className="mr-1">{product.ratingsAverage || 4.8}</span>
            <CiStar className="text-lg" />
          </div>
        </div>
        <Heart className="cursor-pointer text-red-600" />

      </Link>
      <AddProductBtn id={product.id} className="w-full mt-2 cursor-pointer" />
    </div>


  );
}
