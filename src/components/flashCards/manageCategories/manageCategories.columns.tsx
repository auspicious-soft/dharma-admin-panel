import { ColumnDef } from "@tanstack/react-table";
import { FileItem } from "./manageCategories.data";
import DataTableActions from "@/components/tableData/DataTableActions";

type ColumnProps = {
  onEdit: (row: FileItem) => void;
};

export const ManageCategoriesColumns = (
  activeTab: string,
  { onEdit }: ColumnProps
): ColumnDef<FileItem>[] => {
  return [
    {
      accessorKey: "nameCategory",
      header: "Name of Category",
    },
    {
      accessorKey: "numberFlashCards",
      header: "Total Number of Flash Cards",
      enableSorting: false,
    },
    {
      accessorKey: "price", 
      header: "Price",
      enableSorting: false,
      cell: ({ getValue }) => {
        const price = getValue<number>();
        return `$${price}`;
      },
    },
    {
      header: "Action",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <DataTableActions
            onEdit={() => onEdit(row.original)}
            onDelete={() => console.log("Delete:", row.original.id)}
          />
        </div>
      ),
    },
  ];
};
