// "use client";
// import { addProductToCart } from "@/app/cart/cartaction";
// import { CartContext } from "@/Context/CartContext";
// import { useContext } from "react";
// import toast from "react-hot-toast";

// export default function AddProductBtn({ productId }: { productId: string }) {
//   const { updateCartCount } = useContext(CartContext);
//   async function handleAddTocart() {
//     console.log("adding");

//     const isAdded = await addProductToCart(productId);
//     console.log(isAdded);

//     if (isAdded) {
//       updateCartCount(isAdded);
//       toast.success("Product Added Successfully ");
//     } else {
//       toast.error("Product feild ");
//     }
//   }

//   return (
//     <button
//       onClick={handleAddTocart}
//       className="w-full bg-black text-white  py-2 px-6 cursor-pointer rounded-lg mt-auto"
//     >
//       Add to Cart
//     </button>
//   );
// }

"use client";
import { addProductToCart } from "@/app/cart/cartaction";
import { CartContext } from "@/Context/CartContext";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

export default function AddProductBtn({ productId }: { productId: string }) {
  const { updateCartCount } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  async function handleAddToCart() {
    setLoading(true);
    try {
      const result = await addProductToCart(productId);

      if (result === null) {
        toast.error("Please login first!");
      } else {
        updateCartCount(result);
        toast.success("Product added to cart!");
      }
    } catch {
      toast.error("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className="w-full bg-black text-white py-2 px-6 rounded-lg mt-auto cursor-pointer
                 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity duration-200"
    >
      {loading ? "Adding..." : "Add to Cart"}
    </button>
  );
}
