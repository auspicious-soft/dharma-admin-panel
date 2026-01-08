// types.ts
export type ContentType = "video" | "slide" | "quiz";

export interface ContentItem {
  id: string;
  title: string;
  duration: string;
  type: ContentType;
}

export interface Module {
  id: string;
  title: string;
  videos: number;
  slides: number;
  questions: number;
  items: ContentItem[];
}
