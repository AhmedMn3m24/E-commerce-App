'use server';
import { getMyUserToken } from "@/utlis/utlis";

type cartItem = { numOfCartItems: number; products: any[]; totalCartPrice: number };

export async function getCartItems(): Promise<cartItem> {

    const token = await getMyUserToken();

    const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: {
            token: token as string,
        },
        cache: "force-cache",
        next: { tags: ['get-cart-items'] }
    });

    const final = await res.json();
    const {
        numOfCartItems,
        data: { products, totalCartPrice },
    } = final;

    return { numOfCartItems, products, totalCartPrice };
}
