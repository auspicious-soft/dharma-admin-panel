import React, { useState } from "react";
import { BinMinusIn, EditPencil } from "iconoir-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "../dialogs/ConfirmDialog";

type FlashCardItemProps = {
  id: string;
  question: string;
  image?: string | null;
  onDelete?: (id: string) => void;
};

const FlashCardsItem = ({ id, question, image }: FlashCardItemProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleEdit = () => {
    navigate(`/flash-cards/edit-flash-cards/${id}`);
  };

    function onDelete() {
        throw new Error("Function not implemented.");
    }

  return (
    <>
      {" "}
      <div className="p-4 relative bg-light-blue rounded-[20px] outline outline-1 outline-[#556378]/40 flex flex-col items-center gap-[10px] justify-center min-h-44">
        {image && (
          <img 
            src={image}
            alt="Flash card"
            className="w-[118px] h-[100px] rounded-[10px]"
          />
        )}

        <h4 className="text-center text-sm font-medium leading-7 text-Desc-464646">
          {question}
        </h4>

        <div className="flex gap-2 absolute top-3 right-3">
          <Button size="icon" className="rounded-lg" onClick={handleEdit}>
            <EditPencil className="w-4" />
          </Button>

          <Button
            size="icon"
            variant="destructive"
            className="rounded-lg"
            onClick={() => setOpen(true)}
          >
            <BinMinusIn className="w-4" />
          </Button>
        </div>
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

export default FlashCardsItem;
