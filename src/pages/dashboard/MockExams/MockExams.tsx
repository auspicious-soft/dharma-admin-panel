import MockExamsTable from "@/components/mockExams/MockExamsTable";
import { examsData } from "@/components/mockExams/mockExams.data";
import CourseSelect from "@/components/reusableComponents/CourseSelect";
import TableSearch from "@/components/reusableComponents/TableSearch";
import { Button } from "@/components/ui/button";

const MockExams = () => {
  return (
        <div className="flex flex-col gap-4">
      {/* HEADER */}
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <h2 className="text-black text-lg md:text-2xl font-bold nd:leading-[46px]">
          Mock Exams
        </h2>
        <CourseSelect />
      </div>
      <div className="flex md:justify-end items-center flex-wrap gap-3">
         <TableSearch />
         <Button
            variant="secondary"
            className="h-[44px] flex items-center gap-1 md:gap-2"
          >
            Export CSV
          </Button>
      </div>
  <MockExamsTable data={examsData} />
  </div>
);
};

export default MockExams;
