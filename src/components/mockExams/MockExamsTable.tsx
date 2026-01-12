"use client";

import { useState, useMemo } from "react";
import { DataTable } from "@/components/tableData/DataTable";
import { MockExamsItem } from "./mockExams.data";
import { ColumnDef } from "@tanstack/react-table";
import ViewReportDialog from "../users/UsersDetails/ViewReportDialog";
import { MockExamsColumns } from "./mockExams.columns";

type Props = {
  data: MockExamsItem[];
};

const MockExamsTable = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  const [, setSelectedExam] =
    useState<MockExamsItem | null>(null);

  const columns: ColumnDef<MockExamsItem>[] = useMemo(
    () =>
      MockExamsColumns((exam) => {
        setSelectedExam(exam);
        setOpen(true);
      }),
    []
  );

  return (
    <>
      <DataTable data={data} columns={columns} />

      <ViewReportDialog
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
};

export default MockExamsTable;
