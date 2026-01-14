"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MockExam from "@/assets/mock-exam.png";
import { BinMinusIn } from "iconoir-react";
import TimeInput from "../reusableComponents/TimeInput";
import FileUploadInput from "../reusableComponents/FileUploadInput";

type MockExamDialogProps = {
  open: boolean;
  onOpenChange: (mockOpen: boolean) => void;
  data?: unknown;
};

// Domain types
type DomainItem = {
  id: string;
  name: string;
  domain: string;
};

type DomainSection = {
  id: string;
  items: DomainItem[];
};

const domainOptions = [
  "Strategic Program Management",
  "Stakeholder Engagement",
  "Program Lifecycle",
];

const MockExamDialog = ({ open, onOpenChange, data }: MockExamDialogProps) => {
  const isEdit = Boolean(data);
     const [time, setTime] = useState("");

  // State for domain sections
  const [domainSections, setDomainSections] = useState<DomainSection[]>([
    {
      id: "domain-1",
      items: [{ id: crypto.randomUUID(), name: "", domain: "" }],
    },
  ]);

  // Add new domain item
  const addDomainItem = (sectionId: string) => {
    setDomainSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              items: [
                ...section.items,
                { id: crypto.randomUUID(), name: "", domain: "" },
              ],
            }
          : section
      )
    );
  };

  // Remove domain item
  const removeDomainItem = (sectionId: string, itemId: string) => {
    setDomainSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.filter((item) => item.id !== itemId),
            }
          : section
      )
    );
  };

  // Update domain item field
  const updateDomainItem = (
    sectionId: string,
    itemId: string,
    field: "name" | "domain",
    value: string
  ) => {
    setDomainSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId ? { ...item, [field]: value } : item
              ),
            }
          : section
      )
    );
  };

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
            {isEdit ? "Edit Mock Exam" : "Create a New Mock Exam"}
          </DialogTitle>
          <DialogDescription className="text-Black text-xl font-bold text-center !mt-[-10px]">
            (Project Management Professional)
          </DialogDescription>
        </DialogHeader>

        {/* Dialog Body */}
        <div className="space-y-4">
          {/* Mock Exam Name */}
          <div className="space-y-1 flex flex-col lg:flex-row items-end lg:items-center gap-4 w-full">
            <Input type="text" placeholder="Order#" className="lg:max-w-36" />
            <Input type="text" placeholder="Enter Name" />
          </div>

          <div className="space-y-1 flex flex-col lg:flex-row items-end lg:items-center gap-4 w-full">
            <Input type="text" placeholder="Number of Questions" />
             <TimeInput value={time} onChange={setTime} />
            <Input type="number" placeholder="Enter Price" />
          </div>

          <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 w-full">
            <div className="space-y-1 w-full">
              <Label className="text-paragraph">Random Questions</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Yes/No" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1 w-full">
              <Label className="text-paragraph">Select CSV</Label>
               <FileUploadInput placeholder="Select"/>
            </div>
          </div>

          {/* Domain Sections */}
          {domainSections.map((section) => (
            <div key={section.id} className="flex flex-col gap-1">
              <Label className="text-paragraph mb-1">Set Domain</Label>
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row items-end lg:items-center gap-1 w-full"
                >
                  {/* Select box with domain options */}
                  <Select
                    value={item.domain}
                    onValueChange={(val) =>
                      updateDomainItem(section.id, item.id, "domain", val)
                    }
                  >
                    <SelectTrigger className="">
                      <SelectValue placeholder="Select #" />
                    </SelectTrigger>
                    <SelectContent>
                      {domainOptions.map((domain) => (
                        <SelectItem key={domain} value={domain}>
                          {domain}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Domain Name input */}
                  <Input
                    type="number"
                    placeholder="30%"
                    value={item.name}
                    onChange={(e) =>
                      updateDomainItem(
                        section.id,
                        item.id,
                        "name",
                        e.target.value
                      )
                    }
                    className="flex-1 min-w-36"
                  />
                  {/* Remove button */}
                  {section.items.length > 1 && (
                    <Button
                      onClick={() => removeDomainItem(section.id, item.id)}
                      className="!bg-[#f50927] rounded-md text-white !p-[7.5px] !text-xs"
                    >
                      <BinMinusIn className="w-3 h-3" />
                    </Button>
                  )}
                </div>
              ))}

              {/* Add new domain button */}
              <div className="flex justify-end mt-2">
                <button
                  onClick={() => addDomainItem(section.id)}
                  className="text-primary_blue underline text-sm"
                >
                  + Add New
                </button>
              </div>
            </div>
          ))}
          <div className="space-y-1 w-full">
            <Label className="text-paragraph">Overall Passing Score</Label>
            <Input type="number" placeholder="Overall Passing Score" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label className="text-paragraph">Select Percentage</Label>
              <div className="flex flex-row items-center gap-1 w-full">
                <div className="space-y-1 w-full">
                  <Input type="number" placeholder="%" />
                </div>
                <p className="text-[#556378]/80">&lt;</p>
                <div className="space-y-1 w-full">
                  <Input type="number" placeholder="%" />
                </div>
              </div>
              <div className="flex flex-row items-center gap-1 w-full">
                <div className="space-y-1 w-full">
                  <Input type="number" placeholder="%" />
                </div>
                <p className="text-[#556378]/80">&lt;</p>
                <div className="space-y-1 w-full">
                  <Input type="number" placeholder="%" />
                </div>
              </div>
              <div className="flex flex-row items-center gap-1 w-full">
                <div className="space-y-1 w-full">
                  <Input type="number" placeholder="%" />
                </div>
                <p className="text-[#556378]/80">&lt;</p>
                <div className="space-y-1 w-full">
                  <Input type="number" placeholder="%" />
                </div>
              </div>
              <div className="flex flex-row items-center gap-1 w-full">
                <div className="space-y-1 w-full">
                  <Input type="number" placeholder="%" />
                </div>
                <p className="text-[#556378]/80">&lt;</p>
                <div className="space-y-1 w-full">
                  <Input type="number" placeholder="%" />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <Label className="text-paragraph">Enter Remarks</Label>
              <div className="flex flex-col items-center gap-1 w-full">
                <Input type="text" placeholder="Needs Improvement" />
                <Input type="text" placeholder="Below Target" />
                <Input type="text" placeholder="Target" />
                <Input type="text" placeholder="Above Target" />
              </div>
            </div>
          </div>

          {/* Actions */}
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

export default MockExamDialog;
