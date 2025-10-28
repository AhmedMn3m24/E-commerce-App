// import {
//   NavigationMenu,

//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"
// import Link from "next/link"
// import { Heart, Search, ShoppingCart } from "lucide-react"   
// export default function Navbar() {
//   return (
//     <NavigationMenu className="bg-gray-100 w-full max-w-full p-4 flex justify-around ">
//   <NavigationMenuList className="bg--300 gap-10 text-dark ">
//     <NavigationMenuItem>
//     <Link className="font-bold" href={"/"}>Exclusive </Link>
//     </NavigationMenuItem>
//   </NavigationMenuList>
//  <NavigationMenuList className="w-full flex gap-10 mr-10 justify-content-around font-bold">
//     <NavigationMenuItem>
//     <Link href={"/"}>Home</Link>
//     </NavigationMenuItem>
//        <NavigationMenuItem>
//     <Link href={"/contact"}>Contact</Link>
//     </NavigationMenuItem>
//        <NavigationMenuItem>
//     <Link href={"/about"}>About</Link>
//     </NavigationMenuItem>
//         <NavigationMenuItem>
//     <Link href={"/sign"}>Sign Up</Link>
//     </NavigationMenuItem>
//   </NavigationMenuList>

// <NavigationMenuList className=" gap-3 mr-10">
//     <NavigationMenuItem>
//   <div className="relative mr-20">

//             <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-7" />

//             <input
//               type="search"
//               placeholder="What are you looking for?"
//               className="pr-9 pl-5 py-1 bg-gray-200 rounded-md outline-none"
//             />
//           </div>


//               </NavigationMenuItem>
//    <ShoppingCart className="mr-5" />
//        <Heart />

//   </NavigationMenuList>

// </NavigationMenu>
//   )
// }

// /////////////////////////////////////////////////////////////////////
//////////////////////navbar using responsive////////////////////////////

'use client';

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Heart, Menu, Navigation } from "lucide-react";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { Button } from "@/components/ui/button";
import logo from "@images/freshcart-logo.svg"
import Image from "next/image";
export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-gray-100">
      {/* Navbar */}
      <nav
        className="
        w-full shadow p-4
        flex flex-col md:flex-row md:items-center 
        justify-between
      "
      >
        <div className="flex items-center justify-between w-full md:w-auto font-bold">
          <Link href="/">
            <Image src={logo} alt="logo" width={120} height={100} />
          </Link>

          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Links in the center */}
        <ul
          className={`flex flex-col md:flex-row items-center justify-center 
        font-bold gap-4 md:gap-10 mt-4 md:mt-0 text-black 
        w-full md:w-auto ${open ? "block" : "hidden md:flex"}`}
        >
          <li><Link href="/">Home</Link></li>
          <li><Link href="/wishlist">Wishlist</Link></li>
          <li><Link href="/contact">Contact</Link></li>

        </ul>

        {/* Right side icons + Auth buttons */}
        <div className="flex items-center gap-6 mt-4 md:mt-0 justify-end w-full md:w-auto">
          {/* Icons */}
          <div className="flex items-center gap-4">
            <ShoppingCart className="cursor-pointer text-gray-700" />
            <Heart className="cursor-pointer text-gray-700" />
          </div>

          {/* Auth Links */}
          <NavigationMenu>
            <Link className="font-bold" href="/register">Register</Link>
          </NavigationMenu>
          <NavigationMenu>
            <Link className="font-bold" href="/login">Login</Link>
          </NavigationMenu>

          <NavigationMenu>
            <Button className="cursor-pointer" variant="default">Logout</Button>
          </NavigationMenu>
        </div>
      </nav>
    </div>
  );







  // const [open, setOpen] = useState(false);

  // return (
  //   <div className="w-full bg-gray-100">
  //     {/* Navbar */}
  //     <nav
  //       className="
  //       w-full
  //         shadow 
  //         p-4 
  //         flex flex-col md:flex-row md:items-center 
  //         justify-between
  //       "
  //     >
  //       {/* Logo + Menu Button */}
  //       <div className="flex items-center justify-between font-bold w-full md:w-auto">
  //         <Image src={logo} alt="logo" width={100} height={100} className="w-25" />

  //         <button
  //           className="md:hidden p-2 text-gray-600"
  //           onClick={() => setOpen(!open)}
  //         >
  //           <Menu className="w-6 h-6" />
  //         </button>
  //       </div>

  //       {/* Links */}
  //       <ul
  //         className={`flex flex-col font-bold md:flex-row gap-4 md:gap-10 mt-4 md:mt-0  text-gray-700 ${open ? "block" : "hidden md:flex"
  //           }`}
  //       >
  //         <li><Link href="/">Home</Link></li>
  //         <li><Link href="/contact">Contact</Link></li>
  //         <li><Link href="/about">About</Link></li>
  //       </ul>

  //       <div className="flex items-center gap-12 mt-4 mr-20 md:mt-0 ">

  //         <ShoppingCart className="cursor-pointer text-gray-700" />
  //         <Heart className="cursor-pointer text-gray-700" />
  //       </div>

  //       <NavigationMenu>
  //         <Link className="font-bold" href="/regstier">Regstier</Link>
  //       </NavigationMenu>
  //       <NavigationMenu>
  //         <Link className="font-bold" href="/login">Login</Link>
  //       </NavigationMenu>

  //       <NavigationMenu>

  //         <Button className="cursor-pointer" variant="default">Logout</Button>
  //       </NavigationMenu>


  //     </nav>


  //   </div >
  // );
}
