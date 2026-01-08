import { ColumnDef } from "@tanstack/react-table";
import { FileItem } from "./questions.data";
import DataTableActions from "../tableData/DataTableActions";
import { Button } from "../ui/button";
import { Download, Upload } from "iconoir-react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const QuestionsColumns = (activeTab: string): ColumnDef<FileItem>[] => {
  const columns: ColumnDef<FileItem>[] = [
    {
  accessorKey: "categoryName",
  header: "Category Name",
  cell: ({ row }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    return (
      <button
        onClick={() =>
          navigate(`/questions/QuestionsView/${row.original.id}`)
        }
        className="text-left text-primary hover:underline"
      >
        {row.original.categoryName}
      </button>
    );
  },
},
    { accessorKey: "totalQuestions", header: "Total Number of Questions" },
    {
      header: "Action",
      cell: ({ row }) => ( 
        <div className="flex items-center gap-2">
          <Button className="rounded-lg" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button className="rounded-lg" size="icon">
            <Upload className="h-4 w-4" />
          </Button>

          <DataTableActions
            onDelete={() => console.log("Delete file:", row.original.id)}
          />
        </div>
      ),
    },
  ];

  return columns;
};
