"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import AddCertificateIcon from "@/assets/add-certificate.png";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FileUploadInput from "@/components/reusableComponents/FileUploadInput";

type TemplatesDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "add" | "edit";
};

const TemplatesDialog = ({
  open,
  onOpenChange,
  mode,
}: TemplatesDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl gap-7">
        <DialogHeader className="gap-3">
          <img
            src={AddCertificateIcon}
            alt="Certificate Icon"
            className="max-w-[80px] md:max-w-[100px] m-auto"
          />
          <DialogTitle className="m-0 text-center text-black font-bold text-2xl md:text-3xl leading-[32px] md:leading-[46px]">
            {mode === "add"
              ? "Add Certificate Template"
              : "Edit Certificate Template"}
          </DialogTitle>
          <VisuallyHidden>
            <DialogDescription className="text-Black text-xl font-bold text-center !mt-[-10px]">
              (Project Management Professional)
            </DialogDescription>
          </VisuallyHidden>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 w-full">
            <div className="space-y-1 w-full">
              <Label className="text-paragraph">Name of Template*</Label>
              <Input type="text" placeholder="Type Name of the Template" />
            </div>
            <div className="space-y-1 w-full">
              <Label className="text-paragraph">Random Questions</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Active/Inactive" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1 w-full">
            <Label className="text-paragraph">Course/Program Name*</Label>
            <Input type="text" placeholder="Type Name of the Course/Program" />
          </div>
          <div className="space-y-1 w-full">
            <Label className="text-paragraph">PDU Claim Code</Label>
            <Input type="text" placeholder="Type PDU Claim Code" />
          </div>
          <div className="space-y-1 w-full">
            <Label className="text-paragraph">Delivery Format</Label>
            <Input type="text" placeholder="Type Delivery Format" />
          </div>
          <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 w-full">
            <div className="space-y-1 w-full">
              <Label className="text-paragraph">Total PDUs Claimable</Label>
              <Input type="text" placeholder="Type explanation here" />
            </div>
            <div className="space-y-1 w-full">
              <Label className="text-paragraph">
                Total Contact Hours eligible
              </Label>
              <Input type="text" placeholder="Type explanation here" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 w-full p-2 lg:p-4 border border-[#E9E9E9] rounded-2xl">
            <div className="space-y-1 w-full">
              <Label className="text-paragraph">Variable 1</Label>
              <Input type="text" placeholder="Type explanation here" />
            </div>
            <div className="space-y-1 w-full">
              <Label className="text-paragraph">Value</Label>
              <Input type="text" placeholder="Enter Value" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 w-full p-2 lg:p-4 border border-[#E9E9E9] rounded-2xl">
            <div className="space-y-1 w-full">
              <Label className="text-paragraph">Variable 2</Label>
              <Input type="text" placeholder="Type explanation here" />
            </div>
            <div className="space-y-1 w-full">
              <Label className="text-paragraph">Value</Label>
              <Input type="text" placeholder="Enter Value" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 w-full p-2 lg:p-4 border border-[#E9E9E9] rounded-2xl">
            <div className="space-y-1 w-full">
              <Label className="text-paragraph">Variable 3</Label>
              <Input type="text" placeholder="Type explanation here" />
            </div>
            <div className="space-y-1 w-full">
              <Label className="text-paragraph">Value</Label>
              <Input type="text" placeholder="Enter Value" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 w-full">
            <div className="space-y-1 w-full">
              <Label className="text-paragraph">Name of Trainer</Label>
              <Input type="text" placeholder="Type Name Here" />
            </div>
            <div className="space-y-1 w-full">
              <Label className="text-paragraph">Signature of Trainer</Label>
              <FileUploadInput placeholder="Select file"/>
            </div>
          </div>

          <div className="space-y-1 w-full">
            <Label className="text-paragraph">PMI ATP</Label>
            <Input type="text" placeholder="Type Name Here" />
          </div>
          <div className="space-y-1 w-full">
            <Label className="text-paragraph">ATP Name</Label>
            <Input type="text" placeholder="Type Name Here" />
          </div>
          <div className="space-y-1 w-full">
            <Label className="text-paragraph">PMI Logo</Label>
            <Input type="text" placeholder="PMI Logo" />
          </div>
          <div className="space-y-1 w-full">
            <Label className="text-paragraph">Issuing Company Name</Label>
            <Input type="text" placeholder="Type Name Here" />
          </div>
          <div className="space-y-1 w-full">
            <Label className="text-paragraph">Company Logo</Label>
            <FileUploadInput placeholder="Select file"/>
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

export default TemplatesDialog;
