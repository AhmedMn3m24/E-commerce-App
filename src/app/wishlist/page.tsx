"use client";

import { useFav } from "@/app/_Component/Home/Navbar/favContext/favContext";
import ProductCard from "@/app/_Component/ProductCard/ProductCard";

export default function WishlistPage() {
  const { favs } = useFav();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      {favs.length === 0 ? (
        <p className="text-gray-500">You have no favorite products yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favs.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
