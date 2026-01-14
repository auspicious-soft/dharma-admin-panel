"use client";

import * as React from "react";
import { Upload } from "iconoir-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import UploadIcon from "@/assets/upload-icon.png"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import FileUploadInput from "../reusableComponents/FileUploadInput";

const UploadFileDialog = () => {
  return (
    <Dialog>

      <DialogTrigger asChild>
        <Button variant="secondary" className="h-[44px] flex items-center gap-1 md:gap-2">
          <Upload className="w-4 h-4" />
          Upload File
        </Button>
      </DialogTrigger>

      {/* Dialog */}
      <DialogContent className="max-w-2xl gap-7">
        <DialogHeader className="gap-3">
          <img src={UploadIcon} alt="Upload icon" className="max-w-[80px] md:max-w-[100px] m-auto" />
          <DialogTitle className="m-0 text-center text-black font-bold text-2xl md:text-3xl leading-[32px] md:leading-[46px]">Upload File</DialogTitle>
           <VisuallyHidden>
        <DialogDescription></DialogDescription>
        </VisuallyHidden>
        </DialogHeader>

        {/* Dialog Body */}
        <div className="space-y-4">
         <div className="space-y-1">
            <Select defaultValue="Active">
              <SelectTrigger>
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Select Course</SelectItem>
                <SelectItem value="Deactive">PgMP</SelectItem>
                <SelectItem value="Deactive">PgMP1</SelectItem>
              </SelectContent>
            </Select>
          </div>
           <div className="space-y-1">
            <Select defaultValue="Active">
              <SelectTrigger>
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Category</SelectItem>
                <SelectItem value="Deactive">PDF</SelectItem>
                <SelectItem value="Deactive">Video</SelectItem>
                <SelectItem value="Deactive">Image</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
             <FileUploadInput placeholder="Select"/>
          </div>

          <div className="space-y-1">
            <Input id="file-name" placeholder="File Name" />
           
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button className="w-full">Upload</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadFileDialog;
