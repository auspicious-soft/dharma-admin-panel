import CertificatesTable from "@/components/CertificatesPDUs/CertificatesTab/CertificatesTable";
import TemplatesDialog from "@/components/CertificatesPDUs/TemplatesTab/TemplatesDialog";
import TemplatesTable from "@/components/CertificatesPDUs/TemplatesTab/TemplatesTable";
import { ReusableFilterTabs } from "@/components/reusableComponents/ReusableFilterTabs";
import TableSearch from "@/components/reusableComponents/TableSearch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SwitchOrignial } from "@/components/ui/switchorignial";
import React, { useState } from "react";
import { ItemPurchased } from "@/components/CertificatesPDUs/TemplatesTab/templates.type";

const CertificatesPDUs = () => {
  const [activeTab, setActiveTab] = useState("certificates");

  // dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [selectedRow, setSelectedRow] = useState<ItemPurchased | null>(null);

  const handleCreate = () => {
    setMode("add");
    setSelectedRow(null);
    setDialogOpen(true);
  };

  const handleEdit = (row: ItemPurchased) => {
    setMode("edit");
    setSelectedRow(row);
    setDialogOpen(true);
  };
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-black text-lg md:text-2xl font-bold md:leading-[46px]">
        Certificates
      </h2>

      <div className="flex justify-between flex-col lg:flex-row gap-4 items-center">
        <ReusableFilterTabs
          value={activeTab}
          defaultValue="certificates"
          onValueChange={setActiveTab}
          tabs={[
            { value: "certificates", label: "Certificates" },
            { value: "templates", label: "Templates" },
          ]}
        />

        <div className="flex flex-wrap flex-1 w-full gap-2 lg:gap-4 lg:justify-end">
          <TableSearch />
          {activeTab === "certificates" ? (
            <>
              <Button
                variant="secondary"
                className="h-[44px] flex items-center gap-1 md:gap-2"
              >
                Export CSV
              </Button>
              <div className="flex items-center space-x-2">
                <SwitchOrignial />
                <Label className="text-paragraph">Send Email</Label>
              </div>
            </>
          ) : (
            <Button
              variant="secondary"
              className="h-[44px] flex items-center gap-1 md:gap-2"
              onClick={handleCreate}
            >
              Create New Template
            </Button>
          )}
        </div>
      </div>

      <div>
        {activeTab === "certificates" && <CertificatesTable />}
        {activeTab === "templates" && <TemplatesTable onEdit={handleEdit} />}
      </div>
      <TemplatesDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        mode={mode}
      />
    </div>
  );
};

export default CertificatesPDUs;
