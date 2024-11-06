"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "./type_badge";
import { Button } from "@/components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";
import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_METHOD_LABELS,
} from "@/app/_constants/trasactions";

export const TransactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: Transaction } }) => {
      return <TransactionTypeBadge transaction={Transaction} />;
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: Transaction } }) => {
      return TRANSACTION_CATEGORY_LABELS[Transaction.category];
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
    cell: ({ row: { original: Transaction } }) => {
      return TRANSACTION_PAYMENT_METHOD_LABELS[Transaction.paymentMethod];
    },
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: Transaction } }) => {
      return new Date(Transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    },
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: Transaction } }) => {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(Transaction.amount));
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => {
      return (
        <div className=" space-x-1">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="text-primary-foreground"
          >
            <PencilIcon />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="text-primary-foreground"
          >
            <TrashIcon />
          </Button>
        </div>
      );
    },
  },
];
