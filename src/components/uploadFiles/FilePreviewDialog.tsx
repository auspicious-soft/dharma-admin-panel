import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { FileItem } from "./uploadFiles.data";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  file: FileItem | null;
};

const   FilePreviewDialog = ({ open, onOpenChange, file }: Props) => {
  if (!file) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{file.name}</DialogTitle>
        </DialogHeader>
        <VisuallyHidden>
        <DialogDescription></DialogDescription>
        </VisuallyHidden>

        {file.category === "Video" && (
          <video controls className="w-full max-h-[70vh]">
            <source src={file.link} />
          </video>
        )}

        {file.category === "Image" && (
          <img
            src={file.link}
            alt={file.name}
            className="max-h-[70vh] mx-auto"
          />
        )}

        {file.category === "PDF" && (
          <iframe
            src={file.link}
            className="w-full h-[70vh]"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FilePreviewDialog;
