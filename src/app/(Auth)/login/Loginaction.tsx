'use server'
import { cookies } from "next/headers";
import { LoginFormType } from "./LoginTypes";

export default async function handleLogin(data: LoginFormType) {


    try {
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }


        })

        const finalRes = await res.json();
        console.log('finalRes', finalRes);

        if (finalRes.message === 'success') {

            const cookie = await cookies()
            cookie.set('userToken', finalRes.token, {
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60,
            })
            return true;

        } else {
            return finalRes.message;
        }

    } catch (error) {
        return false;

    }




}
