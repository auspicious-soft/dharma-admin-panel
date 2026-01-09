import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { coursesCardData } from "@/components/Courses/coursesCard.data";
import AddCourseDialog from "@/components/Courses/AddCourseDialog";
import { CourseType } from "@/components/Courses/courseType";
import ConfirmDialog from "@/components/dialogs/ConfirmDialog";

const Courses: React.FC = () => {
  const [courseDialogOpen, setCourseDialogOpen] = useState<boolean>(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);

  const handleAdd = () => {
    setSelectedCourse(null);
    setCourseDialogOpen(true);
  };

  const handleEdit = (course: CourseType) => {
    setSelectedCourse(course);
    setCourseDialogOpen(true);
  };

  const handleDeleteClick = (course: CourseType) => {
    setSelectedCourse(course);
    setDeleteDialogOpen(true);
  };

  const onDelete = () => {
    if (!selectedCourse) return;

    console.log("Deleting course:", selectedCourse.id);
    // API call goes here
    // await deleteCourse(selectedCourse.id)

    setDeleteDialogOpen(false);
    setSelectedCourse(null);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-4 items-center ">
        <h2 className="justify-start text-2xl font-bold ">
          Courses
        </h2>
        <div className="flex flex-wrap flex-1 w-full gap-2 lg:gap-4 justify-end">
          <Button variant="secondary" className="h-[44px]" onClick={handleAdd}>
            Add A New Course
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coursesCardData.map((course) => {
          const isInactive = course.status === "Inactive";

          return (
            <div
              key={course.id}
              className={`p-3 pb-5 rounded-lg inline-flex flex-col justify-start items-start gap-5 relative ${
                isInactive ? "bg-[#0F1C2F]" : "bg-[#DBE8FB]"
              }`}
            >
              {isInactive && (
                <div className="px-[18px] py-2 right-3 top-2.5 absolute bg-white rounded-[66px] outline outline-1 outline-offset-[-1px] outline-Stroke outline-[#EDF1F3] inline-flex justify-center items-center">
                  <div className="justify-start text-black text-xs font-medium">
                    Inactive
                  </div>
                </div>
              )}

              <img
                src={course.image}
                alt="Courses"
                className="w-full rounded-sm"
              />

              <div className="self-stretch inline-flex justify-between items-center">
                <h3
                  className={`justify-start text-lg font-bold capitalize ${
                    isInactive ? "text-white" : "text-black"
                  }`}
                >
                  {course.name}
                </h3>

                <div className="py-1 px-3 bg-white rounded-lg inline-flex flex-col justify-start items-center gap-[3.90px]">
                  <div className="justify-start text-primary_blue text-base font-semibold leading-[29.24px]">
                    #{course.rank}
                  </div>
                </div>
              </div>

              <div className="self-stretch inline-flex justify-start items-start gap-2.5">
                <Button
                  variant="destructive"
                  className="!py-2.5 w-full !border-[#DBE8FB] !border "
                  onClick={() => handleDeleteClick(course)}
                >
                  Delete
                </Button>
                <Button
                  className="!py-2.5 w-full !border-[#DBE8FB] !border "
                  onClick={() => handleEdit(course)}
                >
                  Edit
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <AddCourseDialog
        open={courseDialogOpen}
        setOpen={setCourseDialogOpen}
        editData={selectedCourse}
      />
      <ConfirmDialog
        open={deleteDialogOpen}
        title="Delete course?"
        description="Are you sure you want to delete this course? This action cannot be undone."
        onCancel={() => setDeleteDialogOpen(false)}
        onConfirm={onDelete}
      />
    </div>
  );
};

export default Courses;
