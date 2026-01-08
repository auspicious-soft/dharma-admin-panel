"use client";

import { useState, useMemo } from "react";
import { ReusableFilterTabs } from "@/components/reusableComponents/ReusableFilterTabs";
import UsersTable from "@/components/users/usersTable";
import { filesData } from "@/components/users/users.data";
import TableSearch from "@/components/reusableComponents/TableSearch";
import { Button } from "@/components/ui/button";
import { Download, Upload } from "iconoir-react";
import { UsersColumns } from "@/components/users/users.columns";

const Users = () => {
  const [activeTab, setActiveTab] = useState("allUsers");

  const filteredData = useMemo(() => {
    switch (activeTab) {
      case "allUsers":
        return filesData.filter((item) => item.status === "active");
      case "blocked":
        return filesData.filter(
          (item) => item.status === "blocked" || item.status === "deleted"
        );
      default:
        return filesData;
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-black text-lg md:text-2xl font-bold md:leading-[46px]">
        Users
      </h2>

      <div className="flex justify-between items-center flex-wrap gap-3">
        <ReusableFilterTabs
          value={activeTab}
          defaultValue="allUsers"
          onValueChange={setActiveTab}
          tabs={[
            { value: "allUsers", label: "All Users" },
            { value: "blocked", label: "Blocked Users" },
          ]}
        />

        <div className="flex gap-1 md:gap-3 items-center">
          <TableSearch />
          <Button
            variant="secondary"
            className="h-[44px] flex items-center gap-1 md:gap-2"
          >
            <Upload className="w-4 h-4" />
            Import
          </Button>
          <Button
            variant="secondary"
            className="h-[44px] flex items-center gap-1 md:gap-2"
          >
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      <UsersTable data={filteredData} columns={UsersColumns(activeTab)} />
    </div>
  );
};

export default Users;
