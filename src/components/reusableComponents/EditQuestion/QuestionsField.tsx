import {
  BinMinusIn,
  EditPencil,
  InfoCircle,
  NavArrowDown,
  NavArrowUp,
} from "iconoir-react";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ConfirmDialog from "@/components/dialogs/ConfirmDialog";
import TableSearch from "@/components/reusableComponents/TableSearch";
import QuestionDialog from "./QuestionDialog";
import { Button } from "@/components/ui/button";
import QuestionViewImageDialog from "./QuestionViewImageDialog";

/* ================= TYPES ================= */

export type QuestionType = "mcq" | "drag" | "fill";

export type Option = {
  id: number;
  text: string;
  isCorrect: boolean;
};

export type FillOption = {
  [x: string]: unknown;
  id: number;
  text: string;
  blankIndex: number;
};

export type DragMatch = {
  left: string;
  right: string;
};

export type Question = {
  id: number;
  question: string;
  type: QuestionType;
  options?: Option[];
  matches?: DragMatch[];
  fillOptions?: FillOption[];
  maxSelections: number;
  explanation: string;
};

/* ================= DATA ================= */

const questionsData: Question[] = [
  {
    id: 1,
    type: "mcq",
    question: "Which are JavaScript frameworks?",
    options: [
      { id: 1, text: "React", isCorrect: true },
      { id: 2, text: "Angular", isCorrect: true },
      { id: 3, text: "HTML", isCorrect: false },
      { id: 4, text: "CSS", isCorrect: false },
    ],
    maxSelections: 2,
    explanation: "React and Angular are JS frameworks/libraries.",
  },
  {
    id: 2,
    type: "drag",
    question: "Match the following",
    matches: [
      { left: "React", right: "Library" },
      { left: "Angular", right: "Framework" },
      { left: "Vue", right: "Framework" },
    ],
    maxSelections: 3,
    explanation: "Correct mapping of technologies.",
  },
  {
    id: 3,
    type: "fill",
    question: "React is developed by ____",
    fillOptions: [
      { id: 1, text: "Google", blankIndex: 0 },
      { id: 2, text: "Facebook", blankIndex: 0 },
      { id: 3, text: "Microsoft", blankIndex: 0 },
      { id: 4, text: "Amazon", blankIndex: 0 },
    ],
    maxSelections: 1,
    explanation: "React was created by Facebook.",
  },
];

/* ================= COMPONENT ================= */

const QuestionsField = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(1);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<number | null>(null);

  return (
    <div className="p-4 lg:p-5 bg-white rounded-[10px] flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-end gap-3">
        <TableSearch />
        <QuestionDialog mode="add">
          <Button variant="secondary" className="h-[44px]">
            Add New Question
          </Button>
        </QuestionDialog>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questionsData.map((q, index) => {
          const isOpen = openQuestion === q.id;

          return (
            <div
              key={q.id}
              className="border border-[#556378]/50 p-4 rounded-lg flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <h3 className="text-paragraph text-bas font-medium">
                  Q{index + 1}
                </h3>

                <div className="flex items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="px-4 py-1 bg-black text-white rounded-full text-xs flex items-center gap-2">
                        <InfoCircle /> Show Instructions
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Question instructions</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Edit */}
                  <QuestionDialog mode="edit" question={q}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="!p-0 w-[30px] h-[30px] flex items-center justify-center rounded-lg"
                    >
                      <EditPencil />
                    </Button>
                  </QuestionDialog>

                  {/* Delete */}
                  <Button
                    onClick={() => {
                      setDeleteTarget(q.id);
                      setConfirmDialogOpen(true);
                    }}
                    className="rounded-lg"
                    size="icon"
                    variant="destructive"
                  >
                    <BinMinusIn className="w-4" />
                  </Button>

                  {/* Toggle */}
                  <button onClick={() => setOpenQuestion(isOpen ? null : q.id)}>
                    {isOpen ? (
                      <NavArrowUp className="size-4" />
                    ) : (
                      <NavArrowDown className="size-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Question */}
              <p className="self-stretch justify-start text-paragraph text-sm lg:text-base font-medium ">
                {q.question}
              </p>

              <div className="flex items-center justify-between">
                <span className="py-[7px] px-3 lg:px-4 bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-paragraph inline-flex items-center justify-start text-paragraph text-xs font-medium">
                  Max Selections: {q.maxSelections}{" "}
                </span>
                <QuestionViewImageDialog />{" "}
              </div>

              {/* ===== DETAILS ===== */}
              {isOpen && (
                <div className="space-y-2">
                  {q.type === "mcq" && q.options && (
                    <>
                      {/* OPTIONS */}
                      {q.options.map((opt, i) => (
                        <div
                          key={opt.id}
                          className="flex items-center gap-3 px-4 py-[13px] bg-[#f0f8ff] rounded-[10px]"
                        >
                          <input
                            type="checkbox"
                            className="accent-black size-4"
                            checked={opt.isCorrect}
                            readOnly
                          />
                          <span className="text-sm font-medium">
                            {String.fromCharCode(65 + i)}. {opt.text}
                          </span>
                        </div>
                      ))}

                      {/* CORRECT ANSWER */}
                      <div className="!mt-7 px-4 py-2 bg-[#d2ffc9] rounded-lg inline-flex justify-center items-center gap-2.5 text-Desc-464646 text-sm font-medium">
                        Correct Answer:{" "}
                        {q.options
                          .map((opt, i) =>
                            opt.isCorrect ? String.fromCharCode(65 + i) : null
                          )
                          .filter(Boolean)
                          .join(", ")}
                      </div>
                    </>
                  )}

                  {/* DRAG */}
                  {q.type === "drag" &&
                    q.matches?.map((m, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-2 bg-blue-50 p-2 rounded-lg"
                      >
                        <span>{m.left}</span>
                        <span className="text-right">{m.right}</span>
                      </div>
                    ))}

                  {/* FILL */}
                  {q.type === "fill" && (
                    <div className="space-y-2">
                      {q.fillOptions
                        ?.filter((o) => o.isCorrect)
                        .map((o) => (
                          <div
                            key={o.id}
                            className="!mt-3 px-4 py-2 bg-[#d2ffc9] rounded-lg inline-flex justify-center items-center gap-2.5 text-Desc-464646 text-sm font-medium"
                          >
                            Correct Answer: <b>{o.text}</b>
                          </div>
                        ))}
                    </div>
                  )}

                  {/* Explanation */}
                  {q.explanation && (
                    <p className="text-sm !mt-7">
                      <b>Explanation:</b> {q.explanation}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Confirm Delete */}
      <ConfirmDialog
        open={confirmDialogOpen}
        title="Delete Question?"
        description="This action cannot be undone."
        onCancel={() => setConfirmDialogOpen(false)}
        onConfirm={() => {
          console.log("Delete question id:", deleteTarget);
          setConfirmDialogOpen(false);
        }}
      />
    </div>
  );
};

export default QuestionsField;
