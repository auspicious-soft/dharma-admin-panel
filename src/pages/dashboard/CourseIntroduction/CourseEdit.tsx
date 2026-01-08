import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BinMinusIn } from "iconoir-react";
import SuccessfullyIcon from "@/assets/successfully-icon.png";
import CourseSelect from "@/components/reusableComponents/CourseSelect";
import QuestionSuccessDialog from "@/components/dialogs/QuestionSuccessDialog";

interface BulletPoint {
  id: string;
  text: string;
}

interface BulletSection {
  id: string;
  title: string;
  points: BulletPoint[];
}

interface AccordionItem {
  id: string;
  question: string;
  description: string;
}

interface Accordion {
  id: string;
  title: string;
  items: AccordionItem[];
}

interface FileUpload {
  id: string;
  fileName: string;
  fileType: string;
  file: File | null;
  videoUrl: string;
}

interface UploadSection {
  id: string;
  title: string;
  files: FileUpload[];
}

const CourseEdit = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [bulletSections, setBulletSections] = useState<BulletSection[]>([
    {
      id: "1",
      title: "",
      points: [{ id: "1-1", text: "" }],
    },
  ]);
  const [accordions, setAccordions] = useState<Accordion[]>([
    {
      id: "1",
      title: "",
      items: [
        {
          id: "1-1",
          question: "Title",
          description: "",
        },
      ],
    },
  ]);

  const [uploadSections, setUploadSections] = useState<UploadSection[]>([
    {
      id: "1",
      title: "",
      files: [
        { id: "1-1", fileName: "", fileType: "PDF", file: null, videoUrl: "" },
      ],
    },
  ]);

  const addBulletSection = () => {
    const newSection: BulletSection = {
      id: Date.now().toString(),
      title: "",
      points: [
        { id: `${Date.now()}-1`, text: "" },
        { id: `${Date.now()}-2`, text: "" },
      ],
    };
    setBulletSections([...bulletSections, newSection]);
  };

  const removeBulletSection = (sectionId: string) => {
    setBulletSections(
      bulletSections.filter((section) => section.id !== sectionId)
    );
  };

  const updateSectionTitle = (sectionId: string, title: string) => {
    setBulletSections(
      bulletSections.map((section) =>
        section.id === sectionId ? { ...section, title } : section
      )
    );
  };

  const addBulletPoint = (sectionId: string) => {
    setBulletSections(
      bulletSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              points: [...section.points, { id: `${Date.now()}`, text: "" }],
            }
          : section
      )
    );
  };

  const removeBulletPoint = (sectionId: string, pointId: string) => {
    setBulletSections(
      bulletSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              points: section.points.filter((point) => point.id !== pointId),
            }
          : section
      )
    );
  };

  const updateBulletPoint = (
    sectionId: string,
    pointId: string,
    text: string
  ) => {
    setBulletSections(
      bulletSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              points: section.points.map((point) =>
                point.id === pointId ? { ...point, text } : point
              ),
            }
          : section
      )
    );
  };

  const addAccordion = () => {
    const newAccordion: Accordion = {
      id: Date.now().toString(),
      title: "",
      items: [{ id: `${Date.now()}-1`, question: "", description: "" }],
    };
    setAccordions([...accordions, newAccordion]);
  };

  const removeAccordion = (accordionId: string) => {
    setAccordions(accordions.filter((acc) => acc.id !== accordionId));
  };

  const updateAccordionTitle = (id: string, title: string) => {
    setAccordions(
      accordions.map((acc) => (acc.id === id ? { ...acc, title } : acc))
    );
  };

  const addAccordionItem = (accordionId: string) => {
    setAccordions(
      accordions.map((acc) =>
        acc.id === accordionId
          ? {
              ...acc,
              items: [
                ...acc.items,
                { id: `${Date.now()}`, question: "", description: "" },
              ],
            }
          : acc
      )
    );
  };

  const removeAccordionItem = (accordionId: string, itemId: string) => {
    setAccordions(
      accordions.map((acc) =>
        acc.id === accordionId
          ? {
              ...acc,
              items: acc.items.filter((item) => item.id !== itemId),
            }
          : acc
      )
    );
  };

  const updateAccordionItem = (
    accordionId: string,
    itemId: string,
    field: "question" | "description",
    value: string
  ) => {
    setAccordions(
      accordions.map((acc) =>
        acc.id === accordionId
          ? {
              ...acc,
              items: acc.items.map((item) =>
                item.id === itemId ? { ...item, [field]: value } : item
              ),
            }
          : acc
      )
    );
  };

  const updateUploadSectionTitle = (sectionId: string, title: string) => {
    setUploadSections(
      uploadSections.map((section) =>
        section.id === sectionId ? { ...section, title } : section
      )
    );
  };

  const addFileUpload = (sectionId: string) => {
    setUploadSections(
      uploadSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              files: [
                ...section.files,
                {
                  id: `${Date.now()}`,
                  fileName: "",
                  fileType: "PDF",
                  file: null,
                  videoUrl: "",
                },
              ],
            }
          : section
      )
    );
  };

  const removeFileUpload = (sectionId: string, fileId: string) => {
    setUploadSections(
      uploadSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              files: section.files.filter((file) => file.id !== fileId),
            }
          : section
      )
    );
  };

  const updateFileUpload = (
    sectionId: string,
    fileId: string,
    field: "fileName" | "fileType" | "videoUrl" | "file",
    value: string | File | null
  ) => {
    setUploadSections(
      uploadSections.map((section) =>
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
  const handleSaveChanges = () => {
    // Here you can add your save logic
    // For now, we'll just open the success dialog
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <h2 className="text-2xl font-bold">Course Introduction</h2>

        <CourseSelect />
      </div>
      {/* Primary Introduction */}
      <div className="flex flex-col gap-2">
        <h4 className="justify-start text-gray-700 text-sm font-normal">
          Primary Introduction
        </h4>
        <div className="p-4 bg-blue-50 rounded-[20px] space-y-4">
          <Input
            id="course"
            type="text"
            placeholder="Name of Course"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="bg-white"
          />
          <Textarea
            id="description"
            placeholder="Description of the course"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            rows={4}
            className="bg-white"
          />
        </div>
      </div>

      {/* Bullet Points Sections */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h4 className="justify-start text-gray-700 text-sm font-normal">
            Bullet Points
          </h4>
          <button
            onClick={addBulletSection}
            className="text-sm text-blue-600 underline"
          >
            + Add New Bullet Points Section
          </button>
        </div>

        {bulletSections.map((section, sectionIndex) => (
          <div key={section.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
              {sectionIndex > 0 && (
                <div className="flex justify-between items-start w-full mt-5">
                  <h4 className="justify-start text-gray-700 text-sm font-normal">
                    Bullet Points
                  </h4>
                  <button
                    onClick={() => removeBulletSection(section.id)}
                    className="text-sm text-[#f50927] underline"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
            <div className="p-4 bg-blue-50 rounded-[20px] space-y-4">
              <Input
                type="text"
                placeholder="Title of section"
                value={section.title}
                onChange={(e) => updateSectionTitle(section.id, e.target.value)}
                className="bg-white"
              />

              <div className="space-y-3 lg:pl-7">
                {section.points.map((point) => (
                  <div key={point.id} className="flex items-center gap-2">
                    <Input
                      type="text"
                      placeholder={`Bullet point ${
                        section.points.indexOf(point) + 1
                      }`}
                      value={point.text}
                      onChange={(e) =>
                        updateBulletPoint(section.id, point.id, e.target.value)
                      }
                      className="bg-white"
                    />
                    {section.points.length > 1 && (
                      <button
                        onClick={() => removeBulletPoint(section.id, point.id)}
                        className="p-2 bg-[#f50927] rounded-md text-white transition-colors"
                      >
                        <BinMinusIn className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => addBulletPoint(section.id)}
                  className="text-blue-600 underline text-sm"
                >
                  + Add New
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Accordions Section */}
      <div className="flex flex-col ">
        <div className="flex justify-between items-center">
          <h4 className="justify-start text-gray-700 text-sm font-normal">
            Accordions
          </h4>
          <button
            onClick={addAccordion}
            className="text-sm text-blue-600 underline"
          >
            + Add New Accordians Section
          </button>
        </div>

        {accordions.map((accordion, accordionIndex) => (
          <div key={accordion.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
              {accordionIndex > 0 && (
                <div className="flex justify-between items-start w-full mt-5">
                  <h4 className="justify-start text-gray-700 text-sm font-normal">
                    Accordions
                  </h4>
                  <button
                    onClick={() => removeAccordion(accordion.id)}
                    className="text-sm text-[#f50927] underline"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
            <div className="p-4 bg-blue-50 rounded-[20px] space-y-4">
              <Input
                type="text"
                placeholder="Title of section"
                value={accordion.title}
                onChange={(e) =>
                  updateAccordionTitle(accordion.id, e.target.value)
                }
                className="bg-white"
              />

              <div className="space-y-3 lg:pl-7">
                {accordion.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-3 p-3 bg-white rounded-lg"
                  >
                    <div className="flex items-end gap-2">
                      <div className="flex-1 space-y-3">
                        <Input
                          type="text"
                          placeholder="Question"
                          value={item.question}
                          onChange={(e) =>
                            updateAccordionItem(
                              accordion.id,
                              item.id,
                              "question",
                              e.target.value
                            )
                          }
                        />

                        <Textarea
                          placeholder="Description"
                          value={item.description}
                          onChange={(e) =>
                            updateAccordionItem(
                              accordion.id,
                              item.id,
                              "description",
                              e.target.value
                            )
                          }
                          rows={4}
                        />
                      </div>
                      {accordion.items.length > 1 && (
                        <button
                          onClick={() =>
                            removeAccordionItem(accordion.id, item.id)
                          }
                          className="p-2 bg-[#f50927] rounded-md text-white transition-colors"
                        >
                          <BinMinusIn className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => addAccordionItem(accordion.id)}
                  className="text-blue-600 underline text-sm"
                >
                  + Add New
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Files Section */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h4 className="justify-start text-gray-700 text-sm font-normal">
            Upload Files
          </h4>
        </div>

        {uploadSections.map((section, sectionIndex) => (
          <div key={section.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
              {sectionIndex > 0 && (
                <div className="flex justify-between items-start w-full mt-5">
                  <h4 className="justify-start text-gray-700 text-sm font-normal">
                    Upload Files
                  </h4>
                </div>
              )}
            </div>
            <div className="p-4 bg-blue-50 rounded-[20px] space-y-4">
              <Input
                type="text"
                placeholder="Title of section"
                value={section.title}
                onChange={(e) =>
                  updateUploadSectionTitle(section.id, e.target.value)
                }
                className="bg-white"
              />

              <div className="space-y-3 lg:pl-7">
                {section.files.map((fileUpload) => (
                  <div
                    key={fileUpload.id}
                    className="flex items-end lg:items-center gap-2 p-2 lg:p-4 bg-white rounded-lg w-full"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
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
                    {section.files.length > 1 && (
                      <button
                        onClick={() =>
                          removeFileUpload(section.id, fileUpload.id)
                        }
                        className="p-2 bg-[#f50927] rounded-md text-white transition-colors "
                      >
                        <BinMinusIn className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => addFileUpload(section.id)}
                  className="text-blue-600 underline text-sm"
                >
                  + Add New
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pt-2 max-w-xl ml-auto w-full ">
        <Button variant="outline">Cancel</Button>

        <Button type="submit" className="w-full" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </div>
      {/* Success Dialog */}
      <QuestionSuccessDialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        icon={SuccessfullyIcon}
        title="Saved Successfully"
      />

    </div>
  );
};

export default CourseEdit;
