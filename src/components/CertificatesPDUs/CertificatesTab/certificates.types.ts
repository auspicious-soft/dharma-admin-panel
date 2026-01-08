export type ItemPurchased = {
  id: string;
  CompON: string;
  userName: string;
  email: string;
  course: string;
  status: "Sent" | "To be Issued";
  certificateImage?: string;
};
