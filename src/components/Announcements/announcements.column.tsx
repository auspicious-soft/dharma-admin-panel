import { ColumnDef } from "@tanstack/react-table";
import DataTableActions from "../tableData/DataTableActions";
import { AnnouncementType } from "./announcement.type";

export const announcementColumns: ColumnDef<AnnouncementType>[] = [
  {
    accessorKey: "date",
    header: "Date",
    enableSorting: true,
  },
  {
    accessorKey: "subject",
    header: "Subject",
    enableSorting: false,
  },
  {
    accessorKey: "text",
    header: "Text",
    enableSorting: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    enableSorting: true,
  },
  {
    header: "Action",
    cell: ({ row }) => (
      <DataTableActions
        onDelete={() => console.log("Delete announcement:", row.original.id)}
      />
    ),
  },
];