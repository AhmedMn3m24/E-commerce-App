"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@images/freshcart-logo.svg";
import { useSession, signOut } from "next-auth/react";
import { getCartItems } from "@/lib/services/cartservices";
import { CartContext } from "../../SessionProvider/cartContext";

export default function Navbar() {
  const { data: session } = useSession();
  const [initcartcount, setInitCartcount] = useState(0);
  const { cartcount } = useContext(CartContext)

  const [open, setOpen] = useState(false);

  const userLoggedIn = Boolean(session?.user);

  useEffect(function () {
    getCartItems().then(res => {
      setInitCartcount(res.numOfCartItems)
    })
  }, [])

  return (
    <div className="w-full bg-white">
      <nav className="w-full shadow p-4 flex flex-col md:flex-row md:items-center justify-between">

        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto font-bold">
          <Link href="/">
            <Image src={logo} alt="logo" width={125} height={100} />
          </Link>
          <button className="md:hidden p-2 text-gray-600" onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Center Links */}
        <ul className={`flex flex-col md:flex-row gap-6 mt-4 md:mt-0 text-black font-bold ${open ? "flex" : "hidden md:flex"
          }`}>
          <li><Link href="/">Home</Link></li>
          {userLoggedIn && (
            <>
              <li><Link href="/wishlist">Wishlist</Link></li>
              <li><Link href="/cart">Cart </Link></li>

              <li><Link href="/contact">Contact</Link></li>
            </>
          )}
        </ul>

        {/* Right side */}
        <div className={`flex flex-col md:flex-row gap-6 mt-4 md:mt-0 ${open ? "flex" : "hidden md:flex"
          }`}>

          {/* Icons Only When Auth */}
          {userLoggedIn && (
            <div className="flex gap-4 text-gray-700">

              <div className="relative">
                <Link href="/cart">
                  <ShoppingCart className="cursor-pointer text-2xl" />
                  {(cartcount || initcartcount) > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {cartcount || initcartcount}
                    </span>
                  )}
                </Link>
              </div>
              <Link href="/wishlist"><Heart className="cursor-pointer" /></Link>
            </div>
          )}

          {/* Auth Buttons */}
          {!userLoggedIn ? (
            <div className="flex gap-4">
              <Link href="/register">
                <Button variant="outline">Register</Button>
              </Link>
              <Link href="/login">
                <Button className="bg-green-600 hover:bg-green-700">Login</Button>
              </Link>
            </div>
          ) : (
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              Logout
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
}

