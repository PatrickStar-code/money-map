import React from "react";
import { DataTable } from "@/components/ui/datatable";
import { TransactionColumns } from "./_columns";
import AddTrasactionBtn from "@/components/addTrasactionBtn";
import { db } from "../_lib/prisma";

export default async function TransactionsPage() {
  const transactions = await db.transaction.findMany({});

  return (
    <div className=" p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Transactions</h1>
        <AddTrasactionBtn />
      </div>
      <DataTable columns={TransactionColumns} data={transactions} />
    </div>
  );
}
