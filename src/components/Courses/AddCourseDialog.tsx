import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CourseType } from "./courseType";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import CourseIcon from "@/assets/course-icon.png";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import FileUploadInput from "../reusableComponents/FileUploadInput";

interface AddCourseDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editData: CourseType | null;
}

const AddCourseDialog: React.FC<AddCourseDialogProps> = ({
  open,
  setOpen,
  editData,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl gap-7">
        <DialogHeader className="gap-3">
          <img
            src={CourseIcon}
            alt="Course Icon"
            className="max-w-[80px] md:max-w-[100px] m-auto"
          />
          <DialogTitle className="m-0 text-center text-black font-bold text-2xl md:text-3xl leading-[32px] md:leading-[46px]">
            {editData ? "Edit Course" : "Create New Course"}
          </DialogTitle>
          <VisuallyHidden>
            <DialogDescription></DialogDescription>
          </VisuallyHidden>
        </DialogHeader>

        <div className="space-y-4">
          <Input type="text" placeholder="Name of Course" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Active/Inactive" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 w-full">
            <Input
              type="text"
              placeholder="Order Of Course"
              className=" flex-1 min-w-36" 
            />
             <FileUploadInput placeholder="Browse Image"/>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-2">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCourseDialog;
