import { ColumnDef } from "@tanstack/react-table";
import { FileItem } from "./uploadFiles.data";
import DataTableActions from "../tableData/DataTableActions";
import { Link } from "iconoir-react";
import { toast } from "sonner";

export const uploadFilesColumns = (
  onView: (file: FileItem) => void
): ColumnDef<FileItem>[] => [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "category",
    header: "Type",
  },
  {
    accessorKey: "course",
    header: "Course",
  },
  {
    accessorKey: "link",
    header: "Link",
    cell: ({ row }) => {
      const link = row.original.link;

      const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(link);
          toast.success("Link copied to clipboard");
        } catch {
          toast.error("Failed to copy link");
        }
      };

      return (
        <div className="flex items-center gap-2 text-xs text-primary_blue">
          
         <button
            onClick={handleCopy}
            className="text-primary_blue hover:text-primary_heading text-[11px]"
          >
          <Link className="w-4 h-4 flex-shrink-0" />
          </button>
          <span
            className="truncate max-w-[180px] select-all"
            title={link}
          >
            {link}
          </span>

        </div>
      );
    },
    enableSorting: false,
  },
  {
    header: "Action",
    cell: ({ row }) => (
      <DataTableActions
        onView={() => onView(row.original)}
        onDelete={() => console.log("Delete file:", row.original.id)}
      />
    ),
  },
];
