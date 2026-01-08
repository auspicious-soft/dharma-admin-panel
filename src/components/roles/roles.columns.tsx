import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import DataTableActions from "../tableData/DataTableActions";

export type RoleUser = {
  id: string;
  name: string;
  role: string;
  access: string[];
  status: "Active" | "Inactive";
};

export const rolesColumns: ColumnDef<RoleUser>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "role", header: "Role" },
  {
    accessorKey: "access",
    header: "Access",
    cell: ({ row }) => (
      <div className="flex gap-[6px] flex-wrap">
        {row.original.access.map((item, index) => (
          <Badge key={index} variant="secondary"
          className="pr-2 py-[4px] !bg-paragraph rounded-[5px] !text-white text-xs font-light"
          >
            {item}
          </Badge>
        ))}
      </div>
    ),
     enableSorting: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`font-medium ${
          row.original.status === "Active"
            ? "text-paragraph"
            : "text-paragraph"
        }`}
      >
        {row.original.status}
      </span>
    ),
    enableSorting: false,
  },
  {
    header: "Action",
    cell: ({ row }) => (
      <DataTableActions
        viewPath={`/roles/${row.original.id}`}
        onDelete={() => console.log("Delete user:", row.original.id)}
      />
    ),
  },
];
