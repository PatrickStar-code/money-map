import AddTrasactionBtn from "@/components/addTrasactionBtn";
import { db } from "../_lib/prisma";
import { DataTable } from "@/components/ui/datatable";
import { TransactionColumns } from "./_columns";

export default async function TransactionsPage() {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      {/* TÍTULO E BOTÃO */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTrasactionBtn />
      </div>
      <DataTable columns={TransactionColumns} data={transactions} />
    </div>
  );
}
