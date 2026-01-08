"use client";

import { DataTable } from "@/components/tableData/DataTable";
import { TemplatesColumns } from "./templates.columns";
import { templatesData } from "./templates.data";
import { ItemPurchased } from "./templates.type";

type TemplatesTableProps = {
  onEdit: (row: ItemPurchased) => void;
};

const TemplatesTable = ({ onEdit }: TemplatesTableProps) => {
  return (
    <DataTable
      data={templatesData}
      columns={TemplatesColumns({ onEdit })}
    />
  );
};

export default TemplatesTable;
