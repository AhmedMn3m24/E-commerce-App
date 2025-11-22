// 'use server';
import { getMyUserToken } from "@/utlis/utlis";

// export type ShippingAddressType = {
//     details: string;
//     phone: string;
//     city: string;
// };

export async function CreateCashOrder(cartId: string, form: string) {

    const token = await getMyUserToken();

    const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: token as string,
            },
            body: JSON.stringify({ shippingAddress: form }),
        }
    );

    const final = await res.json();
    console.log(final, "final create order");
    return final;
}
