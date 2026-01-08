import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from "iconoir-react";
import { Button } from "@/components/ui/button";
import { Module } from "@/components/DomainsTasks/types";
import { useNavigate } from "react-router-dom";
import { DomainsModuleSection } from "@/components/DomainsTasks/DomainsModuleSection";
import CourseSelect from "@/components/reusableComponents/CourseSelect";


const DomainsTasks = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modules, setModules] = React.useState<Module[]>([
    {
      id: "d1",
      title: "Strategic Program management",
      task: 8,
      items: [
        { id: "1", title: "Perform an initial program assessment by vCareProject Management" },
        { id: "2", title: "Dummy Name of the slide" },
        { id: "3", title: "Dummy Name of the quiz" },
      ],
    },
    {
      id: "d2",
      title: "Benefits Management",
      task: 8,
      items: [
        { id: "1", title: "Perform an initial program assessment by vCareProject Management" },
        { id: "2", title: "Dummy Name of the slide" },
        { id: "3", title: "Dummy Name of the quiz" },
      ],
    },
  ]);
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <h2 className="text-2xl font-bold">Domains & Tasks</h2>
    <CourseSelect />
      </div>

      <div className="flex md:justify-end items-center flex-wrap gap-3">
        <div className="flex gap-1 md:gap-3 items-center flex-wrap">
          <Button
            variant="outline"
            className="h-[44px] flex border-paragraph text-paragraph items-center gap-1 md:gap-2 !text-xs"
          >
            Download Sample
          </Button>
          <Button
            variant="secondary"
            className="h-[44px] flex items-center gap-1 md:gap-2"
          >
            <Upload className="w-4 h-4" />
            Upload File
          </Button>
          <Button
            variant="secondary"
            className="h-[44px] flex items-center gap-1 md:gap-2"
            onClick={() => navigate("/domains-tasks/add-domains")}
          >
            Add Domain
          </Button>
        </div>
      </div>

      {modules.map((module, index) => (
        <DomainsModuleSection
          key={module.id}
          module={module}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
};

export default DomainsTasks;
