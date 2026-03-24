"use client";
import { addProductToCart } from "@/app/cart/cartaction";
import { CartContext } from "@/Context/CartContext";
import { useContext } from "react";
import toast from "react-hot-toast";

export default function AddProductBtn({ productId }: { productId: string }) {
  const { updateCartCount } = useContext(CartContext);
  async function handleAddTocart() {
    console.log("adding");

    const isAdded = await addProductToCart(productId);
    console.log(isAdded);

    if (isAdded) {
      updateCartCount(isAdded);
      toast.success("Product Added Successfully ");
    } else {
      toast.error("Product feild ");
    }
  }

  return (
    <button
      onClick={handleAddTocart}
      className="w-full bg-red-500 text-white  py-2 px-6 cursor-pointer rounded-lg mt-auto"
    >
      Add to Cart
    </button>
  );
}
