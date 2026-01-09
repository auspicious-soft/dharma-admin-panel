import DateInput from "@/components/reusableComponents/DateInput";
import TimeInput from "@/components/reusableComponents/TimeInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const AddNotifications = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-between flex-col lg:flex-row gap-4 items-center">
        <h2 className="justify-start text-2xl font-bold w-full lg:w-auto">
          Announcements
        </h2>
      </div>
      <div className="self-stretch p-4 bg-light-blue rounded-[20px] inline-flex flex-col justify-start items-start gap-4">
        <Input type="text" placeholder="Title of section" />

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="course 1">Course 1</SelectItem>
            <SelectItem value="course 2">Course 2</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="category 1">Category 1</SelectItem>
            <SelectItem value="category 2">Category 2</SelectItem>
          </SelectContent>
        </Select>
        <Textarea placeholder="Description" rows={3}></Textarea>
        <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 w-full">
          <div className="space-y-1 w-full">
            <Label className="text-paragraph">Select Date</Label>
            <DateInput />
          </div>
          <div className="space-y-1 w-full">
            <Label className="text-paragraph">Select Time</Label>
            <TimeInput
              value={""}
              onChange={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
         <Button type="submit" className="w-full">Send</Button>
      </div>
    </div>
  );
};

export default AddNotifications;
