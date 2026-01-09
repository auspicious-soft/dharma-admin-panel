import CourseSelect from "@/components/reusableComponents/CourseSelect";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { DataTable } from "@/components/tableData/DataTable";
import { NotificationsColumns } from "@/components/notifications/notifications.column";
import { NotificationsTableData } from "@/components/notifications/notifications.data";

const Notifications = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 ">
       <div className="flex justify-between flex-col lg:flex-row gap-4 items-center">
        <h2 className="justify-start text-2xl font-bold w-full lg:w-auto">
         Notifications
        </h2>  

        <div className="flex flex-wrap flex-1 w-full gap-2 lg:gap-4 lg:justify-end">
          <CourseSelect />
          <Button
            variant="secondary"
            className="h-[44px] flex items-center gap-1 md:gap-2"
            onClick={() =>
              navigate("/notifications/add-notification ")
            }
          >
            Add New
          </Button>
        </div>
      </div>
      <DataTable columns={NotificationsColumns} data={NotificationsTableData} />
    </div>
  );
};

export default Notifications;
