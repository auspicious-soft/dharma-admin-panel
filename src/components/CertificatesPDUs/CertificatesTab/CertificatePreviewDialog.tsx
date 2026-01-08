"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
type CertificatePreviewDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageUrl?: string;
  userName?: string;
};

const CertificatePreviewDialog = ({
  open,
  onOpenChange,
  imageUrl,
  userName,
}: CertificatePreviewDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <VisuallyHidden>
            <DialogTitle>{userName}</DialogTitle>
          </VisuallyHidden>
          <VisuallyHidden>
            <DialogDescription></DialogDescription>
          </VisuallyHidden>
        </DialogHeader>

        <div className="flex justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${userName ?? "Certificate"} Certificate`}
              className="max-h-[70vh] w-auto rounded-md border"
            />
          ) : (
            <p className="text-sm text-muted-foreground">
              No certificate available
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificatePreviewDialog;
