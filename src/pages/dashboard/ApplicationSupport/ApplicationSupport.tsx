import React from "react";
import { Button } from "@/components/ui/button";
import { Module } from "@/components/applicationSupport/applicationtypes";
import { useNavigate } from "react-router-dom";
import CourseSelect from "@/components/reusableComponents/CourseSelect";
import { ApplicationModuleSection } from "@/components/applicationSupport/ApplicationModuleSection";

const modules: Module[] = [
  {
    id: "m1",
    title: "Strategic Program management",
    items: [
      {
        id: "1",
        title: "Dummy Name of the PDF",
        type: "pdf",
      },
      {
        id: "2",
        title: "Dummy Name of the video",
        type: "video",
      },
      {
        id: "3",
        title: "Dummy Name of the PDF",
        type: "pdf",
      },
    ],
  },
 {
    id: "m2",
    title: "Benefits Management",
    items: [
      {
        id: "1",
        title: "Dummy Name of the PDF",
        type: "pdf",
      },
      {
        id: "2",
        title: "Dummy Name of the video",
        type: "video",
      },
      {
        id: "3",
        title: "Dummy Name of the PDF",
        type: "pdf",
      },
    ],
  },

];

const ApplicationSupport = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 ">
     <div className="flex justify-between flex-col lg:flex-row gap-4 items-center">
        <h2 className="justify-start text-2xl font-bold w-full lg:w-auto">Application Support</h2>
       
          <div className="flex flex-wrap flex-1 w-full gap-2 lg:gap-4 lg:justify-end">
             <CourseSelect />
          <Button
            variant="secondary"
            className="h-[44px] flex items-center gap-1 md:gap-2"
            onClick={() => navigate("/application-support/add-application-support")}
          >
            Add New
          </Button>
        </div>
      </div>

      {modules.map((module, index) => ( 
        <ApplicationModuleSection
          key={module.id}
          module={module}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
};

export default ApplicationSupport;
