export type FileItem = {
  id: string;
  name: string;
  totalQuestions: number;
  plan:  "Gold" | "Silver" | "Platinum";
  duration: string; 
  type: "Mock Questions" | "Practice Questions";
};

export const filesData: FileItem[] = [
  {
    id: "1",
    name: "Project Management Exam",
    totalQuestions: 580,
    plan: "Gold",
    duration: "03:40:00",
    type: "Mock Questions",
  },
  {
    id: "2",
    name: "Project Management Quiz",
    totalQuestions: 580,
    plan: "Silver",
    duration: "03:40:00",
    type: "Mock Questions",
  },
  {
    id: "3",
    name: "Management Assessment",
    totalQuestions: 580,
    plan: "Platinum",
    duration: "03:40:00",
    type: "Practice Questions",
  },
  {
    id: "4",
    name: "Exploring Literature Test",
    totalQuestions: 580,
    plan: "Gold",
    duration: "03:40:00",
    type: "Practice Questions",
  },
];
