'use server'
import { cookies } from "next/headers";
import { RegisterFromType } from "./RegisterTypes";

export default async function handleRegister(data: RegisterFromType) {


    try {
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup', {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }


        })

        const finalRes = await res.json();
        console.log('finalRes', finalRes);

        if (finalRes.message === 'success') {



            const cokkie = await cookies()
            cokkie.set('userToken', finalRes.token, {
                httpOnly: true,

                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60,
            })

            return true;

        } else {
            return finalRes.message;
        }
    } catch (error) {
        console.log(error, 'error');
        return false;

    }




}
