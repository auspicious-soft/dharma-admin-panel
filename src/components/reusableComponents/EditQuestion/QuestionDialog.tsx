"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import EditQuestionIcon from "@/assets/edit-question-icon.png";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { BinMinusIn } from "iconoir-react";

/* ---------------- TYPES ---------------- */

type QuestionType = "mcq" | "drag" | "fill";

type MCQOption = {
  id: number;
  text: string;
  isCorrect: boolean;
};

type DragMatch = {
  left: string;
  right: string;
};

type FillOption = {
  id: number;
  text: string;
  blankIndex: number;
};

type Question = {
  id: number;
  question: string;
  type: QuestionType;
  options?: MCQOption[];
  matches?: DragMatch[];
  fillOptions?: FillOption[]; // ✅ FIX
  explanation: string;
};

type QuestionDialogProps = {
  mode: "add" | "edit";
  question?: Question;
  children: React.ReactNode;
};

/* ---------------- COMPONENT ---------------- */

const QuestionDialog = ({ mode, question, children }: QuestionDialogProps) => {
  const isEdit = mode === "edit";

  /* ---------------- STATE ---------------- */

  const [questionText, setQuestionText] = React.useState(
    question?.question || ""
  );
  const blankCount = (questionText.match(/#blank#/g) || []).length;

  const [imageFile, setImageFile] = React.useState<File | null>(null);

  const [explanationText, setExplanationText] = React.useState(
    question?.explanation || ""
  );

  const [questionType, setQuestionType] = React.useState<QuestionType | "">(
    question?.type || ""
  );

  const [options, setOptions] = React.useState<MCQOption[]>(
    question?.options || [
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
    ]
  );

  const addOption = () => {
    setOptions((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: "",
        isCorrect: false,
      },
    ]);
  };

  const removeOption = (id: number) => {
    setOptions((prev) => prev.filter((opt) => opt.id !== id));
  };

  const [matches, setMatches] = React.useState<DragMatch[]>(
    question?.matches || [
      { left: "", right: "" },
      { left: "", right: "" },
    ]
  );
  const addMatch = () => {
    setMatches((prev) => [...prev, { left: "", right: "" }]);
  };

  const removeMatch = (index: number) => {
    setMatches((prev) => prev.filter((_, i) => i !== index));
  };

  const [fillOptions, setFillOptions] = React.useState<FillOption[]>(
    question?.fillOptions || [
      { id: 1, text: "", blankIndex: 1 },
      { id: 2, text: "", blankIndex: 1 },
    ]
  );

  const addFillOption = () => {
    setFillOptions((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: "",
        blankIndex: 1,
      },
    ]);
  };

  const removeFillOption = (id: number) => {
    setFillOptions((prev) => prev.filter((o) => o.id !== id));
  };

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = () => {
    const payload = {
      question: questionText,
      type: questionType,
      explanation: explanationText,
      image: imageFile,

      options:
        questionType === "mcq"
          ? options.filter((o) => o.text.trim())
          : undefined,

      matches:
        questionType === "drag"
          ? matches.filter((m) => m.left && m.right)
          : undefined,

      fillOptions:
        questionType === "fill"
          ? fillOptions.filter((o) => o.text.trim())
          : undefined,
    };

    console.log(isEdit ? "UPDATE QUESTION" : "ADD QUESTION", payload);
  };

  /* ---------------- UI ---------------- */

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-3xl gap-4">
        <DialogHeader className="mb-5">
          <img
            src={EditQuestionIcon}
            alt="Edit Question icon"
            className="max-w-[80px] md:max-w-[100px] m-auto"
          />
          <DialogTitle className="text-black font-bold text-2xl md:text-3xl leading-[32px] md:leading-[46px] text-center !mt-3">
            {isEdit ? "Edit Question" : "Add New Question"}
          </DialogTitle>
          <DialogDescription className="text-center">
            Type in the option you want to display in the question.
          </DialogDescription>
        </DialogHeader>

        {/* Question Type */}
        <Select
          value={questionType}
          onValueChange={(v) => setQuestionType(v as QuestionType)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Question Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mcq">Multiple Choice Question</SelectItem>
            <SelectItem value="drag">Drag & Drop</SelectItem>
            <SelectItem value="fill">Fill in the blanks</SelectItem>
          </SelectContent>
        </Select>

        {/* Question */}
        <Textarea
          className="rounded-2xl"
          placeholder="Enter question"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          rows={3}
        />
        <div className="space-y-2">
          <Label>Upload Image</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              setImageFile(file);
            }}
          />
        </div>
        {/* ---------- MCQ ---------- */}
        {questionType === "mcq" && (
          <div className="space-y-2">
            <Label>Options</Label>

            {options.map((opt, index) => (
              <div key={opt.id} className="flex items-center gap-3">
                {/* Checkbox */}
                <input
                  type="checkbox"
                  className="accent-black size-5"
                  checked={opt.isCorrect}
                  onChange={() =>
                    setOptions((prev) =>
                      prev.map((o) =>
                        o.id === opt.id ? { ...o, isCorrect: !o.isCorrect } : o
                      )
                    )
                  }
                />

                {/* Input */}
                <Input
                  placeholder={`Option ${index + 1}`}
                  value={opt.text}
                  onChange={(e) =>
                    setOptions((prev) =>
                      prev.map((o) =>
                        o.id === opt.id ? { ...o, text: e.target.value } : o
                      )
                    )
                  }
                />

                {/* Delete (only after 4 options) */}
                {options.length > 2 && index >= 2 && (
                  <Button
                    type="button"
                    onClick={() => removeOption(opt.id)}
                    className="rounded-lg"
                    size="icon"
                    variant="destructive"
                  >
                    <BinMinusIn className="w-4" />
                  </Button>
                )}
              </div>
            ))}

            {/* Add New */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={addOption}
                className="text-primary_blue text-sm font-normal ml-auto"
              >
                + Add New
              </button>
            </div>
          </div>
        )}

        {/* ---------- DRAG & DROP ---------- */}
        {questionType === "drag" && (
          <div className="space-y-3">
            <Label>Drag & Drop Options</Label>

            {matches.map((pair, index) => (
              <div key={index} className="grid grid-cols-2 gap-3 items-center">
                <Input
                  placeholder="Type your text here"
                  value={pair.left}
                  onChange={(e) => {
                    const updated = [...matches];
                    updated[index].left = e.target.value;
                    setMatches(updated);
                  }}
                />

                <div className="flex gap-2 items-center">
                  <Input
                    placeholder="Type text to be matched"
                    value={pair.right}
                    onChange={(e) => {
                      const updated = [...matches];
                      updated[index].right = e.target.value;
                      setMatches(updated);
                    }}
                  />

                  {/* Delete (only after 4) */}

                  {matches.length > 2 && index >= 2 && (
                    <Button
                      type="button"
                      onClick={() => removeMatch(index)}
                      className="rounded-lg"
                      size="icon"
                      variant="destructive"
                    >
                      <BinMinusIn className="w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}

            {/* Add New */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={addMatch}
                className="text-primary_blue text-sm font-medium mt-2"
              >
                + Add New
              </button>
            </div>
          </div>
        )}

        {/* ---------- FILL IN THE BLANK ---------- */}
        {questionType === "fill" && (
          <div className="space-y-3">
            <Label>Options</Label>

            {fillOptions.map((opt, index) => (
              <div key={opt.id} className="flex items-center gap-3">
                {/* Blank selector */}
                <select
                  className="h-10 rounded-full border px-3 text-sm"
                  value={opt.blankIndex}
                  onChange={(e) =>
                    setFillOptions((prev) =>
                      prev.map((o) =>
                        o.id === opt.id
                          ? { ...o, blankIndex: Number(e.target.value) }
                          : o
                      )
                    )
                  }
                >
                  {Array.from({ length: blankCount || 1 }).map((_, i) => (
                    <option key={i} value={i + 1}>
                      #{i + 1}
                    </option>
                  ))}
                </select>

                {/* Answer input */}
                <Input
                  placeholder="Select #"
                  value={opt.text}
                  onChange={(e) =>
                    setFillOptions((prev) =>
                      prev.map((o) =>
                        o.id === opt.id ? { ...o, text: e.target.value } : o
                      )
                    )
                  }
                />

                {/* Delete (after 4 only) */}
                {fillOptions.length > 2 && index >= 2 && (
                  <Button
                    type="button"
                    onClick={() => removeFillOption(opt.id)}
                    className="rounded-lg"
                    size="icon"
                    variant="destructive"
                  >
                    <BinMinusIn className="w-4" />
                  </Button>
                )}
              </div>
            ))}

            {/* Add new */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={addFillOption}
                className="text-primary_blue text-sm font-medium mt-2"
              >
                + Add New
              </button>
            </div>
          </div>
        )}

        {/* Explanation */}
        <div className="space-y-2">
          <Label>Explanation</Label>
          <Textarea
            className="rounded-2xl"
            placeholder="Explain the correct answer"
            value={explanationText}
            onChange={(e) => setExplanationText(e.target.value)}
            rows={3}
          />
        </div>

        <DialogFooter className="grid grid-cols-2 gap-2 pt-4">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" onClick={handleSubmit}>
            {isEdit ? "Update Question" : "Add Question"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionDialog;
