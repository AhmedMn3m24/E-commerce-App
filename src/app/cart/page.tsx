import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductType } from "@/lib/interfaces/Category";
import { getLoggedCart } from "@/lib/services/cartservices";
import { CartResponseType, ItemType } from "@/lib/services/types/cartTypes";
import Image from "next/image";
import React from "react";
import CartRemoveBtn from "./cartRemoveBtn";
import ChangeCountBtn from "./ChangeCountBtn";

export default async function Cart() {
  async function hsndleuserCart(): Promise<CartResponseType> {
    const res = await getLoggedCart();
    return res;
  }

  const { numOfCartItems, products, totalCartPrice } = await hsndleuserCart();
  console.log(products, "products");
  return (
    <div className="px-2 md:px-0">
      {/* Total Price & Number of Items */}
      <h2 className="font-bold mt-5 text-center md:text-left">
        You Will Pay : {totalCartPrice} LE
      </h2>
      <h3 className="font-bold text-center md:text-left">
        Number Of Items : {numOfCartItems}
      </h3>

      {/* Header Row */}
      <div className="w-3/4 mx-auto hidden md:flex flex-row justify-between border-b py-2 px-2">
        <div className="md:w-1/4 flex flex-col items-center md:items-start">
          <h2 className="font-semibold ml-20">Product</h2>
        </div>

        <div className="md:w-1/4 flex flex-col items-center">
          <h2 className="font-semibold">Price</h2>
        </div>

        <div className="md:w-1/4 flex flex-col items-center">
          <h2 className="font-semibold">Count</h2>
        </div>

        <div className="md:w-1/4 flex flex-col items-center">
          <h2 className="font-semibold">Action</h2>
        </div>
      </div>

      <div className="w-full md:w-3/4 mx-auto mt-4">
        {products.map((product: ItemType) => (
          <div
            key={product._id}
            className="flex flex-col md:flex-row items-center justify-between border-b py-4 px-2 gap-4"
          >
            <div className="flex flex-col items-center md:w-1/4">
              <img
                src={product.product.imageCover}
                alt={product.product.title}
                className="max-w-[150px] max-h-32 object-cover"
              />
              <h3 className="text-center mt-2 font-bold">
                {product.product.title}
              </h3>
            </div>

            <div className="flex justify-center md:w-1/4">
              <p className="font-semibold">{product.price} LE</p>
            </div>

            <div className="flex justify-center md:w-1/4">
              <p className="font-semibold">x {product.count}</p>
            </div>

            <div className="flex flex-col items-center md:w-1/4 gap-4">
              <div className="flex items-center gap-1">
                <ChangeCountBtn
                  isIncrement
                  id={product.product.id}
                  newCount={product.count + 1} // هنا استخدم count
                />
                <Input
                  className="w-8 h-8 text-center rounded-lg p-0"
                  value={product.count}
                  readOnly
                />
                <ChangeCountBtn
                  id={product.product.id}
                  newCount={product.count - 1} // هنا كمان استخدم count
                />
              </div>
              <CartRemoveBtn id={product.product.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
