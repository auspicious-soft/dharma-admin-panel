export type ItemPurchased = {
  id: string;
  templateName: string;
  course: string;
  delivery: string;
  status: "Active" | "Inactive";
  certificateImage?: string;
};
