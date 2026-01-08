import { ColumnDef } from "@tanstack/react-table";
import DataTableActions from "@/components/tableData/DataTableActions";
import { ItemPurchased } from "./ItemPurchased.types";

type ColumnProps = {
  onView: (row: ItemPurchased) => void;
};

export const itemPurchasedColumns = ({
  onView,
}: ColumnProps): ColumnDef<ItemPurchased>[] => [
  { accessorKey: "order", header: "Order" },
  { accessorKey: "category", header: "Category" },
  { accessorKey: "itemPurchased", header: "Item Purchased" },
  { accessorKey: "type", header: "Type" },
  { accessorKey: "amountPaid", header: "Amount Paid" },
  { accessorKey: "purchasedOn", header: "Purchased On" },
  { accessorKey: "expiresOn", header: "Expires On" },
  {
    header: "Action",
    cell: ({ row }) => {
      const { type, cancelled } = row.original;

      // ✅ MANUAL → show actions
      if (type === "Manual") {
        return (
          <DataTableActions
            onEdit={() => onView(row.original)}
            onDelete={() => console.log("Delete", row.original.order)}
          />
        );
      }

      // ✅ PAID + CANCELLED → show text
      if (type === "Paid" && cancelled) {
        return <span className="text-red-500 font-medium">Cancelled</span>;
      }

      // ✅ PAID (not cancelled) → empty
      return null;
    },
  },
];
