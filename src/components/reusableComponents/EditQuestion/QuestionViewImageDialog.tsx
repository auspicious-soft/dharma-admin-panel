"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuestionImage from "@/assets/login-banner.jpg";

const QuestionViewImageDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-paragraph hover:bg-black rounded text-white !text-xs font-medium !px-[18px] !py-[9px]">
          View Image
        </Button>
      </DialogTrigger>

      {/* Dialog */}
      <DialogContent className="max-w-2xl gap-7">
        <DialogHeader />

        {/* Dialog Body */}
        <div className="space-y-4">
          <img src={QuestionImage} alt="Question Image" className="w-full" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionViewImageDialog;
