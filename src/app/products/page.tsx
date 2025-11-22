import { getAllProducts } from "@/lib/services/ProductsServices";
import ProductsList from "../_Component/ProductsList/ProductsList";
export default async function ProductsPage() {
  const allProducts = await getAllProducts();

  return (
    <div className="mt-20">
      <h1 className="font-bold text-4xl text-center mb-10">All Products</h1>
      <ProductsList products={allProducts || []} />
    </div>
  );
}
