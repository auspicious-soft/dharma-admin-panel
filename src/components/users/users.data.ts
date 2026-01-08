export type FileItem = {
  id: string;
  name: string;
  avatar?: string;
  email: string;
  phone: string;
  startDate: string;  
  endDate?: string;  
  channel: "iOS" | "Android" | "Web";
  course: string;
  status: "active" | "blocked" | "deleted"; 
};

export const filesData: FileItem[] = [
  {
    id: "1",
    name: "Naomi Campbell",
      avatar: "/user-image.png",
    email: "Naomi.Campbell@example.com",
    phone: "+1555-345-2345",
    startDate: "08/03/2017",
    channel: "iOS",
    course: "PgMP",
    status: "active",
  },
  {
    id: "2",
    name: "John Legend",
      avatar: "/user-image.png",
    email: "John.Legend@example.com",
    phone: "+1555-234-9876",
    startDate: "03/04/2015",
    channel: "Web",
    course: "PgMP",
    status: "active",
  },
  {
    id: "3",
    name: "Robert Downey",
     avatar: "/user-image.png",
    email: "Robert.Downey@example.com",
    phone: "+1555-123-4567",
    startDate: "09/12/2018",
    endDate: "12/20/2023",
    channel: "Web",
    course: "PgMP",
    status: "blocked",
  },
    {
    id: "4",
    name: "Robert Downey",
  
    email: "Robert.Downey@example.com",
    phone: "+1555-123-4567",
    startDate: "09/12/2018",
    endDate: "12/20/2023",
    channel: "Web",
    course: "PgMP",
    status: "deleted",
  },
  // Add more users here
];
