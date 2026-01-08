import ManageCategoriesTable from "@/components/flashCards/manageCategories/ManageCategoriesTable";
import CourseSelect from "@/components/reusableComponents/CourseSelect";
import React, { useState } from "react";
import { filesData, type FileItem } from "@/components/flashCards/manageCategories/manageCategories.data";
import { ManageCategoriesColumns } from "@/components/flashCards/manageCategories/manageCategories.columns";
import { Button } from "@/components/ui/button";
import ManageCategoriesDialog from "@/components/flashCards/manageCategories/ManageCategoriesDialog";
import TableSearch from "@/components/reusableComponents/TableSearch";

const ManageCategories = () => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<FileItem | null>(null);

  const handleAddNew = () => {
    setEditData(null); 
    setOpen(true);
  };

  const handleEdit = (rowData: FileItem) => {
    setEditData(rowData); 
    setOpen(true);
  };
  return (
    <>
      <div className="flex flex-col gap-5 ">
        <div className="flex justify-between flex-col lg:flex-row gap-4 items-center">
         <h2 className="justify-start text-2xl font-bold w-full lg:w-auto">Manage Categories</h2>
          <div className="flex flex-wrap flex-1 w-full gap-2 lg:gap-4 lg:justify-end">
            <CourseSelect />
            <TableSearch />
            <Button variant="secondary" className="h-[44px]" onClick={handleAddNew}>Add New</Button>
          </div>
        </div>
        <ManageCategoriesTable
          data={filesData}
          columns={ManageCategoriesColumns("activeTab", { onEdit: handleEdit })}
        />
      </div>
      <ManageCategoriesDialog
        open={open}
        onOpenChange={setOpen}
        data={editData}
      />
    </>
  );
};

export default ManageCategories;
