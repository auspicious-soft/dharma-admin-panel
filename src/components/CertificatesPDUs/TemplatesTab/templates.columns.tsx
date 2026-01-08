import { ColumnDef } from "@tanstack/react-table";
import { ItemPurchased } from "./templates.type";
import DataTableActions from "@/components/tableData/DataTableActions";

type ColumnProps = {
  onEdit: (row: ItemPurchased) => void;
};

export const TemplatesColumns = ({
  onEdit,
}: ColumnProps): ColumnDef<ItemPurchased>[] => [
  { accessorKey: "templateName", header: "Template Name", enableSorting: false, },
  { accessorKey: "course", header: "Course/Program", enableSorting: false, },
  { accessorKey: "delivery", header: "Delivery Format", enableSorting: false, },
  { accessorKey: "status", header: "Status", enableSorting: false, },
  {
    header: "Action",
    cell: ({ row }) => (
      <DataTableActions
        onEdit={() => onEdit(row.original)}
        onDelete={() => console.log("Delete file:", row.original.id)}
      />
    ),
  },
];
