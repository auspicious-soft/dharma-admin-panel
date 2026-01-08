import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EditAccess from "@/assets/edit-access.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ItemPurchased } from "./ItemPurchased.types";
import { Label } from "@/components/ui/label";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  file: ItemPurchased | null;
};

const EditAccessDialog = ({ open, onOpenChange, file }: Props) => {
  const [course, setCourse] = useState("");
  const [category, setCategory] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");
  const [price, setPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  /* ✅ SET DEFAULT VALUES WHEN FILE CHANGES */
  useEffect(() => {
    if (!file) return;

    setCourse(file.itemPurchased);
    setCategory(file.category);
    setSubscriptionType(file.type === "Paid" ? "Gold" : "");
    setPrice(file.amountPaid.replace("$", ""));
    setStartDate(formatDate(file.purchasedOn));
    setEndDate(formatDate(file.expiresOn));
  }, [file]);

  if (!file) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
       <DialogHeader className="gap-3">
          <img src={EditAccess} alt="Upload icon" className="max-w-[80px] md:max-w-[100px] m-auto" />
          <DialogTitle className="m-0 text-center text-black font-bold text-2xl md:text-3xl leading-[32px] md:leading-[46px]">Edit Access</DialogTitle>
        </DialogHeader>

         <div className="space-y-4">
          {/* Select Course */}
         <div className="space-y-1">
            <Label className="text-paragraph">Select Course</Label>
            <Select value={course} onValueChange={setCourse}>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={file.itemPurchased}>
                  {file.itemPurchased}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category */}
          <div className="space-y-1">
            <Label className="text-paragraph">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Subscription">Subscription</SelectItem>
                <SelectItem value="Mock Exam">Mock Exam</SelectItem>
                <SelectItem value="Practice">Practice</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Subscription Type & Price */}
           <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
           <div className="space-y-1">
              <Label className="text-paragraph">Subscription Type</Label>
              <Select
                value={subscriptionType}
                onValueChange={setSubscriptionType}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Gold">Gold</SelectItem>
                  <SelectItem value="Silver">Silver</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label className="text-paragraph">Price</Label>
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          {/* Dates */}
           <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
           <div className="space-y-1">
              <Label className="text-paragraph">Start Date</Label>
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

           <div className="space-y-1">
              <Label className="text-paragraph">End Date</Label>
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-2 pt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

           <Button type="submit" className="w-full">
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

/* 🔧 HELPER: mm/dd/yyyy → yyyy-mm-dd */
const formatDate = (date: string) => {
  const [month, day, year] = date.split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export default EditAccessDialog;
