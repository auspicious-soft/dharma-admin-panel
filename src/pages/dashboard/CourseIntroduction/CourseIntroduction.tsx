import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import SectionRenderer from "@/components/CourseIntroduction/SectionRenderer";
// ---------------- TYPES ----------------
type BulletSection = {
  id: string;
  type: "bullets";
  title: string;
  items: { description: string }[];
};

type AccordionSection = {
  id: string;
  type: "accordion";
  title: string;
  items: { title: string; content: string }[];
};

type CardsSection = {
  id: string;
  type: "cards";
  title: string;
  items: string[];
};

type Section = BulletSection | AccordionSection | CardsSection;

type Course = {
  title: string;
  description: string;
  sections: Section[];
};

type Courses = Record<string, Course>;

type CourseKey = keyof Courses;

// ---------------- DATA ----------------
const courses: Courses = {
  pmp: {
    title: "PMP® Online Mentoring Programs",
    description:
      "Accelerate exam success and job-ready skills with live mentor-led sessions, hands-on practice, and exam-focused guidance.",
    sections: [
      {
        id: "kvb",
        type: "bullets",
        title: "Key Value Bullets",
        items: [
          {
            description: "12 hours across 6 weeks with expert mentors.",
          },
          {
            description:
              "Claimable Professional Development Units aligned with PMI.",
          },
        ],
      },
            {
        id: "kvbs",
        type: "bullets",
        title: "Key Value Bullets",
        items: [
          {
            description: "12 hours across 6 weeks with expert mentors.",
          },
          {
            description:
              "Claimable Professional Development Units aligned with PMI.",
          },
        ],
      },
      {
        id: "wyl-1",
        type: "accordion",
        title: "What you’ll learn",
        items: [
          {
            title: "Is this course exam focused?",
            content:
              "Yes, it includes mock exams, situational questions, and exam strategies.",
          },
          {
            title: "Is this course exam focused?",
            content:
              "Yes, it includes mock exams, situational questions, and exam strategies.",
          },
        ],
      },
      {
        id: "about",
        type: "cards",
        title: "About PgMP",
        items: [
          "PgMP Certificate – Essentials",
          "Examination Content Outline",
        ],
      },
    ],
  },

  course2: {
    title: "Name of The Course",
    description:
      "This course helps you build strong fundamentals with practical examples.",
    sections: [],
  },
};

/* ------------------ COMPONENT ------------------ */

const CourseIntroduction = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] =
    useState<CourseKey>("pmp");

  const course = courses[selectedCourse];

  return (
    <div className="flex flex-col gap-7">
      {/* ---------- HEADER ---------- */}
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <h2 className="text-2xl font-bold">
          Course Introduction
        </h2>

        <Select
          value={selectedCourse}
          onValueChange={(value) =>
            setSelectedCourse(value as CourseKey)
          }
        >
          <SelectTrigger className="border-dark-bg text-dark-bg text-xs max-w-72 w-full gap-6 py-[14px] text-left">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pmp">
              PMP® Online Mentoring Programs
            </SelectItem>
            <SelectItem value="course2">
              Name of The Course
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* ---------- COURSE INFO ---------- */}
      <div className="flex justify-between gap-4 items-start">
        <div className="flex-1 space-y-3 items-start ">
          <h3 className="text-Black text-xl md:text-2xl  font-bold">
            {course.title}
          </h3>
          <p className="text-paragraph text-sm">
            {course.description}
          </p>
        </div>

        <Button
          onClick={() =>
            navigate(
              `/course-introduction/edit/${selectedCourse}`
            )
          }
          className="rounded-[10px] !text-xs font-medium !py-2"
        >
          Edit
        </Button>
      </div>

      {/* ---------- ALL SECTIONS (DYNAMIC) ---------- */}
      <div className="flex flex-col gap-7">
        {course.sections.map((section) => (
          <SectionRenderer
            key={section.id}
            section={section}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseIntroduction;
