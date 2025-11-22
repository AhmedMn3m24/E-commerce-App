import ProductCard from "../ProductCard/ProductCard";
import { ProductType } from "@/lib/interfaces/Category";

export default function ProductsList({
  products,
}: {
  products: ProductType[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 md:px-8 lg:px-10 mt-10 mb-20">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
