import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { formatAddress } from "@/lib/utils";
import { LiquidityContract } from "@/types";

export type TransactionHistoryRow = LiquidityContract;

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success('Copied to clipboard!')
  }).catch(err => {
    toast.error(`Failed to copy to clipboard! ${err}`)
  });
};

export function columns(): ColumnDef<TransactionHistoryRow>[] {
  return [
    {
      accessorKey: "number",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="#"
        />
      ),
      cell: ({ row }) => (
        <div className="text-sm py-2">
          {row.index + 1}
        </div>
      ),
    },
    {
      accessorKey: "token",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Token"
        />
      ),
      cell: ({ row }) => {
        return (
          <div className="text-sm">
            {row.original.token}
          </div>
        );
      },
    },
    {
      accessorKey: "platform",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Platform"
        />
      ),
      cell: ({ row }) => (
        <div className="text-sm">
          {row.original.platform}
        </div>
      ),
    },
    {
      accessorKey: "depositor",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Depositor"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center truncate w-fit justify-between">
          <span className="mr-2">{formatAddress(row.original.depositor)}</span>
          <button
            onClick={() => copyToClipboard(row.original.depositor)}
            aria-label="Copy to clipboard"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <Copy size={16} />
          </button>
        </div>
      ),
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Amount"
        />
      ),
      cell: ({ row }) => (
        <div className="text-sm">
          {row.original.amount} jackUSD
        </div>
      ),
    },
    {
      accessorKey: "conversionRate",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Conversion Rate"
        />
      ),
      cell: ({ row }) => (
        <div className="text-sm">
          {row.original.conversionRate / 1000} M0
        </div>
      ),
    },
  ];
}
