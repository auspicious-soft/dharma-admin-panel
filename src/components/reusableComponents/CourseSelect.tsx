import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CourseSelect = () => {
    return (
        <Select defaultValue="pmp">
          <SelectTrigger className="border-dark-bg text-dark-bg text-xs max-w-72 w-full gap-6 py-[14px] text-left">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pmp">PMP® Online Mentoring Programs</SelectItem>
            <SelectItem value="course2">Name of The Course</SelectItem>
          </SelectContent>
        </Select>
    );
}

export default CourseSelect;
