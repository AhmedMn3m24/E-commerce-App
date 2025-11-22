"use client";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { ChangeCount } from "./cartaction";
import toast from "react-hot-toast";
import { CartContext } from "@/Context/CartContext";

type Props = {
  id: string;
  newCount: number;
  isIncrement?: boolean;
};

export default function ChangeCountBtn({
  id,
  newCount,
  isIncrement = false,
}: Props) {
  const { updateCartCount } = useContext(CartContext);

  async function handleChangeCount() {
    const result = await ChangeCount(id, newCount);
    if (result === null) {
      toast.error("Please try again later");
    } else {
      toast.success(`Count changed: ${newCount}`);
      updateCartCount(result);
    }
  }

  return (
    <Button
      onClick={handleChangeCount}
      disabled={newCount === 0}
      className="cursor-pointer px-2"
    >
      {isIncrement ? "+" : "-"}
    </Button>
  );
}
