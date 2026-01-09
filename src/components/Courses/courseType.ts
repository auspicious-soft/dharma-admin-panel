export type CourseStatus = "Active" | "Inactive";

export interface CourseType {
  id: number;
  name: string;
  image: string;
  rank: number;
  status: CourseStatus;
}
