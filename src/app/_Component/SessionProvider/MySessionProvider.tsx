'use client'
import { SessionProvider } from "next-auth/react"
import { CartContext } from "./cartContext"
import { CartContextProvider } from "./cartContext"
export default function MySessionProvider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <CartContextProvider>
                {children}
            </CartContextProvider>
        </SessionProvider>
    )
}
