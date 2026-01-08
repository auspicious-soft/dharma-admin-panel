import { useState } from "react";
import { DataTable } from "@/components/tableData/DataTable";
import { itemPurchasedColumns } from "./ItemPurchased.columns";
import { itemPurchasedData } from "./ItemPurchased.data";
import AddAccessDialog from "./AddAccessDialog";
import { ItemPurchased } from "./ItemPurchased.types";
import { Button } from "@/components/ui/button";

const ItemPurchasedTable = () => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<ItemPurchased | null>(null);
  const [mode, setMode] = useState<"create" | "edit">("create");

  return (
    <>
      <div className="flex flex-col gap-4 mt-2">
        {/* HEADER */}
        <div className="flex justify-between flex-wrap gap-2 md:gap-4">
          <h2 className="text-Black text-lg font-bold capitalize">
            Access
          </h2>

          <Button
          variant="secondary"
          className="h-[44px]"
            onClick={() => {
              setMode("create");
              setSelectedFile(null);
              setOpen(true);
            }}
          >
           Add Access Manually
          </Button>
        </div>

        {/* TABLE */}
        <DataTable
          columns={itemPurchasedColumns({
            onView: (row) => {
              setMode("edit");      
              setSelectedFile(row); 
              setOpen(true);
            },
          })}
          data={itemPurchasedData}
        />
      </div>

      {/* DIALOG */}
      <AddAccessDialog
        open={open}
        onOpenChange={setOpen}
        file={selectedFile}
        mode={mode}
      />
    </>
  );
};

export default ItemPurchasedTable;
