import React from "react";

import RecentUserActivity from "@/components/dashboard/RecentUserActivity";
import StatsCard from "@/components/dashboard/StatsCard";
import StatisticsChart from "@/components/StatisticsChart";
import TableDashboard from "@/components/dashboard/TableDashboard";


// 7 Days data
const data7Days = [
  { label: "01", value: 70 },
  { label: "02", value: 110 },
  { label: "03", value: 180 },
  { label: "04", value: 165 },
  { label: "05", value: 195 },
  { label: "06", value: 150 },
  { label: "07", value: 185 },
];
// 30 Days data (example)
const data30Days = Array.from({ length: 30 }, (_, index) => ({
  label: String(index + 1).padStart(2, "0"),
  value: Math.floor(Math.random() * 200) + 50,
}));


const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Stats Cards */}
      <StatsCard />

      {/* Activity + Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> 
        <RecentUserActivity />
        <StatisticsChart
          title="Statistics"
          yAxisLabel="New Purchase"
          xAxisLabel="Days"
          data7Days={data7Days}
          data30Days={data30Days}
        />
      </div>
      
     <TableDashboard />
    </div>
  );
};

export default Dashboard;
