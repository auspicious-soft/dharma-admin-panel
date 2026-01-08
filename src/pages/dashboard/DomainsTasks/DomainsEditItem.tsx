import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import SuccessfullyIcon from "@/assets/successfully-icon.png";
import FlowDiagram from "@/assets/flowdiagram.jpg";
import DomainTaskCard from "@/components/reusableComponents/DomainTaskCard";
import CourseSelect from "@/components/reusableComponents/CourseSelect";

/* ================= TYPES ================= */

interface Task {
  id: string;
  order: string;
  label: string;
  taskName: string;
  details: string;
  examples: string;
  keywords: string;
  flowDiagramUrl?: File | string;
  questionnaire: File | null;
}

interface Section {
  id: string;
  tasks: Task[];
}

/* ================= COMPONENT ================= */

const DomainsEditItem = () => {
  const { id } = useParams<{ id: string }>();

  const [successOpen, setSuccessOpen] = useState(false);

  /* ================= TASK STATE (EDIT ONLY) ================= */

  const [sections, setSections] = useState<Section[]>([
    {
      id: "section-1",
      tasks: [
        {
          id: id || "task-1",
          order: "1",
          label: "Task Label",
          taskName: "Existing Task Name",
          details: "",
          examples: "",
          keywords: "",
          flowDiagramUrl: FlowDiagram,
          questionnaire: null,
        },
      ],
    },
  ]);

  /* ================= HELPERS ================= */

  const updateTask = <K extends keyof Task>(
    taskId: string,
    field: K,
    value: Task[K]
  ) => {
    setSections((prev) =>
      prev.map((s) => ({
        ...s,
        tasks: s.tasks.map((t) =>
          t.id === taskId ? { ...t, [field]: value } : t
        ),
      }))
    );
  };

  const handleSave = () => {
    console.log({
      mode: "EDIT",
      taskId: id,
      updatedTask: sections[0].tasks[0],
    });

    setSuccessOpen(true);
  };

  /* ================= UI ================= */

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <h2 className="text-2xl font-bold">Edit Task</h2>
        <CourseSelect />
      </div>

      {sections[0].tasks.map((task) => (
        <div key={task.id}>
          <DomainTaskCard task={task} isEdit={true} updateTask={updateTask} />
        </div>
      ))}

      {/* Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pt-2 max-w-xl ml-auto w-full ">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>

      {/* Success Dialog */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="max-w-2xl gap-7">
          <DialogHeader className="gap-7">
            <img
              src={SuccessfullyIcon}
              className="max-w-[80px] md:max-w-[100px] m-auto"
            />
            <DialogTitle className="text-center text-2xl text-Black md:text-3xl">
              Saved Successfully
            </DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setSuccessOpen(false)} className="w-full">
              Okay
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DomainsEditItem;
