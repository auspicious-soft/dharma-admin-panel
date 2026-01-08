import { ColumnDef } from "@tanstack/react-table";
import { FileItem } from "./users.data";
import DataTableActions from "../tableData/DataTableActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UsersColumns = (activeTab: string): ColumnDef<FileItem>[] => {
  const columns: ColumnDef<FileItem>[] = [
        {
      header: "User",
      cell: ({ row }) => {
        const { name, avatar } = row.original;
        return (
          <div className="flex items-center gap-3">
            <Avatar className="h-5 w-5 rounded-full">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback >
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
             {name}
          </div>
        );
      },
    },
    { accessorKey: "email", header: "Email"},
    { accessorKey: "phone", header: "Phone",  enableSorting: false, },
    { accessorKey: "startDate", header: "Start Date" },
    { accessorKey: "channel", header: "Channel" },
    {
      header: "Action",
      cell: ({ row }) =>
        row.original.status === "blocked" || row.original.status === "deleted" ? (
          <span className="text-red-600 font-semibold capitalize">
            {row.original.status}
          </span>
        ) : (
          <DataTableActions viewPath={`/users/${row.original.id}`} />
        ),
    },
  ];

  // Only add End Date column if activeTab is blocked
  if (activeTab === "blocked") {
    columns.splice(4, 0, {
      accessorKey: "endDate",
      header: "End Date",
      cell: ({ row }) =>
        row.original.status === "blocked" || row.original.status === "deleted"
          ? row.original.endDate || "-"
          : null,
    });
  }

  return columns;
};
