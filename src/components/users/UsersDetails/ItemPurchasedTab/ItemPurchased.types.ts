export type ItemPurchased = {
  order: string;
  category: string;
  itemPurchased: string;
  type: "Manual" | "Paid";
  amountPaid: string;
  purchasedOn: string;
  expiresOn: string;
  cancelled?: boolean;
};
