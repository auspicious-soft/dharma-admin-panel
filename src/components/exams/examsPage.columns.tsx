import { ColumnDef } from "@tanstack/react-table";
import { FileItem } from "./examsPage.data";
import DataTableActions from "../tableData/DataTableActions";
import { Switch } from "../ui/switch";

type ColumnProps = {
  onEdit: (row: FileItem) => void;
};

export const ExamsPageColumns = (
  activeTab: string,
  { onEdit }: ColumnProps
): ColumnDef<FileItem>[] => {
  return [
    {
      accessorKey: "id",
      header: "Order",
      enableSorting: false,
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "totalQuestions",
      header: "Total Number of Questions",
      enableSorting: false,
    },
    {
      accessorKey: "plan",
      header: "Premium",
    },
    {
      accessorKey: "duration",
      header: "Duration",
      enableSorting: false,
    },
    {
      header: "Action",
      cell: ({ row }) => (
        <div className="flex gap-2">
        
        <DataTableActions
          onEdit={() => onEdit(row.original)}   
          onDelete={() => console.log("Delete:", row.original.id)}
        />
        <Switch id="airplane-mode" />
        </div>
      ),
    },
  ];
};
