import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { OffRamps } from "@/types";
import { formatNullableAddress, formatNullableData, formatNullableTimestamp } from "@/lib/utils";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success('Copied to clipboard!')
  }).catch(err => {
    toast.error(`Failed to copy to clipboard! ${err}`)
  });
};

export function columns(): ColumnDef<OffRamps>[] {
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
          <span className="mr-2">{formatNullableAddress(row.original.id)}</span>
          {row.original.id && (
            <button
              onClick={() => copyToClipboard(row.original.id)}
              aria-label="Copy to clipboard"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Copy size={16} />
            </button>
          )}
        </div>
      ),
    },
    {
      accessorKey: "blockTimestamp",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Block Timestamp"
        />
      ),
      cell: ({ row }) => <div>{formatNullableTimestamp(row.original.blockTimestamp)}</div>,
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
          <span className="mr-2">{formatNullableAddress(row.original.user)}</span>
          {row.original.user && (
            <button
              onClick={() => copyToClipboard(row.original.user)}
              aria-label="Copy to clipboard"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Copy size={16} />
            </button>
          )}
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Status"
        />
      ),
      cell: ({ row }) => <div>{formatNullableData(row.original.status)}</div>,
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
          <span className="mr-2">{formatNullableAddress(row.original.transactionHash)}</span>
          {row.original.transactionHash && (
            <button
              onClick={() => copyToClipboard(row.original.transactionHash)}
              aria-label="Copy to clipboard"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Copy size={16} />
            </button>
          )}
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
      cell: ({ row }) => <div>{formatNullableData(row.original.requestedAmount)}</div>,
    },
    {
      accessorKey: "requestedAmountRealWorld",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Real World Amount"
        />
      ),
      cell: ({ row }) => <div>{formatNullableData(row.original.requestedAmountRealWorld)}</div>,
    },
    {
      accessorKey: "blockNumber",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Block Number"
        />
      ),
      cell: ({ row }) => <div>{formatNullableData(row.original.blockNumber)}</div>,
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
          <span className="mr-2">{formatNullableAddress(row.original.channelAccount)}</span>
          {row.original.channelAccount && (
            <button
              onClick={() => copyToClipboard(row.original.channelAccount)}
              aria-label="Copy to clipboard"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Copy size={16} />
            </button>
          )}
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
          <span className="mr-2">{formatNullableAddress(row.original.channelId)}</span>
          {row.original.channelId && (
            <button
              onClick={() => copyToClipboard(row.original.channelId)}
              aria-label="Copy to clipboard"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Copy size={16} />
            </button>
          )}
        </div>
      ),
    },
    {
      accessorKey: "fillBlockNumber",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Fill Block Number"
        />
      ),
      cell: ({ row }) => <div>{formatNullableData(row.original.fillBlockNumber)}</div>,
    },
    {
      accessorKey: "fillBlockTimestamp",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Fill Block Timestamp"
        />
      ),
      cell: ({ row }) => <div>{formatNullableTimestamp(row.original.fillBlockTimestamp)}</div>,
    },
    {
      accessorKey: "fillTransactionHash",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Fill Transaction Hash"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center truncate w-fit justify-between">
          <span className="mr-2">{formatNullableAddress(row.original.fillTransactionHash)}</span>
          {row.original.fillTransactionHash && (
            <button
              onClick={() => copyToClipboard(row.original.fillTransactionHash)}
              aria-label="Copy to clipboard"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Copy size={16} />
            </button>
          )}
        </div>
      ),
    },
    {
      accessorKey: "proof",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Proof"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center truncate w-fit justify-between">
          <span className="mr-2">{formatNullableAddress(row.original.proof)}</span>
          {row.original.proof && (
            <button
              onClick={() => copyToClipboard(row.original.proof)}
              aria-label="Copy to clipboard"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Copy size={16} />
            </button>
          )}
        </div>
      ),
    },
    {
      accessorKey: "receiver",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Receiver"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center truncate w-fit justify-between">
          <span className="mr-2">{formatNullableAddress(row.original.receiver)}</span>
          {row.original.receiver && (
            <button
              onClick={() => copyToClipboard(row.original.receiver)}
              aria-label="Copy to clipboard"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Copy size={16} />
            </button>
          )}
        </div>
      ),
    },
    {
      accessorKey: "reclaimProof",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Reclaim Proof"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center truncate w-fit justify-between">
          <span className="mr-2">{formatNullableAddress(row.original.reclaimProof)}</span>
          {row.original.reclaimProof && (
            <button
              onClick={() => copyToClipboard(row.original.reclaimProof)}
              aria-label="Copy to clipboard"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Copy size={16} />
            </button>
          )}
        </div>
      ),
    },
  ];
}