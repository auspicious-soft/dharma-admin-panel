"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import AddCertificateIcon from "@/assets/add-certificate.png";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import DateInput from "@/components/reusableComponents/DateInput";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const AddCertificate = () => {
  const [startDate, setStartDate] = React.useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="h-[44px] flex items-center gap-1 md:gap-2"
        >
          Add A Certificate
        </Button>
      </DialogTrigger>

      {/* Dialog */}
      <DialogContent className="max-w-2xl gap-7">
        <DialogHeader className="gap-3">
          <img
            src={AddCertificateIcon}
            alt="Add Certificate"
            className="max-w-[80px] md:max-w-[100px] m-auto"
          />
          <DialogTitle className="m-0 text-center text-black font-bold text-2xl md:text-3xl leading-[32px] md:leading-[46px]">
            Add Certificate
          </DialogTitle>
          <VisuallyHidden>
            <DialogDescription></DialogDescription>
          </VisuallyHidden>
        </DialogHeader>

        {/* Dialog Body */}
        <div className="space-y-4">
          <div className="space-y-1">
            <Label className="text-paragraph">Name*</Label>
            <Input id="name" type="text" placeholder="Peacock" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="space-y-1">
              <Label>Email*</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-paragraph">Country*</Label>
              <Select defaultValue="Active">
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Select</SelectItem>
                  <SelectItem value="Deactive">United States</SelectItem>
                  <SelectItem value="Deactive">United States</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="space-y-1">
              <Label className="text-paragraph">Send Email</Label>
              <Select defaultValue="Active">
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Yes</SelectItem>
                  <SelectItem value="Deactive">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-paragraph">Certificate Template</Label>
              <Select defaultValue="Active">
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Certificate Template 1</SelectItem>
                  <SelectItem value="Deactive">
                    Certificate Template 2
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1">
            <Label className="text-paragraph">Date of Completion*</Label>
            <DateInput
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-2 pt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="w-full">
              Upload
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCertificate;
