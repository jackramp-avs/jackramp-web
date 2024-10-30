import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { convertTimestampToDate, formatAddress } from "@/lib/utils";
import { Withdraw } from "@/types";

export type TransactionHistoryRow = Withdraw;

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success('Copied to clipboard!');
  }).catch(err => {
    toast.error(`Failed to copy to clipboard! ${err}`);
  });
};

export function columns(): ColumnDef<TransactionHistoryRow>[] {
  return [
    {
      id: "number",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="#" />
      ),
      cell: ({ row }) => <div className="w-12 py-2">{row.index + 1}</div>,
      enableSorting: false,
    },
    {
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ID" />
      ),
      cell: ({ row }) => {
        const id = row.original.id;
        if (!id) return "-";
        return (
          <div className="flex items-center gap-2">
            <span>{formatAddress(id)}</span>
            <button
              onClick={() => copyToClipboard(id)}
              aria-label="Copy to clipboard"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        );
      },
    },
    {
      accessorKey: "blockNumber",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Block Number" />
      ),
      cell: ({ row }) => row.original.blockNumber || "-",
    },
    {
      accessorKey: "blockTimestamp",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Timestamp" />
      ),
      cell: ({ row }) => {
        const timestamp = row.original.blockTimestamp;
        if (!timestamp) return "-";
        return convertTimestampToDate(parseInt(timestamp));
      },
    },
    {
      accessorKey: "transactionHash",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Transaction Hash" />
      ),
      cell: ({ row }) => {
        const hash = row.original.transactionHash;
        if (!hash) return "-";
        return (
          <div className="flex items-center gap-2">
            <span>{formatAddress(hash)}</span>
            <button
              onClick={() => copyToClipboard(hash)}
              aria-label="Copy to clipboard" 
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        );
      },
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Amount" />
      ),
      cell: ({ row }) => row.original.amount || "-",
    },
    {
      accessorKey: "user",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="User" />
      ),
      cell: ({ row }) => {
        const user = row.original.user;
        if (!user) return "-";
        return (
          <div className="flex items-center gap-2">
            <span>{formatAddress(user)}</span>
            <button
              onClick={() => copyToClipboard(user)}
              aria-label="Copy to clipboard"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        );
      },
    },
  ];
}