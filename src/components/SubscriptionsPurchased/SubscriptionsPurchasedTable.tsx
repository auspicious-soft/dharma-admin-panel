import { useState } from "react";
import { DataTable } from "@/components/tableData/DataTable";
import { subscriptionsPurchaseddata } from "./subscriptionsPurchased.data";
import { subscriptionsPurchasedcolumns } from "./subscriptionsPurchased.columns";
import { SubscriptionsPurchasedType } from "./subscriptionsPurchased.type";
import EditDialog from "./EditDialog";

const SubscriptionsPurchasedTable = () => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<SubscriptionsPurchasedType | null>(null);
  const [mode, setMode] = useState<"create" | "edit">("create");

  return (
    <>
        <DataTable
          columns={subscriptionsPurchasedcolumns({
            onView: (row) => {
              setMode("edit");      
              setSelectedFile(row); 
              setOpen(true);
            },
          })}
          data={subscriptionsPurchaseddata}
        />

      {/* DIALOG */}
      <EditDialog
        open={open}
        onOpenChange={setOpen}
        file={selectedFile}
        mode={mode}
      />
    </>
  );
};

export default SubscriptionsPurchasedTable;
