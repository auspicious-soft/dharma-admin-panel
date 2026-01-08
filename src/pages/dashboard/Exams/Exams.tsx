"use client";

import { useState, useMemo } from "react";
import { ReusableFilterTabs } from "@/components/reusableComponents/ReusableFilterTabs";
import { filesData, FileItem } from "@/components/exams/examsPage.data";
import { Button } from "@/components/ui/button";
import { ExamsPageColumns } from "@/components/exams/examsPage.columns";
import CourseSelect from "@/components/reusableComponents/CourseSelect";
import ExamsPageTable from "@/components/exams/ExamsPageTable";
import TableSearch from "@/components/reusableComponents/TableSearch";
import MockExamDialog from "@/components/exams/MockExamDialog";
import PracticeExamDialog from "@/components/exams/PracticeExamDialog";

const Exams = () => {
  const [activeTab, setActiveTab] = useState<
    "mockQuestions" | "practiceQuestions"
  >("mockQuestions");

  const [mockOpen, setMockOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FileItem | null>(null);

  const filteredData = useMemo(() => {
    return filesData.filter(
      (item) =>
        item.type ===
        (activeTab === "mockQuestions"
          ? "Mock Questions"
          : "Practice Questions")
    );
  }, [activeTab]);

  const handleCreate = () => {
    setSelectedItem(null);

    if (activeTab === "mockQuestions") {
      setMockOpen(true);
    } else {
      setPracticeOpen(true);
    }
  };

  const handleEdit = (row: FileItem) => {
    setSelectedItem(row);

    if (activeTab === "mockQuestions") {
      setMockOpen(true);
    } else {
      setPracticeOpen(true);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <h2 className="text-2xl font-bold">Exams</h2>
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
          <TableSearch />

          <Button
            variant="secondary"
            className="h-[44px]"
            onClick={handleCreate}
          >
            {activeTab === "mockQuestions"
              ? "Create New Mock Exam"
              : "Create New Practice Exam"}
          </Button>
        </div>
      </div>

      <ExamsPageTable
        data={filteredData}
        columns={ExamsPageColumns(activeTab, {
          onEdit: handleEdit,
        })}
      />

      {/* Mock Dialog */}
      <MockExamDialog
        open={mockOpen}
        onOpenChange={setMockOpen}
        data={selectedItem}
      />

      {/* Practice Dialog */}
      <PracticeExamDialog
        open={practiceOpen}
        onOpenChange={setPracticeOpen}
        data={selectedItem}
      />
    </div>
  );
};

export default Exams;
