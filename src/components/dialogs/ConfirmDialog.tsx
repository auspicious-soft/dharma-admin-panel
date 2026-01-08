import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";
import { Loader2, Trash2 } from "lucide-react";

type ConfirmDialogProps = {
  open: boolean;
  title?: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmDialog = ({
  open,
  title = "Are you sure?",
  description = "Are you sure you want to delete this? This action cannot be undone.",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirm = () => {
    setIsProcessing(true);
    onConfirm();

    // Auto close after 1.5 seconds
    setTimeout(() => {
      setIsProcessing(false);
      onCancel();
    }, 1500);
  };

  // Reset state when dialog closes
  useEffect(() => {
    if (!open) {
      setIsProcessing(false);
    }
  }, [open]);

  return (
    <AlertDialog open={open} onOpenChange={onCancel}>
      <AlertDialogContent className="text-center gap-0">
               <div className="flex m-auto items-center justify-center w-24 h-24 rounded-full bg-[#F34235]">
                <Trash2 className="w-14 h-14 text-white" />
              </div>
        <AlertDialogHeader>
          {!isProcessing ? (
            <>
              <AlertDialogTitle className="text-center justify-start text-Black text-3xl font-bold capitalize leading-[65px]">{title}</AlertDialogTitle>
              <AlertDialogDescription className="text-center justify-start text-paragraph text-base leading-6">
                {description}
              </AlertDialogDescription>
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 py-6">
              {/* Loading indicator */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </div>
            </div>
          )}
        </AlertDialogHeader>

        {!isProcessing && (
          <AlertDialogFooter className="mt-7">
            <AlertDialogCancel
            className="flex-1 border-primary_blue !text-primary_blue"
            onClick={onCancel}
            >
              No
            </AlertDialogCancel>
            <AlertDialogAction 
            className="px-11"
            onClick={handleConfirm}>
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDialog;
