"use server";

import { getMyUserToken } from "@/utlis/utlis";
import { revalidatePath, revalidateTag } from "next/cache";

export async function addProductToCart(productId: string) {
  const usertoken = await getMyUserToken();

  if (usertoken) {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
      method: "POST",
      body: JSON.stringify({ productId }),
      headers: {
        "Content-Type": "application/json",
        token: usertoken as string,
      },
    });

    const finalRes = await res.json();
    if (finalRes.status === "success") {
      // revalidatePath("/cart");
      revalidateTag("get-cart-items");

      return finalRes.numOfCartItems;
    } else {
      return false;
    }
  }
}

export async function RemoveProductCart(productId: string) {
  const usertoken = await getMyUserToken();

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: usertoken as string,
      },
    }
  );

  const final = await res.json();

  console.log(final, "final");
  if (final.status === "success") {
    revalidatePath("/cart");

    return final.numOfCartItems;
  } else {
    return null;
  }
}

export async function ChangeCount(productId: string, count: number) {
  const usertoken = await getMyUserToken();

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: usertoken as string,
      },
      body: JSON.stringify({ count }),
    }
  );

  const final = await res.json();

  console.log(final, "Change count final");
  if (final.status === "success") {
    revalidatePath("/cart");
    return final.numOfCartItems;
  } else {
    return null;
  }
}
