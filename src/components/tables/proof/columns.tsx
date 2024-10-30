import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { formatNullableAddress, formatNullableData, formatNullableTimestamp } from "@/lib/utils";
import { TaskResponded } from "@/types";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success('Copied to clipboard!')
  }).catch(err => {
    toast.error(`Failed to copy to clipboard! ${err}`)
  });
};

export function columns(): ColumnDef<TaskResponded>[] {
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
      accessorKey: "channelId",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Channel ID"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center truncate w-fit justify-between">
          <span className="mr-2">{formatNullableAddress(row.original.channelId).toUpperCase()}</span>
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
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Created At"
        />
      ),
      cell: ({ row }) => <div>{formatNullableTimestamp(row.original.createdAt)}</div>,
    },
    {
      accessorKey: "respondedAt",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Responded At"
        />
      ),
      cell: ({ row }) => <div>{formatNullableTimestamp(row.original.respondedAt)}</div>,
    },
  ];
}
