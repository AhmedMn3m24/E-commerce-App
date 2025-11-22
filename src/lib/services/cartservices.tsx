"use server";
import { getMyUserToken } from "@/utlis/utlis";
import { CartResponseType, ItemType } from "./types/cartTypes";

function AddProductToCart() {}
function updateCartCount() {}

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
  const {
    numOfCartItems,
    data: { products, totalCartPrice },
  } = final;
  return { numOfCartItems, products, totalCartPrice };
}
