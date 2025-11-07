"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { ChangeCount } from "./cartaction";

export default function ChangeCountBtn({
  isIncrement = false,
  id,
  newCount,
}: {
  id: string;
  newCount: number;
  isIncrement?: boolean;
}) {
  async function handleChangeCount() {
    await ChangeCount(id, newCount);
  }

  {
    return (
      <Button onClick={handleChangeCount} className="cursor-pointer px-2">
        {isIncrement ? "+" : "-"}
      </Button>
    );
  }
}
