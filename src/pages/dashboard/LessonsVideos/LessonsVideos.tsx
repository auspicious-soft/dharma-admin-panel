import React from "react";
import { Upload } from "iconoir-react";
import { Button } from "@/components/ui/button";
import { ModuleSection } from "@/components/LessonsVideos/ModuleSection";
import { Module } from "@/components/LessonsVideos/types";
import { useNavigate } from "react-router-dom";
import CourseSelect from "@/components/reusableComponents/CourseSelect";

const modules: Module[] = [
  {
    id: "m1",
    title: "Module 1: Introduction",
    videos: 8,
    slides: 170,
    questions: 5,
    items: [
      {
        id: "1",
        title: "Dummy Name of the video",
        duration: "00:24:00",
        type: "video",
      },
      {
        id: "2",
        title: "Dummy Name of the slide",
        duration: "00:24:00",
        type: "slide",
      },
      {
        id: "3",
        title: "Dummy Name of the quiz",
        duration: "00:24:00",
        type: "quiz",
      },
    ],
  },

  {
    id: "m2",
    title: "Module 2: Advanced Concepts",
    videos: 5,
    slides: 120,
    questions: 10,
    items: [
      {
        id: "4",
        title: "Advanced Video Lesson",
        duration: "00:30:00",
        type: "video",
      },
      {
        id: "5",
        title: "Advanced Slides",
        duration: "00:18:00",
        type: "slide",
      },
    ],
  },
];

const LessonsVideos = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <h2 className="text-2xl font-bold">Lessons & Videos</h2>
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
            onClick={() => navigate("/lessons-videos/add-lessons-module")}
          >
            Add Module
          </Button>
        </div>
      </div>

      {modules.map((module, index) => (
        <ModuleSection
          key={module.id}
          module={module}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
};

export default LessonsVideos;
