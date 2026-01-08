import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FileItem } from "./manageCategories.data";
import { Button } from "@/components/ui/button";
import CategoriesIcon from "@/assets/category-icon.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type ManageCategoriesDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: FileItem | null;
};

const ManageCategoriesDialog = ({
  open,
  onOpenChange,
  data,
}: ManageCategoriesDialogProps) => {
  const isEdit = Boolean(data);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl gap-7">
        <DialogHeader className="gap-3">
          <img
            src={CategoriesIcon}
            alt="Categories Icon"
            className="max-w-[80px] md:max-w-[100px] m-auto"
          />
          <DialogTitle className="m-0 text-center text-black font-bold text-2xl md:text-3xl leading-[32px] md:leading-[46px]">
            {isEdit ? "Edit Category" : "Add New Category"}
          </DialogTitle>
          <VisuallyHidden>
            <DialogDescription></DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <div className="space-y-4">
          <Input type="text" placeholder="Enter Name" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label className="text-paragraph">Order</Label>
              <Input type="text" placeholder="Order#" />
            </div>
            <div className="space-y-1">
              <Label className="text-paragraph">Price</Label>
              <Input type="number" placeholder="Enter Price" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-2 pt-4">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ManageCategoriesDialog;
