"use client";

import { DataTable } from "@/components/tableData/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { FileItem } from "./manageCategories.data";

type Props = {
  data: FileItem[];
  columns: ColumnDef<FileItem>[];
};

const ManageCategoriesTable = ({ data, columns }: Props) => {
  return <DataTable data={data} columns={columns} />;
};

export default ManageCategoriesTable; 
