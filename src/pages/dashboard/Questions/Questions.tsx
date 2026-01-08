"use client";

import { useState, useMemo } from "react";
import { ReusableFilterTabs } from "@/components/reusableComponents/ReusableFilterTabs";
import { filesData } from "@/components/Questions/questions.data";
import { Button } from "@/components/ui/button";
import { QuestionsColumns } from "@/components/Questions/questions.columns";
import QuestionsTable from "@/components/Questions/QuestionsTable";
import CourseSelect from "@/components/reusableComponents/CourseSelect";
import { Upload } from "iconoir-react";

const Questions = () => {
  const [activeTab, setActiveTab] = useState<
    "mockQuestions" | "practiceQuestions"
  >("mockQuestions");

  const filteredData = useMemo(() => {
    return filesData.filter(
      (item) =>
        item.type ===
        (activeTab === "mockQuestions"
          ? "Mock Questions"
          : "Practice Questions")
    );
  }, [activeTab]);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <h2 className="text-2xl font-bold">Questions</h2>
        <CourseSelect />
      </div>

      <div className="flex justify-between items-center flex-wrap gap-3">
        <ReusableFilterTabs
          value={activeTab}
          defaultValue="mockQuestions"
          onValueChange={(value) =>
            setActiveTab(value as "mockQuestions" | "practiceQuestions")
          }
          tabs={[
            { value: "mockQuestions", label: "Mock Questions" },
            { value: "practiceQuestions", label: "Practice Questions" },
          ]}
        />

        <div className="flex gap-1 md:gap-3 items-center">
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
            Upload CSV
          </Button>
        </div>
      </div>

      <QuestionsTable
        data={filteredData}
        columns={QuestionsColumns(activeTab)}
      />
    </div>
  );
};

export default Questions;
