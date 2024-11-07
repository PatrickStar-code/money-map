"use client";
import { Button } from "@/components/ui/button";
import UpsertTrasactionDialog from "@/components/upsertTrasactionDialog";
import { Transaction } from "@prisma/client";
import { PencilIcon } from "lucide-react";
import React, { useState } from "react";

interface EditTrasactionBtnProps {
  transaction: Transaction;
}

export default function EditTrasactionBtn({
  transaction,
}: EditTrasactionBtnProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button
        variant={"ghost"}
        size={"icon"}
        className="text-primary-foreground"
        onClick={() => setDialogOpen(true)}
      >
        <PencilIcon />
      </Button>
      <UpsertTrasactionDialog
        isOpen={dialogOpen}
        setIsOpen={setDialogOpen}
        defaultValues={{ ...transaction, amount: Number(transaction.amount) }}
        transactionId={transaction.id}
      />
    </>
  );
}
