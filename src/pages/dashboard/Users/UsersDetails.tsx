"use client";
import React, { useMemo, useState } from "react";
import { ReusableFilterTabs } from "@/components/reusableComponents/ReusableFilterTabs";
import Overview from "@/components/users/UsersDetails/overview";
import ExamsTable from "@/components/users/UsersDetails/ExamsTab/ExamsTabTable";
import { ExamsColumns } from "@/components/users/UsersDetails/ExamsTab/exams.columns";
import { examsData } from "@/components/users/UsersDetails/ExamsTab/exams.data";
import Certifications from "@/components/users/UsersDetails/CertificationsTab/Certifications";
import ItemPurchasedTable from "@/components/users/UsersDetails/ItemPurchasedTab/ItemPurchasedTable";
import ActivityLog from "@/components/users/UsersDetails/ActivityLogTab/ActivityLog";
import ProfileTab from "@/components/users/UsersDetails/ProfileTab";

const UsersDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const columns = useMemo(
    () =>
      ExamsColumns((exam) => {
        console.log("View exam:", exam);
      }),
    [] 
  ); 

  return (
    <div className="flex flex-col gap-4">
      <ReusableFilterTabs
        value={activeTab}
        defaultValue="overview"
        onValueChange={setActiveTab}
        tabs={[
          { value: "overview", label: "Overview" },
          { value: "exams", label: "Exams" },
          { value: "certifications", label: "Certifications" },
          { value: "itemPurchased", label: "Item Purchased" },
          { value: "activityLog", label: "Activity Log" },
          { value: "profile", label: "Profile" },
        ]}
      />

      <div className="">
        {activeTab === "overview" && (
          <Overview onViewAll={() => setActiveTab("exams")} /> 
        )}
        {activeTab === "exams" && (
          <ExamsTable data={examsData} columns={columns} />
        )}
        {activeTab === "certifications" && (
          <Certifications />
        )}
          {activeTab === "itemPurchased" && (
          <ItemPurchasedTable />
        )}
           {activeTab === "activityLog" && (
          <ActivityLog />
        )}
         {activeTab === "profile" && (
          <ProfileTab />
        )}
      </div>
    </div>
  );
};

export default UsersDetails;
