import { BinMinusIn, EditPencil, Eye } from "iconoir-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmDialog from "@/components/dialogs/ConfirmDialog";

type DataTableActionsProps = {
  viewPath?: string;
  editPath?: string;

  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

const DataTableActions = ({
  viewPath,
  editPath,
  onView,
  onEdit,
  onDelete,
}: DataTableActionsProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleView = () => {
    if (onView) return onView();
    if (viewPath) navigate(viewPath);
  };

  const handleEdit = () => {
    if (onEdit) return onEdit();
    if (editPath) navigate(editPath);
  };

  return (
    <>
      <div className="flex gap-2">
        {/* VIEW */}
        {(onView || viewPath) && (
          <Button
            className="rounded-lg"
            size="icon"
            onClick={handleView}
          >
            <Eye className="h-4 w-4" />
          </Button>
        )}

        {/* EDIT */}
        {(onEdit || editPath) && (
          <Button
            className="rounded-lg"
            size="icon"
            onClick={handleEdit}
          >
            <EditPencil className="h-4 w-4" />
          </Button>
        )}

        {/* DELETE */}
        {onDelete && (
          <Button
            className="rounded-lg"
            size="icon" 
            variant="destructive"
            onClick={() => setOpen(true)}
          >
            <BinMinusIn className="h-4 w-4" />
          </Button>
        )}
      </div>

      <ConfirmDialog
        open={open}
        title="Delete?"
        description="Are you sure you want to delete this? This action cannot be undone."
        onCancel={() => setOpen(false)}
        onConfirm={() => {
          onDelete?.();
          setOpen(false);
        }}
      />
    </>
  );
};

export default DataTableActions;
