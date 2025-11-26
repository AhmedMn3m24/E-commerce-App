"use client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import Link from "next/link";
import { useFav } from "../Home/Navbar/favContext/favContext";
import { toast } from "react-hot-toast";

import { addProductToCart } from "@/app/cart/cartaction";
import AddProductBtn from "../AddProductBtn/AddProductBtn";

export default function ProductCard({ product }: { product: any }) {
  const { favs, toggleFav } = useFav();
  const isFav = favs.some((p) => p.id === product.id);

  const handleAddToCart = async () => {
    const res = await addProductToCart(product.id);

    if (res !== false && res !== null) {
      toast.success("Product added to cart!");
    } else {
      toast.error("Failed to add product to cart");
    }
  };

  return (
    <div className="relative mt-10 rounded-xl shadow-md pt-6 hover:shadow-lg transition-all duration-300 p-3 cursor-pointer border border-gray-200 bg-white hover:scale-[1.02]">
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
        <p className="text-gray-600 text-sm mb-1">
          {product.brand?.name || "DeFacto"}
        </p>
        <div className="flex justify-between items-center mt-1">
          <span className="text-green-600 font-semibold">
            {product.price} EGP
          </span>
          <div className="flex items-center text-yellow-400 text-sm">
            <span className="mr-1">{product.ratingsAverage || 4.8}</span>
            <CiStar className="text-lg" />
          </div>
        </div>
        <AddProductBtn productId={product.id} />
      </Link>
      {/* Heart */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          toggleFav(product);
        }}
        className="absolute top-1 right-2 text-4 cursor-pointer"
      >
        {isFav ? (
          <AiFillHeart className="text-red-600 text-xl" />
        ) : (
          <AiOutlineHeart className="text-gray-400 text-xl" />
        )}
      </div>
    </div>
  );
}
