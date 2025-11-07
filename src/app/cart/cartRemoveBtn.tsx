"use client";
import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
import { RemoveProductCart } from "./cartaction";
import { toast } from "react-hot-toast";
import { CartContext } from "../_Component/SessionProvider/cartContext";

export default function CartRemoveBtn({ id }: { id: string }) {
  const { updateCartCount } = useContext(CartContext);

  async function RemoveItem() {
    const Output = await RemoveProductCart(id);
    console.log("Output", Output);

    if (Output === null) {
      toast.error("please try again");
    } else {
      toast.success("item removed successfully");
      updateCartCount(Output);
    }
  }
  return (
    <Button
      onClick={RemoveItem}
      variant="destructive"
      className="cursor-pointer w-[100px]"
    >
      Remove
    </Button>
  );
}
