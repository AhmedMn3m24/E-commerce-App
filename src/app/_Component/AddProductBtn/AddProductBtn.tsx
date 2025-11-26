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
      toast.success("Product Added Successfully ");
      updateCartCount(isAdded);
    } else {
      toast.error("Product feild ");
    }
  }

  return (
    <button
      onClick={handleAddTocart}
      className="w-full bg-black text-white  py-2 px-3 cursor-pointer rounded-lg "
    >
      Add to Cart
    </button>
  );
}
