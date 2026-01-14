import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import RichTextEditor from "@/components/reusableComponents/RichTextEditor";
import FileUploadInput from "./FileUploadInput";

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

interface DomainTaskCardProps {
  task: Task;
  isEdit: boolean;
  updateTask: <K extends keyof Task>(
    taskId: string,
    field: K,
    value: Task[K]
  ) => void;
}

const DomainTaskCard: React.FC<DomainTaskCardProps> = ({
  task,
  isEdit,
  updateTask,
}) => {
  return (
    <div className="bg-light-blue rounded-2xl p-4 space-y-4">
      {/* Top Row */}
      <div className="flex flex-wrap gap-3 items-center">
        <Select
          value={task.order}
          onValueChange={(v) => updateTask(task.id, "order", v)}
        >
          <SelectTrigger className="lg:w-[140px]">
            <SelectValue placeholder="Select #" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
          </SelectContent>
        </Select>

        <Input
          className="lg:w-[190px]"
          placeholder="Label of task"
          value={task.label}
          onChange={(e) => updateTask(task.id, "label", e.target.value)}
        />

        <Input
          className="flex-1"
          placeholder="Name of task"
          value={task.taskName}
          onChange={(e) => updateTask(task.id, "taskName", e.target.value)}
        />
      </div>

      <div className="md:space-y-3 lg:pl-7">
        <div className="rounded-2xl p-4 space-y-4 border border-[#dddddd]">
          {/* Task Details */}
          <div className="space-y-1">
            <Label className="text-paragraph">Task Details</Label>
            <RichTextEditor
              value={task.details}
              onChange={(v) => updateTask(task.id, "details", v)}
            />
          </div>

          {/* Flow Diagram */}
          <div className="space-y-1">
            <Label className="text-paragraph">Flow Diagram</Label>

            {isEdit && task.flowDiagramUrl && (
              <div>
                <img
                  src={
                    typeof task.flowDiagramUrl === "string"
                      ? task.flowDiagramUrl
                      : URL.createObjectURL(task.flowDiagramUrl)
                  }
                  alt="Flow Diagram"
                  className="rounded-md"
                />
              </div>
            )}
            <FileUploadInput
              placeholder="Select file"
              accept="image/*"
              onFileChange={(file) =>
                updateTask(task.id, "flowDiagramUrl", file ?? undefined)
              }
            />
          </div>

          {/* Examples */}
          <div className="space-y-1">
            <Label className="text-paragraph">Examples</Label>
            <RichTextEditor
              value={task.examples}
              onChange={(v) => updateTask(task.id, "examples", v)}
            />
          </div>

          {/* Keywords */}
          <div className="space-y-1">
            <Label className="text-paragraph">Keywords</Label>
            <RichTextEditor
              value={task.keywords}
              onChange={(v) => updateTask(task.id, "keywords", v)}
            />
          </div>

          {/* Questionnaire */}
          {isEdit ? (
            <div className="flex justify-between items-start flex-col gap-2 pb-2">
              <Label className="text-paragraph">Questionnaire CSV</Label>
              <div className="flex gap-2 w-full justify-between items-center">
                <Button variant="link">View Questionnaire</Button>
                <Button variant="link">Replace CSV</Button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-start flex-col gap-2 pb-2">
              <Label className="text-paragraph">Questionnaire CSV</Label>
              <div className="flex gap-2 w-full items-start lg:items-center flex-col md:flex-row">
                <FileUploadInput
                  placeholder="Select file"
                  accept="image/*"
                  onFileChange={(file) =>
                    updateTask(task.id, "questionnaire", file)
                  }
                />

                <Button className="rounded-[10px] !text-xs font-medium !py-2 bg-paragraph !px-5">
                  Download Sample
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DomainTaskCard;
