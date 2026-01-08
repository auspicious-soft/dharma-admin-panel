import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ItemPurchased } from "./certificates.types";

type ColumnProps = {
  onView: (row: ItemPurchased) => void;
  onIssue?: (row: ItemPurchased) => void;
};

export const CertificatesColumns = ({
  onView,
  onIssue,
}: ColumnProps): ColumnDef<ItemPurchased>[] => [
  { accessorKey: "CompON", header: "Comp. Date", },
  { accessorKey: "userName", header: "User Name", enableSorting: false, },
  { accessorKey: "email", header: "Email", enableSorting: false, },
  { accessorKey: "course", header: "Course/Program", enableSorting: false, },
  { accessorKey: "status", header: "Status", enableSorting: false, },
  {
    header: "Action",
    cell: ({ row }) => {
      const { status } = row.original;

      if (status === "Sent") {
        return (
          <Button
            variant="link"
            className="px-0 text-primary_blue"
            onClick={() => onView(row.original)}
          >
            View
          </Button>
        );
      }

      if (status === "To be Issued") {
        return (
          <Button
            variant="link"
            className="px-0 text-primary_blue"
            onClick={() => onIssue?.(row.original)}
          >
            Issue Certificate
          </Button>
        );
      }

      return null;
    },
  },
];
