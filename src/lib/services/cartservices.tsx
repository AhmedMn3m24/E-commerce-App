"use server";
import { getMyUserToken } from "@/utlis/utlis";
import { CartResponseType, ItemType } from "./types/cartTypes";

export async function getLoggedCart(): Promise<CartResponseType> {
  const token = await getMyUserToken();

  const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
    headers: {
      token: token as string,
    },
    cache: "force-cache",
    next: { tags: ["get-cart-items"] },
  });

  const final = await res.json();
  const products = final?.data?.products || [];
  const totalCartPrice = final?.data?.totalCartPrice || 0;
  const numOfCartItems = final?.numOfCartItems || 0;

  return { numOfCartItems, products, totalCartPrice };
}
