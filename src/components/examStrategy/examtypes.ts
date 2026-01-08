// types.ts
export type ContentType = "video" | "pdf";

export interface ContentItem {
  id: string;
  title: string;
  type: ContentType;
}

export interface Module {
  id: string;
  title: string;
  items: ContentItem[];
}
