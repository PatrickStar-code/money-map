import React from "react";
import prisma from "../_lib/prisma";
import { Button } from "@/components/ui/button";
import { ArrowDownUpIcon } from "lucide-react";
import { DataTable } from "@/components/ui/datatable";
import { TransactionColumns } from "./_columns";

export default async function TransactionsPage() {
  const transaction = await prisma.transaction.findMany({});

  return (
    <div className=" p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Transactions</h1>
        <Button className="rounded-full font-bold">
          Add Transaction <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={TransactionColumns} data={transaction} />
    </div>
  );
}
