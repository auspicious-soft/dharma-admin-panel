import { ColumnDef } from "@tanstack/react-table";
import { TicketsType } from "./tickets.type";
import { Button } from "../ui/button";

export const TicketsColumns: ColumnDef<TicketsType>[] = [
  {
    accessorKey: "date",
    header: "Date",
    enableSorting: true,
  },
    {
    accessorKey: "reportedBy",
    header: "Reported By",
    enableSorting: true,
  },
      {
    accessorKey: "email",
    header: "Email",
    enableSorting: false,
  },
  {
    accessorKey: "category",
    header: "Category",
    enableSorting: true,
  },
{
  accessorKey: "comments",
  header: "Comments",
  enableSorting: true,
  cell: ({ row }) => (
    <Button
    className="text-primary_blue"
      variant="link"
      onClick={() => {
        console.log("Comments:", row.original.comments);
        // open modal / dialog here
      }}
    >
     {row.original.comments}
    </Button>
  ),
},
  {
    accessorKey: "status",
    header: "Status",
    enableSorting: false,
  },
  {
    header: "Action", 
    cell: ({ row }) => (
      <Button
     className="h-[34px] rounded-xl !px-4 !py-2"
      onClick={() => {
        console.log("Action:", row.original.comments);
        // open modal / dialog here
      }}
    >
     Resolve
    </Button>
    ),
  },
];