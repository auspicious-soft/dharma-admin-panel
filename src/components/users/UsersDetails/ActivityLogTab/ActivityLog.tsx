import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import UserImage from "/user-image.png";
import ViewReportDialog from "../ViewReportDialog";

const activityLogs = [
  {
    id: 1,
    title: "Completed mock exam",
    subtitle: "Last Accessed On",
    showReport: true,
  },
  {
    id: 2,
    title: "Practiced questions",
    subtitle: "Last Accessed On",
    showReport: true,
  },
  {
    id: 3,
    title: "Updated profile",
    subtitle: "Last Accessed On",
    showReport: false,
  },
  {
    id: 4,
    title: "Logged in",
    subtitle: "Last Accessed On",
    showReport: false,
  },
];

const ActivityLog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="p-4 bg-light-blue rounded-[10px] flex flex-col gap-5 lg:p-7">
        <h2 className="text-Black text-lg font-bold capitalize">
          Activity Log
        </h2>

        <div className="flex flex-col gap-[10px]">
          {activityLogs.map((activity) => (
            <div
              key={activity.id}
              className="self-stretch  p-3 lg:p-5 bg-white rounded-2xl flex justify-between items-center gap-3 flex-col md:flex-row"
            >
              <div className="flex items-center gap-2.5 self-start">
                <img
                  className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full"
                  src={UserImage}
                  alt="user"
                />

                <div className="flex flex-col gap-2.5">
                  <div className="text-black text-sm font-bold">
                    {activity.title}
                  </div>
                  <div className="text-Primary-Font text-xs font-medium">
                    {activity.subtitle}
                  </div>
                </div>
              </div>

              {(activity.title === "Completed mock exam" ||
                activity.title === "Practiced questions") && (
                <Button
                  variant="secondary"
                  className="h-[34px] md:h-[44px]"
                  onClick={() => setOpen(true)}
                >
                  View Report
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
      <ViewReportDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default ActivityLog;
