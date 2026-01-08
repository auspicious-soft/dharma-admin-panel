import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SuccessfullyIcon from "@/assets/successfully-icon.png";
import QuestionsField from "@/components/reusableComponents/EditQuestion/QuestionsField";
import CourseSelect from "@/components/reusableComponents/CourseSelect";
import QuestionSuccessDialog from "@/components/dialogs/QuestionSuccessDialog";

const QuestionsView = () => {
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
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <h2 className="text-2xl font-bold">Edit Questions</h2>
        <CourseSelect />
      </div>

      {/* Upload Files Section */}
      <div className="flex flex-col p-4 bg-blue-50 rounded-[20px] gap-4">
        <QuestionsField />
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

export default QuestionsView;
