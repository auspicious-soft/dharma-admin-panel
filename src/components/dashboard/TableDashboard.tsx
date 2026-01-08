import { DataTable } from "@/components/tableData/DataTable";
import { ColumnDef } from "@tanstack/react-table";

type ExamResult = {
  user: string;
  examName: string;
  examType: "Mock" | "Practice" | "Final";
  score: string;
  timeTaken: string;
  dateTime: string;
};

const columns: ColumnDef<ExamResult>[] = [
  { accessorKey: "user", header: "User", enableSorting: false, },
  { accessorKey: "examName", header: "Exam Name", enableSorting: false, },
  { accessorKey: "examType", header: "Exam Type", enableSorting: false, },
  { accessorKey: "score", header: "Score", enableSorting: false, }, 
  { accessorKey: "timeTaken", header: "Time Taken", enableSorting: false, },
  { accessorKey: "dateTime", header: "Date / Time", enableSorting: false, },
];

const tableData: ExamResult[] = Array.from({ length: 200 }, (_, index) => ({
  user: `Naomi Campbell ${index + 1}`,
  examName: `Project Management Exam ${index + 1}`,
  examType: index % 3 === 0 ? "Mock" : index % 3 === 1 ? "Practice" : "Final",
  score: `${70 + (index % 30)}%`,
  timeTaken: "02:12:56",
  dateTime: "08/03/2017 - 01:45 PM", 
}));

const TableDashboard = () => {
  return <DataTable columns={columns} data={tableData} />;
};

export default TableDashboard;
