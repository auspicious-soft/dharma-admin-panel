import RolesTable from "@/components/roles/RolesTable";
import TableSearch from "@/components/reusableComponents/TableSearch";
import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const Roles = () => {
   const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4"> 
      <div className="flex justify-between flex-wrap gap-2 md:gap-4">
        <div className="flex gap-2 flex-wrap item-center">
          <h2 className="text-center justify-start text-Black text-2xl font-bold capitalize leading-[46px]">
            Roles
          </h2>
        </div>
        <div className="flex gap-2 flex-wrap item-center">
          <TableSearch />
          <Button variant="secondary" className="h-[44px]"
           onClick={() => navigate("/roles/add")}
          >
            Add New
          </Button>
        </div>
      </div>
      <RolesTable />
    </div>
  );
};

export default Roles;
