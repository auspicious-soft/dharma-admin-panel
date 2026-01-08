import CourseSelect from "@/components/reusableComponents/CourseSelect";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SuccessfullyIcon from "@/assets/successfully-icon.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import RichTextEditor from "@/components/reusableComponents/RichTextEditor";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import QuestionSuccessDialog from "@/components/dialogs/QuestionSuccessDialog";

const AddFlashCard = () => {
  const { id } = useParams<{ id?: string }>();
  const isEdit = Boolean(id);
  const [frontValue, setFrontValue] = React.useState("");
  const [backValue, setBackValue] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSaveChanges = () => {
    // Here you can add your save logic
    // For now, we'll just open the success dialog
    setIsDialogOpen(true);
  };
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <h2 className="text-2xl font-bold">
          {isEdit ? "Edit Flash Card" : "Add Flash Card"}
        </h2>
        <CourseSelect />
      </div>

      <div className="bg-light-blue rounded-2xl p-4 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select A Flash Card Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Category1">Category 1</SelectItem>
              <SelectItem value="Category2">Category 2</SelectItem>
            </SelectContent>
          </Select>
          <Input className="flex-1" type="number" placeholder="Enter Price" />
        </div>

        <div className="space-y-1">
          <Label className="text-paragraph">Front</Label>
          <div className="rounded-2xl p-4 space-y-4 pt-0 border border-[#dddddd]">
            <RichTextEditor value={frontValue} onChange={setFrontValue} />
            <div className="space-y-2">
              <Label className="text-paragraph">Upload Image</Label>
              <Input type="file" />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-paragraph">Back</Label>
          <div className="rounded-2xl p-4 pt-0 space-y-4 border border-[#dddddd]">
            <RichTextEditor value={backValue} onChange={setBackValue} />
            <div className="space-y-2">
              <Label className="text-paragraph">Upload Image</Label>
              <Input type="file" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pt-2 max-w-xl ml-auto w-full ">
        <Button variant="outline">Cancel</Button>
        <Button type="submit" className="w-full" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </div>
      {/* Success Dialog */}
      <QuestionSuccessDialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        icon={SuccessfullyIcon}
        title="Saved Successfully"
      />
    </div>
  );
};

export default AddFlashCard;
