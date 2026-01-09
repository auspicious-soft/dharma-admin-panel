import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RatingsReviewsType } from "./ratingsReviewsType";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import StarFilled from "@/assets/star-filled.png";
import StarEmpty from "@/assets/star-empty.png";

interface RatingsReviewsDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editData: RatingsReviewsType | null;
}

const RatingsReviewsDialog: React.FC<RatingsReviewsDialogProps> = ({
  open,
  setOpen,
  editData,
}) => {
  const [rating, setRating] = useState<number>(editData?.rating || 0);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xl gap-6 rounded-2xl">
        <DialogHeader className="gap-2">
          <DialogTitle className="tracking-tight m-0 text-center text-black font-bold text-2xl md:text-3xl leading-[32px] md:leading-[46px]">
            {editData ? "Edit Review" : "Rate This Product"}
          </DialogTitle>
          <VisuallyHidden>
            <DialogDescription />
          </VisuallyHidden>
        </DialogHeader>

        {/* Rating Stars */}
        <div className="flex justify-center gap-[8px] star-custom">
          {[1, 2, 3, 4, 5].map((star) => (
            <img
              key={star}
              src={star <= rating ? StarFilled : StarEmpty}
              alt="star"
              className="w-[34px] h-[34px] cursor-pointer transition-transform hover:scale-110"
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        {/* Form */}
        <div className="space-y-4 mt-3">
          <Select>
            <SelectTrigger >
              <SelectValue placeholder="Select Course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="course1">Course 1</SelectItem>
              <SelectItem value="course2">Course 2</SelectItem>
            </SelectContent>
          </Select>

          <Input type="text" placeholder="Name of User" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Input type="text" placeholder="Company" />
            <Input type="text" placeholder="Title" />
          </div>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gmail">From Gmail</SelectItem>
              <SelectItem value="linkedin">From LinkedIn</SelectItem>
              <SelectItem value="website">Website</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="course1">Course 1</SelectItem>
              <SelectItem value="course2">Course 2</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Write your feedback"
            className="min-h-[112px]"
          />
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          <DialogClose asChild>
            <Button variant="outline" className="rounded-full h-12">
              Cancel
            </Button>
          </DialogClose>

          <Button className="rounded-full h-12">Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RatingsReviewsDialog;
