import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Module } from "./types";
import DomainModuleIcon from "@/assets/domain-module-icon.png";
import DomainQuestionIcon from "@/assets/domain-question-icon.png";
import { BinMinusIn, EditPencil } from "iconoir-react";
import ConfirmDialog from "../dialogs/ConfirmDialog";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
interface Props {
  module: Module;
  defaultOpen?: boolean;
  onDeleteModule?: (id: string) => void;
  onEditItem?: (id: string) => void;
  onDeleteItem?: (id: string) => void;
}

export const DomainsModuleSection = ({
  module,
  defaultOpen = false,
  onDeleteModule,
  onDeleteItem,
}: Props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(defaultOpen);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{
    type: "module" | "item";
    id: string;
  } | null>(null);

  const moduleShortCode = module.title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="space-y-[6px]">
      {/* Header */}
      <div className="flex items-center justify-between bg-light-blue rounded-lg pl-2 pr-4 py-2">
        <Link to={`/domains-tasks/add-domains/${module.id}`} className="flex-1 underline-offset-1 hover:underline">
          <div className="flex items-center gap-[10px]">
            <img
              src={DomainModuleIcon}
              alt="Doamin Module icon"
              className="max-w-[32px]"
            />
            <div className="flex flex-col  gap-1">
              <h3 className="self-stretch justify-start text-black text-base font-semibold">
                {module.title}
              </h3>
              <p className="justify-start text-paragraph text-xs font-medium flex flex-wrap gap-1">
                {module.task} Task
              </p>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => {
              setDeleteTarget({ type: "module", id: module.id });
              setConfirmDialogOpen(true);
            }}
            className="rounded-lg"
            size="icon"
            variant="destructive"
            
          >
            <BinMinusIn className="w-4" />
          </Button>

          <button onClick={() => setOpen(!open)} className="text-gray-600">
            {open ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </div>

      {/* Content */}
      {open && (
        <div className="space-y-2 pl-2.5 px-2 bg-light-blue rounded-lg">
          {module.items.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-[#dce5ed] py-2 last:border-b-0"
            >
              <div className="flex items-center gap-[10px]">
                <img
                  src={DomainQuestionIcon}
                  alt="Doamin Question icon"
                  className="max-w-[32px]"
                />
                <div className="flex flex-col  gap-1">
                  <p className="justify-start text-paragraph text-xs font-medium flex flex-wrap gap-1">
                    {moduleShortCode} {index + 1}{" "}
                  </p>
                  <h3 className="self-stretch justify-start text-black text-base font-semibold truncate max-w-[330px]">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    navigate(
                      `/domains-tasks/edit-domains-questions/${module.id}`
                    )
                  }
                  className="justify-start text-paragraph text-xs font-medium underline"
                >
                  View Questionnaire
                </button>

                <Button
                  className="rounded-lg"
                  size="icon"
                  key={item.id}
                  onClick={() =>
                    navigate(
                      `/domains-tasks/domain-edit-item/${module.id}/${item.id}`,
                      {
                        state: { title: item.title },
                      }
                    )
                  }
                >
                  <EditPencil className="w-4" />
                </Button>

                <Button
                  onClick={() => {
                    setDeleteTarget({ type: "item", id: item.id });
                    setConfirmDialogOpen(true);
                  }}
                  className="rounded-lg"
                  size="icon"
                  variant="destructive"
                >
                  <BinMinusIn className="w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      <ConfirmDialog
        open={confirmDialogOpen}
        title="Delete?"
        description="Are you sure you want to delete this? This action cannot be undone."
        onCancel={() => {
          setConfirmDialogOpen(false);
          setDeleteTarget(null);
        }}
        onConfirm={() => {
          if (deleteTarget?.type === "module") {
            onDeleteModule?.(deleteTarget.id);
          }

          if (deleteTarget?.type === "item") {
            onDeleteItem?.(deleteTarget.id);
          }

          setConfirmDialogOpen(false);
          setDeleteTarget(null);
        }}
      />
    </div>
  );
};
