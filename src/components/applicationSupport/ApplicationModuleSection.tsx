import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Module } from "../applicationSupport/applicationtypes";
import { contentIconMap } from "../applicationSupport/applicationContentIcons";
import ApplicationModuleIcon from "@/assets/application-module.png";
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

export const ApplicationModuleSection = ({
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

  return (
    <div className="space-y-[6px]">
      {/* Header */}
      <div className="flex items-center justify-between bg-light-blue rounded-lg pl-2 pr-4 py-2">
        <Link
          to={`/application-support/edit-application-support/${module.id}`}
          className="flex-1 underline-offset-1 hover:underline"
        >
          <div className="flex items-center gap-[10px]">
            <img src={ApplicationModuleIcon} alt="Application Module icon" className="max-w-[32px]" />
            <div className="flex flex-col  gap-1">
              <h3 className="self-stretch justify-start text-black text-base font-semibold">
                {module.title}
              </h3>
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
          {module.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-[#dce5ed] py-2 last:border-b-0"
            >
              <div className="flex items-center gap-[10px]">
                {contentIconMap[item.type]}
                <div className="flex flex-col  gap-1">
                  <h3 className="self-stretch justify-start text-paragraph text-sm font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() =>
                    navigate(`/application-support/edit-application-task/${module.id}/${item.id}`) 
                  }
                  className="rounded-lg"
                  size="icon"
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
