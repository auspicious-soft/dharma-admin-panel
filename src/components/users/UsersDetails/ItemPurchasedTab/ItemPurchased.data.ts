import { ItemPurchased } from "./ItemPurchased.types";

export const itemPurchasedData: ItemPurchased[] = [
  {
    order: "01",
    category: "Mock Exam",
    itemPurchased: "Name of Exam",
    type: "Manual",
    amountPaid: "$199.99",
    purchasedOn: "10/10/2023",
    expiresOn: "10/10/2024",
  },

  {
    order: "02",
    category: "Subscription",
    itemPurchased: "Gold",
    type: "Paid",
    amountPaid: "$149.99",
    purchasedOn: "09/01/2023",
    expiresOn: "09/01/2024",
    cancelled: true, // ❌ shows "Cancelled"
  },

  {
    order: "03",
    category: "Mock Exam",
    itemPurchased: "Name of Exam",
    type: "Manual",
    amountPaid: "$199.99",
    purchasedOn: "10/10/2023",
    expiresOn: "10/10/2023",
  },

  {
    order: "04",
    category: "Subscription",
    itemPurchased: "Silver",
    type: "Paid",
    amountPaid: "$99.99",
    purchasedOn: "08/15/2023",
    expiresOn: "08/15/2023",
    // ✅ NOT cancelled → Action column will be EMPTY (return null)
  },
];
