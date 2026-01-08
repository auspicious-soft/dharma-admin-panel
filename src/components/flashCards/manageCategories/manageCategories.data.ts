export type FileItem = {
  id: string;
  nameCategory: string;
  numberFlashCards: number;
  price: string; 
};

export const filesData: FileItem[] = [
  {
    id: "1",
    nameCategory: "Project Management Exam",
    numberFlashCards: 580,
    price: "20",
  },
  {
    id: "2",
    nameCategory: "Project Management Quiz",
    numberFlashCards: 580,
    price: "20",
  },
  {
    id: "3",
    nameCategory: "Management Assessment",
    numberFlashCards: 580,
    price: "20",
  },
  {
    id: "4",
    nameCategory: "Exploring Literature Test",
    numberFlashCards: 580,
    price: "20",
  },
];
