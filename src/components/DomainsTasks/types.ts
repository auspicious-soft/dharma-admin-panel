// types.ts
export interface ContentItem {
  id: string;
  title: string;
}

export interface Module {
  id: string;
  title: string;
  task: number;
  items: ContentItem[];
}
