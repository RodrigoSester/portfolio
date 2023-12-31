export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Information {
  id: number;
  title: string;
  icon: string;
  content: string;
  caption?: string;
}
