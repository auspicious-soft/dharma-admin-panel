"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileItem } from "./examsPage.data";
import MockExam from "@/assets/mock-exam.png";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import FileUploadInput from "../reusableComponents/FileUploadInput";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data?: FileItem | null;
};

const PracticeExamDialog = ({ open, onOpenChange, data }: Props) => {
  const isEdit = Boolean(data);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl gap-7">
        <DialogHeader className="gap-3">
          <img
            src={MockExam}
            alt="Mock Exam"
            className="max-w-[80px] md:max-w-[100px] m-auto"
          />
          <DialogTitle className="m-0 text-center text-black font-bold text-2xl md:text-3xl leading-[32px] md:leading-[46px]">
            {isEdit ? "Edit Practice Exam" : "Create a New Practice Exam"}
          </DialogTitle>
          <DialogDescription className="text-Black text-xl font-bold text-center !mt-[-10px]">
            (Project Management Professional)
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {/* Mock Exam Name */}
          <div className="space-y-1 flex flex-col lg:flex-row items-end lg:items-center gap-4 w-full">
           <Input type="text" placeholder="Order#"  className="lg:max-w-36" />

            <Input type="text" placeholder="Enter Name" />
          </div>

          <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 w-full">
            <div className="space-y-1 w-full">
              <Input
                type="text"
                placeholder="Number of Questions"
                readOnly
                className="bg-[#e8e8e8] border-paragraph"
              />
            </div>
            <div className="space-y-1 w-full">
              <Input
                type="text"
                placeholder="Untimed"
                readOnly
                className="bg-[#e8e8e8] border-paragraph"
              />
            </div>
          </div>
          <div className="space-y-1 flex flex-col lg:flex-row gap-4 w-full">
            <div className="lg:max-w-36 w-full space-y-1">
              <Label className="text-paragraph">Price</Label>
              <Input type="number" placeholder="Enter Price" />
            </div>
            <div className="flex-1 w-full space-y-1">
              {isEdit ? (
                <div className="flex justify-between items-start flex-col gap-5 pb-2 ">
                  <Label className="text-paragraph">Questionnaire CSV</Label>
                  <div className="flex gap-2 w-full justify-between items-center">
                    <Button variant="link">View Questionnaire</Button>
                    <Button variant="link">Replace CSV</Button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-start flex-col gap-2 pb-2">
                  <Label className="text-paragraph">Select CSV</Label>
                  <div className="flex gap-2 w-full items-start lg:items-center flex-col md:flex-row">
                     <FileUploadInput placeholder="Select"/>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-2 pt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PracticeExamDialog;
