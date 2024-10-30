import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./ColumnHeader";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { formatNullableAddress, formatNullableData, formatNullableTimestamp } from "@/lib/utils";

interface TaskResponded {
  receiver: string;
  requestOfframpId: string;
  respondedAt: string;
  status: string;
  taskCreatedBlock: number;
  taskIndex: number;
  transactionHash: string;
  transactionId: string;
  createdAt: string;
  channelId: string;
}

interface Operator {
  id: string;
  address: string;
  lastActiveTimestamp: string;
  tasksResponded: TaskResponded;
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success('Copied to clipboard!')
  }).catch(err => {
    toast.error(`Failed to copy to clipboard! ${err}`)
  });
};

export function columns(): ColumnDef<Operator>[] {
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
      accessorKey: "receiver",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Receiver"
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center truncate w-fit justify-between">
          <span className="mr-2">{formatNullableAddress(row.original.tasksResponded.receiver)}</span>
          {row.original.tasksResponded.receiver && (
            <button
              onClick={() => copyToClipboard(row.original.tasksResponded.receiver)}
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
      cell: ({ row }) => <div>{formatNullableData(row.original.tasksResponded.status)}</div>,
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
          <span className="mr-2">{formatNullableAddress(row.original.tasksResponded.transactionHash)}</span>
          {row.original.tasksResponded.transactionHash && (
            <button
              onClick={() => copyToClipboard(row.original.tasksResponded.transactionHash)}
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
      accessorKey: "lastActiveTimestamp",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Last Active Timestamp"
        />
      ),
      cell: ({ row }) => <div>{formatNullableTimestamp(row.original.lastActiveTimestamp)}</div>,
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
          <span className="mr-2">{formatNullableAddress(row.original.tasksResponded.channelId)}</span>
          {row.original.tasksResponded.channelId && (
            <button
              onClick={() => copyToClipboard(row.original.tasksResponded.channelId)}
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
      cell: ({ row }) => <div>{formatNullableTimestamp(row.original.tasksResponded.createdAt)}</div>,
    },
    {
      accessorKey: "respondedAt",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Responded At"
        />
      ),
      cell: ({ row }) => <div>{formatNullableTimestamp(row.original.tasksResponded.respondedAt)}</div>,
    },
  ];
}
