"use client";

import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@images/freshcart-logo.svg";
import { useSession, signOut } from "next-auth/react";
import { useFav } from "./favContext/favContext";
import { getLoggedCart } from "@/lib/services/cartservices";
import { CartContext, CartContextProvider } from "@/Context/CartContext";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [initalcartCount, setCartCount] = useState(0);
  const { favs } = useFav();
  const { cartCount } = useContext(CartContext);

  useEffect(() => {
    getLoggedCart().then((res) => {
      setCartCount(res.numOfCartItems);
    });
  }, []);

  const userLoggedIn = Boolean(session?.user);

  const [open, setOpen] = useState(false);

  if (status === "loading") return null;

  return (
    <div className="w-full bg-white shadow">
      <nav className="w-full p-4 flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto font-bold">
          <Link href="/">
            <Image src={logo} alt="logo" width={125} height={100} />
          </Link>
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <ul
          className={`flex flex-col md:flex-row gap-6 mt-4 md:mt-0 text-black font-bold transition-all duration-300 ${
            open ? "flex" : "hidden md:flex"
          }`}
        >
          {userLoggedIn && (
            <>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </>
          )}
        </ul>

        <div
          className={`flex flex-col md:flex-row gap-6 mt-4 md:mt-0 transition-all duration-300 ${
            open ? "flex" : "hidden md:flex"
          }`}
        >
          {userLoggedIn ? (
            <div className="flex gap-4 items-center text-gray-700">
              {/* Cart */}
              <div className="relative">
                <Link href="/cart">
                  <ShoppingCart className="cursor-pointer text-2xl " />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full ">
                    {cartCount || initalcartCount}
                  </span>
                </Link>
              </div>

              {/* wishlist */}
              <div className="relative">
                <Link href="/wishlist">
                  <Heart className="cursor-pointer text-3xl" />
                  {favs.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {favs.length}
                    </span>
                  )}
                </Link>
              </div>

              {/* Logout */}
              <Button
                className="bg-red-600 hover:bg-red-700"
                onClick={() => signOut({ callbackUrl: "/login" })}
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link href="/register">
                <Button variant="outline">Register</Button>
              </Link>
              <Link href="/login">
                <Button className="bg-green-600 hover:bg-green-700">
                  Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
