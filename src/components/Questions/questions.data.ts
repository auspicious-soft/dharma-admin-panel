export type FileItem = {
  id: string;
  categoryName: string;
  totalQuestions: number;
  type: "Mock Questions" | "Practice Questions";
};

export const filesData: FileItem[] = [
  {
    id: "1",
    categoryName: "Project Management Exam",
    totalQuestions: 580,
    type: "Mock Questions",
  },
  {
    id: "2",
    categoryName: "Project Management Quiz",
    totalQuestions: 580,
    type: "Mock Questions",
  },
  {
    id: "3",
    categoryName: "Management Assessment",
    totalQuestions: 580,
    type: "Practice Questions",
  },
  {
    id: "4",
    categoryName: "Exploring Literature Test",
    totalQuestions: 580,
    type: "Practice Questions",
  },
];
