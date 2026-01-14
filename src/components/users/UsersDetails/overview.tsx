import StatisticsChart from "@/components/StatisticsChart";
import React, { useMemo, useState } from "react";
import UserImage from "/user-image.png";
import ProgressIcon from "@/assets/progress-icon.png";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import CircularProgress from "@/components/reusableComponents/CircularProgress";
import { ExamsColumns } from "./ExamsTab/exams.columns";
import { examsData } from "./ExamsTab/exams.data";
import ExamsTable from "./ExamsTab/ExamsTabTable";
import { Button } from "@/components/ui/button";

// 7 Days data chart
const data7Days = [
  { label: "01", value: 70 },
  { label: "02", value: 110 },
  { label: "03", value: 180 },
  { label: "04", value: 165 },
  { label: "05", value: 195 },
  { label: "06", value: 150 },
  { label: "07", value: 185 },
];
// 30 Days data (example) chart
const data30Days = Array.from({ length: 30 }, (_, index) => ({
  label: String(index + 1).padStart(2, "0"),
  value: Math.floor(Math.random() * 200) + 50,
}));

// Courses Enrolled
const tags = ["PfMP", "PgMP", "PMP"];

// Course Progress
const modules = [
  {
    id: 1,
    title: "Module 1: Introduction",
    progress: 75,
  },
  {
    id: 2,
    title: "Domain & Task",
    progress: 40,
  },
];
type OverviewProps = {
  onViewAll: () => void;
};
// Table
const Overview = ({ onViewAll }: OverviewProps) => {
  const [active, setActive] = useState<"active" | "block">("active");

  const columns = useMemo(
    () =>
      ExamsColumns((exam) => {
        console.log("View exam:", exam);
      }),
    []
  );

  // 🔥 Top 5 recent exams (by date)
  const recentExams = useMemo(() => {
    return [...examsData]
      .sort((a, b) => {
        const [da, ma, ya] = a.date.split("-").map(Number);
        const [db, mb, yb] = b.date.split("-").map(Number);

        return (
          new Date(yb, mb - 1, db).getTime() -
          new Date(ya, ma - 1, da).getTime()
        );
      })
      .slice(0, 5);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-[2.33fr_2fr] gap-6">
        <div className="p-4 bg-light-blue rounded-[10px] flex flex-col gap-6">
          <div className="self-stretch inline-flex justify-between items-center gap-">
            <div className="flex justify-start items-center gap-4">
              <img
                className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]  rounded-full"
                src={UserImage}
              />
              <div className="text-Black-000 text-xl md:text-2xl font-bold font-['Plus_Jakarta_Sans']">
                Kiley Weber
              </div>
            </div>
            <div className="flex justify-center items-center gap-1.5">
              <Select
                value={active}
                onValueChange={(value) =>
                  setActive(value as "active" | "block")
                }
              >
                <SelectTrigger className="bg-[#F50927] border border-[#F50927] text-white text-xs rounded-full px-3 py-2 outline-none w-[92px]">
                  <SelectValue placeholder="Active" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="block">Block</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Label>Courses Enrolled</Label>
            <div className="flex flex-wrap gap-[6px]">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="px-5 py-[2px] bg-primary_blue rounded-[99px] inline-flex justify-center items-center gap-2.5"
                >
                  <div className="text-white text-sm font-semibold uppercase">
                    {tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-[10px]">
              <Label>Email Address</Label>
              <div className="text-Desc-464646 text-base font-semibold leading-6">
                kiley.weiber465@gmail.com
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <Label>Phone Number</Label>
              <div className="text-Desc-464646 text-base font-semibold leading-6">
                +1 0210540541
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Label>Country</Label>
            <div className="text-Desc-464646 text-base font-semibold leading-6">
              United States
            </div>
          </div>
        </div>
        <StatisticsChart
          title="Progress Over Time"
          yAxisLabel="Time spent"
          xAxisLabel="Days"
          data7Days={data7Days}
          data30Days={data30Days}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-4 bg-light-blue rounded-[10px] flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <h3 className="text-black text-2xl font-bold">Course Progress</h3>
            <div className="flex flex-col gap-2">
              <Label>Last Accessed Module</Label>
              <div className="flex flex-wrap flex-col gap-[6px]">
                {modules.map((module) => (
                  <div
                    key={module.id}
                    className="flex items-center w-full justify-between bg-white rounded-[8px] p-2"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex items-center justify-center bg-light-blue rounded-full p-1">
                        <img
                          src={ProgressIcon}
                          alt="ProgressIcon"
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <p className="text-dark-bg text-base font-semibold">
                        {module.title}
                      </p>
                    </div>
                    <CircularProgress value={module.progress} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="p-4 bg-light-blue rounded-[10px] flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-2 items-center justify-between w-full md:w-auto">
              <h3 className="text-black text-2xl font-bold w-full md:w-auto">
                Subscription Details
              </h3>
              <div className="text-[#1c2329] text-sm font-normal  leading-[22px] w-full md:w-auto">
                Active Since 2023
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
              <div className="flex flex-col gap-2 flex-1 w-full md:w-auto">
                <div className="text-Desc-464646 text-[22px] font-semibold leading-6 ">
                  Gold
                </div>
                <div className="flex flex-warp gap-2">
                  <div className="px-5 py-2.5 bg-primary_blue rounded-[99px] text-white text-sm font-semibold">
                    Name of Course
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-auto">
                <Label>Start - End</Label>
                <div className="text-Desc-464646 text-base font-semibold leading-6">
                  25 Nov -5 Mar 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-light-blue rounded-[10px] flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between w-full md:w-auto">
          <h3 className="text-black text-2xl font-bold w-full md:w-auto">
            Recent Exam Activity
          </h3>
          <Button variant="secondary" onClick={onViewAll} className="h-[44px]">
            View All
          </Button>
        </div>
        <ExamsTable data={recentExams} columns={columns} />
      </div>
    </div>
  );
};

export default Overview;
