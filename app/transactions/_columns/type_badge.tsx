import { Badge } from "@/components/ui/badge";
import { Transaction } from "@prisma/client";
import { CircleIcon } from "lucide-react";
import React from "react";
interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

export default function TransactionTypeBadge({
  transaction,
}: TransactionTypeBadgeProps) {
  if (transaction.type === "DEPOSIT") {
    return (
      <Badge className="bg-muted text-primary hover:bg-muted font-bold">
        <CircleIcon className="fill-muted mr-2" size={12} />
        Deposito
      </Badge>
    );
  } else if (transaction.type === "EXPENSE") {
    return (
      <Badge className="font-bold text-danger bg-danger bg-opacity-10">
        <CircleIcon className="fill-danger mr-2" size={12} />
        Despesa
      </Badge>
    );
  } else {
    return (
      <Badge className="bg-white text-white hover:bg-mwhite font-bold bg-opacity-10">
        <CircleIcon className="fill-white mr-2" size={12} />
        Investimento{" "}
      </Badge>
    );
  }
}
