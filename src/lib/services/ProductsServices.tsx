import { ProductType } from "../interfaces/Category";

export async function getAllProducts(): Promise<ProductType[] | null> {

  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/products', { cache: "force-cache" })

    const finalRes = await res.json()


    return finalRes.data;
  } catch (error) {
    console.log('Error', error);
    return null
  }

}

export async function getSpecifiedProducts(id: string): Promise<ProductType | null> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    const finalRes = await res.json();
    return finalRes.data;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
}

