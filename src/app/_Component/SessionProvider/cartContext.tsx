'use client';

import { useState, createContext, ReactNode } from "react";

export const CartContext = createContext({ cartcount: 0, updateCartCount: (x: number) => { } });

export function CartContextProvider({ children }: { children: ReactNode }) {
    const [cartcount, setCartcount] = useState(0);

    function updatecartcount(newcount: number) {
        setCartcount(newcount)
    }
    return <CartContext.Provider value={{ cartcount, updateCartCount: updatecartcount }}>
        {children}
    </CartContext.Provider>

}