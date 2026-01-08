"use client";

import { useState } from "react";
import { DataTable } from "@/components/tableData/DataTable";
import { CertificatesColumns } from "./certificates.columns";
import { certificatesData } from "./certificates.data";
import CertificatePreviewDialog from "./CertificatePreviewDialog";
import { ItemPurchased } from "./certificates.types";

const CertificatesTable = () => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<ItemPurchased | null>(null);

  const handleOnView = (row: ItemPurchased) => {
    setSelectedRow(row);
    setOpen(true);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <DataTable
          data={certificatesData}
          columns={CertificatesColumns({
            onView: handleOnView,
          })}
        />
      </div>

      {/* Certificate Preview Dialog */}
      <CertificatePreviewDialog
        open={open}
        onOpenChange={setOpen}
        imageUrl={selectedRow?.certificateImage}
      />
    </>
  );
};

export default CertificatesTable;
