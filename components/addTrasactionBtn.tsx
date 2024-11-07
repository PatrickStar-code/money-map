"use client";
import { ArrowDownUpIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import UpsertTrasactionDialog from "./upsertTrasactionDialog";

export default function AddTrasactionBtn() {
  const [dialogOpen, setDialogOpen] = useState(false);
  console.log(dialogOpen);
  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogOpen(true)}
      >
        Add Transaction <ArrowDownUpIcon />
      </Button>
      <UpsertTrasactionDialog isOpen={dialogOpen} setIsOpen={setDialogOpen} />
    </>
  );
}
