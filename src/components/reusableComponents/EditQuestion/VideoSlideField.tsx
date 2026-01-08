import React, { useState } from "react";
import TimeInput from "@/components/reusableComponents/TimeInput";
import RichTextEditor from "@/components/reusableComponents/RichTextEditor";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FileUpload {
  id: string;
  fileName: string;
  duration: string;
  fileType: "" | "PDF" | "Video" | "Questionnaire";
  file: File | null;
  videoUrl: string;
}

interface UploadSection {
  id: string;
  title: string;
  files: FileUpload[];
}

const VideoSlideField = () => {
  const [content, setContent] = useState("");

  const [uploadSections, setUploadSections] = useState<UploadSection[]>([
    {
      id: "1",
      title: "",
      files: [
        {
          id: "1-1",
          fileName: "",
          duration: "",
          fileType: "",
          file: null,
          videoUrl: "",
        },
      ],
    },
  ]);

  const updateFileUpload = (
    sectionId: string,
    fileId: string,
    field: keyof FileUpload,
    value: unknown
  ) => {
    setUploadSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              files: section.files.map((file) =>
                file.id === fileId ? { ...file, [field]: value } : file
              ),
            }
          : section
      )
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label className="text-paragraph">Course Introduction</Label>
        <RichTextEditor value={content} onChange={setContent} />
      </div>

      {uploadSections.map((section) => (
        <div key={section.id} className="flex flex-col gap-2">
          <div className=" space-y-4">
            <div className="space-y-3 lg:pl-7">
              {section.files.map((fileUpload) => (
                <div
                  key={fileUpload.id}
                  className="flex flex-col items-end gap-4 p-4 lg:p-4 bg-white rounded-lg w-full"
                >
                  <div className="flex flex-col lg:flex-row items-end lg:items-center gap-4 w-full">
                    <Select defaultValue="Active">
                      <SelectTrigger className="lg:max-w-36">
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">Select #</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 w-full">
                      <Input
                        type="text"
                        placeholder="Name of file"
                        value={fileUpload.fileName}
                        onChange={(e) =>
                          updateFileUpload(
                            section.id,
                            fileUpload.id,
                            "fileName",
                            e.target.value
                          )
                        }
                      />
                      <TimeInput
                        value={fileUpload.duration}
                        onChange={(value) =>
                          updateFileUpload(
                            section.id,
                            fileUpload.id,
                            "duration",
                            value
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 flex-1">
                    <Select
                      value={fileUpload.fileType}
                      onValueChange={(value) =>
                        updateFileUpload(
                          section.id,
                          fileUpload.id,
                          "fileType",
                          value
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select file type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PDF">PDF</SelectItem>
                        <SelectItem value="Video">Video</SelectItem>
                        <SelectItem value="Questionnaire">
                          Questionnaire
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    {fileUpload.fileType === "Video" && (
                      <Input
                        type="url"
                        placeholder="Enter video URL"
                        value={fileUpload.videoUrl}
                        onChange={(e) =>
                          updateFileUpload(
                            section.id,
                            fileUpload.id,
                            "videoUrl",
                            e.target.value
                          )
                        }
                      />
                    )}

                    {/* PDF / Questionnaire → File upload */}
                    {(fileUpload.fileType === "PDF" ||
                      fileUpload.fileType === "Questionnaire") && (
                      <Input
                        type="file"
                        onChange={(e) =>
                          updateFileUpload(
                            section.id,
                            fileUpload.id,
                            "file",
                            e.target.files?.[0] || null
                          )
                        }
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoSlideField;
