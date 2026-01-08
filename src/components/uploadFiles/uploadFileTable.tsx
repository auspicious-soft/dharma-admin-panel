import { DataTable } from "@/components/tableData/DataTable";
import { FileItem } from "./uploadFiles.data";
import { ColumnDef } from "@tanstack/react-table";

type Props = {
  data: FileItem[];
  columns: ColumnDef<FileItem>[];
};

const UploadFileTable = ({ data, columns }: Props) => {
  return <DataTable data={data} columns={columns} />;
};

export default UploadFileTable;
