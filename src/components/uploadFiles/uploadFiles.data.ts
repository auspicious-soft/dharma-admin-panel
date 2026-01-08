export type FileItem = {
  id: string;
  name: string;
  category: "PDF" | "Video" | "Image" | "Doc";
  course: string;
  link: string;
  fileType: "all" | "videos" | "files" | "images";
};

export const filesData: FileItem[] = [
  { id: "1", name: "Guide_to_Agile.pdf", category: "PDF", course: "PgMP", link: "/dummy-pdf_2.pdf", fileType: "files" },
  { id: "2", name: "Scope_Management_Plan.pdf", category: "PDF", course: "PgMP", link: "/dummy-pdf_2.pdf", fileType: "files" },
  { id: "3", name: "Program_Overview_Video.mp4", category: "Video", course: "PgMP", link: "/dummy-video.mp4", fileType: "videos" },
  { id: "4", name: "Project_Flow_Chart.png", category: "Image", course: "PgMP", link: "/dummy-image.jpg", fileType: "images" },
];
