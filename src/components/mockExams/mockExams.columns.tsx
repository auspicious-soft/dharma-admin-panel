import { ColumnDef } from "@tanstack/react-table";
import { MockExamsItem } from "./mockExams.data";
import { Button } from "@/components/ui/button";

export const MockExamsColumns = (
  onView: (exam: MockExamsItem) => void
): ColumnDef<MockExamsItem>[] => [
  {
    accessorKey: "examName",
    header: "Exam Name",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "timeTaken",
    header: "Time Taken",
  },
  {
    accessorKey: "attemptNumber",
    header: "Attempt Number",
  },
{
  accessorKey: "score",
  header: "Score",
cell: ({ row }) => {
  const { score, status } = row.original;
  const isCompleted = status === "Completed";

  return (
    <div className="flex gap-5 items-center">
      <span className="text-sm">{score}</span>
      <span
        className={`text-sm font-medium italic ${
          isCompleted ? "text-[#6aa56d]" : "text-[#d25a5a]"
        }`}
      >
        {status}
      </span>
    </div>
  );
},
},

  {
    header: "Action",
    cell: ({ row }) =>
      row.original.status === "Completed" ? (
        <Button
          onClick={() => onView(row.original)}
          className="h-[34px] text-sm rounded-xl !px-4 !py-2"
        >
          View Report
        </Button>
      ) : null,
  },
];
