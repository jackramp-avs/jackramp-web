import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { convertTimestampToDate, formatAddress } from "@/lib/utils";
import { Swap } from "@/types";

export type TransactionHistoryRow = Swap;

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
      id: "number",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="#"
        />
      ),
      cell: ({ row }) => <div className="w-12 py-2">{row.index + 1}</div>,
      enableSorting: false,
    },
    {
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="ID"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center truncate w-fit justify-between">
          <span className="mr-2">{formatAddress(row.original.id)}</span>
          <button
            onClick={() => copyToClipboard(row.original.id)}
            aria-label="Copy to clipboard"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <Copy size={16} />
          </button>
        </div>
      ),
    },
    {
      accessorKey: "blockNumber",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Block Number"
        />
      ),
      cell: ({ row }) => <div>{row.original.blockNumber}</div>,
    },
    {
      accessorKey: "blockTimestamp",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Timestamp"
        />
      ),
      cell: ({ row }) => <div>{convertTimestampToDate(parseInt(row.original.blockTimestamp))}</div>,
    },
    {
      accessorKey: "transactionHash",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Transaction Hash"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center truncate w-fit justify-between">
          <span className="mr-2">{formatAddress(row.original.transactionHash)}</span>
          <button
            onClick={() => copyToClipboard(row.original.transactionHash)}
            aria-label="Copy to clipboard"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <Copy size={16} />
          </button>
        </div>
      ),
    },
    {
      accessorKey: "requestedAmount",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Requested Amount"
        />
      ),
      cell: ({ row }) => <div>{row.original.requestedAmount}</div>,
    },
    {
      accessorKey: "requestedAmountRealWorld",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Real World Amount"
        />
      ),
      cell: ({ row }) => <div>{row.original.requestedAmountRealWorld}</div>,
    },
    {
      accessorKey: "channelAccount",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Channel Account"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center truncate w-fit justify-between">
          <span className="mr-2">{formatAddress(row.original.channelAccount)}</span>
          <button
            onClick={() => copyToClipboard(row.original.channelAccount)}
            aria-label="Copy to clipboard"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <Copy size={16} />
          </button>
        </div>
      ),
    },
    {
      accessorKey: "channelId",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Channel ID"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center truncate w-fit justify-between">
          <span className="mr-2">{formatAddress(row.original.channelId)}</span>
          <button
            onClick={() => copyToClipboard(row.original.channelId)}
            aria-label="Copy to clipboard"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <Copy size={16} />
          </button>
        </div>
      ),
    },
    {
      accessorKey: "user",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="User"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center truncate w-fit justify-between">
          <span className="mr-2">{formatAddress(row.original.user)}</span>
          <button
            onClick={() => copyToClipboard(row.original.user)}
            aria-label="Copy to clipboard"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <Copy size={16} />
          </button>
        </div>
      ),
    },
  ];
}