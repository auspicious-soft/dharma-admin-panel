import { DataTable } from "@/components/tableData/DataTable";
import { rolesColumns } from "./roles.columns";
import { rolesData } from "./roles.data";

const RolesTable = () => {
  return <DataTable columns={rolesColumns} data={rolesData} />;
};

export default RolesTable;
