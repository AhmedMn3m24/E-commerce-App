"use client";
import { CartContextProvider } from "@/Context/CartContext";
import { SessionProvider } from "next-auth/react";

export default function MySessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </SessionProvider>
  );
}
