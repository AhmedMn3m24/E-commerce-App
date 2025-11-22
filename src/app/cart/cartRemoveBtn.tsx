"use client";

import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
import { RemoveProductCart } from "./cartaction";
import toast from "react-hot-toast";
import { CartContext } from "@/Context/CartContext";

export default function CartRemoveBtn({ id }: { id: string }) {
  const { updateCartCount } = useContext(CartContext);

  async function handleRemoveItem() {
    const output = await RemoveProductCart(id);

    if (output == null) {
      toast.error("Couldn't remove item");
    } else {
      toast.success("Product removed successfully");
      updateCartCount(output);
    }
  }

  return (
    <Button
      onClick={handleRemoveItem}
      variant="destructive"
      className="w-[90px] py-1 rounded-lg cursor-pointer"
    >
      Remove
    </Button>
  );
}
