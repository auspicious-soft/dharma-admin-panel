import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Attachment } from "iconoir-react";

type FileUploadInputProps = {
  placeholder?: string;
  accept?: string;
  onFileChange?: (file: File | null) => void;
};

export default function FileUploadInput({
  placeholder = "Select",
}: FileUploadInputProps) {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <>
      {/* Hidden file input */}
      <input
        ref={fileRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
      {/* Styled input */}
      <div className="relative w-full" onClick={handleClick} >
        <Input
          readOnly
          value={fileName}
          placeholder={placeholder}
          className="
           pr-10
          "
        />
        {/* Edit icon */}
        <Attachment className="absolute w-4 right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </>
  );
}
