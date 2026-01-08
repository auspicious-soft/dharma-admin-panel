"use client";

import { useState, useMemo } from "react";
import { ReusableFilterTabs } from "@/components/reusableComponents/ReusableFilterTabs";
import UploadFileTable from "@/components/uploadFiles/uploadFileTable";
import { filesData } from "@/components/uploadFiles/uploadFiles.data";
import { uploadFilesColumns } from "@/components/uploadFiles/uploadFiles.columns";
import TableSearch from "@/components/reusableComponents/TableSearch"
import FilePreviewDialog from "@/components/uploadFiles/FilePreviewDialog";
import type { FileItem } from "@/components/uploadFiles/uploadFiles.data";
import UploadFileDialog from "@/components/uploadFiles/uploadFileDialog";

const UploadFiles = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);

  const filteredData = useMemo(() => {
    return filesData.filter(
      (item) => activeTab === "all" || item.fileType === activeTab
    );
  }, [activeTab]);

  return (
    <>
      {/* ===== PAGE ===== */}
      <div className="flex flex-col gap-4">
        <h2 className="text-black text-lg md:text-2xl font-bold nd:leading-[46px]">Upload Files</h2>

        <div className="flex justify-between items-center flex-wrap gap-3">
          <ReusableFilterTabs
          value={activeTab}
            defaultValue="all"
            onValueChange={setActiveTab}
            tabs={[
              { value: "all", label: "All" },
              { value: "videos", label: "Videos" },
              { value: "files", label: "Files" },
              { value: "images", label: "Images" },
            ]}
          />

          <div className="flex gap-1 md:gap-3 items-center">
            <TableSearch />
            <UploadFileDialog />
          </div>
        </div>

        <UploadFileTable
          data={filteredData}
          columns={uploadFilesColumns((file) => {
            setSelectedFile(file);
            setOpen(true);
          })}
        />
      </div>

      {/* ===== POPUP (ONLY PREVIEW) ===== */}
      <FilePreviewDialog
        open={open}
        onOpenChange={setOpen}
        file={selectedFile}
      />
    </>
  );
};

export default UploadFiles;
