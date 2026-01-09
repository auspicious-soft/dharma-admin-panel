export interface RatingsReviewsType {
  id: number;
  rating: number; // 1–5
  review: string;
  personName: string;
  companyName: string;
  position: string;
  userId: string;
  source: string;
}
