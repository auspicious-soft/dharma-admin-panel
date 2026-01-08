import CourseSelect from "@/components/reusableComponents/CourseSelect";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { DataTable } from "@/components/tableData/DataTable";
import { announcementColumns } from "@/components/Announcements/announcements.column";
import { announcementTableData } from "@/components/Announcements/announcements.data";

const Announcements = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-between flex-col lg:flex-row gap-4 items-center">
        <h2 className="justify-start text-2xl font-bold w-full lg:w-auto">
         Announcements
        </h2> 

        <div className="flex flex-wrap flex-1 w-full gap-2 lg:gap-4 lg:justify-end">
          <CourseSelect />
          <Button
            variant="secondary"
            className="h-[44px] flex items-center gap-1 md:gap-2"
            onClick={() =>
              navigate("/announcements/add-announcement ")
            }
          >
            Add New
          </Button>
        </div>
      </div>
      <DataTable columns={announcementColumns} data={announcementTableData} />
    </div>
  );
};

export default Announcements;
