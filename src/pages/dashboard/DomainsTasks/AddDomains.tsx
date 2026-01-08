import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BinMinusIn } from "iconoir-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
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

const AddEditDomain = () => {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  /* ================= DOMAIN STATE ================= */

  const [domainName, setDomainName] = useState(
    isEdit ? "Project Management Professional" : ""
  );
  const [price, setPrice] = useState(isEdit ? "2500" : "");
  const [successOpen, setSuccessOpen] = useState(false);

  /* ================= TASK STATE ================= */

  const [sections, setSections] = useState<Section[]>([
    {
      id: "section-1",
      tasks: [
        {
          id: "task-1",
          order: "",
          label: "",
          taskName: "",
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

  const addTask = () => {
    setSections((prev) =>
      prev.map((s) => ({
        ...s,
        tasks: [
          ...s.tasks,
          {
            id: Date.now().toString(),
            order: "",
            label: "",
            taskName: "",
            details: "",
            examples: "",
            keywords: "",
            flowDiagram: null,
            questionnaire: null,
          },
        ],
      }))
    );
  };

  const removeTask = (taskId: string) => {
    setSections((prev) =>
      prev.map((s) => ({
        ...s,
        tasks: s.tasks.filter((t) => t.id !== taskId),
      }))
    );
  };

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
      mode: isEdit ? "EDIT" : "ADD",
      domainName,
      price,
      tasks: sections[0].tasks,
    });
    setSuccessOpen(true);
  };

  /* ================= UI ================= */

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between flex-wrap gap-4 ">
        <h2 className="text-2xl font-bold">
          {isEdit ? "Edit Domain" : "Add Domain"}
        </h2>
     <CourseSelect />
      </div>

      {/* Domain Inputs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label>Domain Name</Label>
          <Input
            placeholder="Name of Domain"
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Price</Label>
          <Input
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      {/* Tasks */}
      {sections[0].tasks.map((task, index) => (
        <div key={task.id}>
          <div className="flex flex-wrap gap-3 items-center justify-between mb-2">
            <div className="justify-start text-paragraph text-sm font-normal ">
              Task {index + 1}
            </div>
            {sections[0].tasks.length > 1 && (
              <Button
                size="sm"
                className=" !bg-[#f50927] rounded-md text-white transition-colors !p-[7.50px] !text-xs !max-w-[90px]"
                onClick={() => removeTask(task.id)}
              >
                <BinMinusIn className="w-4 h-4 mr-1" />
                Remove
              </Button>
            )}
          </div>

       <DomainTaskCard
  task={task}
  isEdit={isEdit}
  updateTask={updateTask}
/>
        </div>
      ))}

      {/* Add Task */}
      <div className="flex justify-end">
        <Button
          variant="secondary"
          className="h-[44px] flex items-center gap-1 md:gap-2"
          onClick={addTask}
        >
          Add New Task
        </Button>
      </div>

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

export default AddEditDomain;
